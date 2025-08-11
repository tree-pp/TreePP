'use client';
import React, { useState } from 'react';
import axios from 'axios';
import {
  FaTree,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaHeart,
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
} from 'react-icons/fa';
import {
  CreateJoinRequestDto,
  ApiResponse,
  JoinRequest,
} from '@tree-pp/shared-types';

// Local interfaces for form-specific types that aren't in the shared package
interface JoinFormData {
  name: string;
  email: string;
  trees?: string;
  location?: string;
  landLocation?: string;
  landSize?: string;
  preferredTrees?: string;
  notes?: string;
  volunteerLocation?: string;
  availableDates?: string;
  skills?: string;
  howToHelp?: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'textarea';
  required: boolean;
}

interface JoinFormBlock {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon: any; // React icon component
  modalTitle: string;
  fields: FormField[];
  backendType: 'offsetter' | 'land_provider' | 'volunteer' | 'contributor';
}

interface FormErrors {
  [key: string]: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// API configuration
// const API_BASE_URL = process.env.BASE_URL || 'http://localhost:4000';
const API_BASE_URL = process.env.BASE_URL || 'https://api.treepp.org';

// Validation functions
const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`;
  }
  return null;
};

const validateNumber = (value: string, fieldName: string): string | null => {
  if (!value) return `${fieldName} is required`;
  const num = parseInt(value);
  if (isNaN(num) || num <= 0) return `${fieldName} must be a positive number`;
  return null;
};

const validateForm = (data: JoinFormData, fields: FormField[]): FormErrors => {
  const errors: FormErrors = {};

  fields.forEach((field) => {
    const value = data[field.name as keyof JoinFormData] || '';

    if (field.required) {
      const requiredError = validateRequired(value, field.label);
      if (requiredError) {
        errors[field.name] = requiredError;
        return;
      }
    }

    if (field.type === 'email' && value) {
      const emailError = validateEmail(value);
      if (emailError) {
        errors[field.name] = emailError;
        return;
      }
    }

    if (field.type === 'number' && value) {
      const numberError = validateNumber(value, field.label);
      if (numberError) {
        errors[field.name] = numberError;
        return;
      }
    }

    // Custom validation for specific fields
    if (field.name === 'trees' && value) {
      const num = parseInt(value);
      if (num > 1000) {
        errors[field.name] = 'Maximum 1000 trees can be planted at once';
      }
    }

    if (field.name === 'landSize' && value) {
      if (!/^\d+(\.\d+)?\s*(acres?|hectares?|ha|ac)$/i.test(value)) {
        errors[field.name] =
          'Please specify size with unit (e.g., "5 acres" or "2 hectares")';
      }
    }
  });

  return errors;
};

// Helper function to transform form data to API format
const transformFormDataToAPI = (
  formData: JoinFormData,
  backendType: string
): CreateJoinRequestDto => {
  const baseData = {
    name: formData.name,
    email: formData.email,
  };

  switch (backendType) {
    case 'offsetter':
      return {
        ...baseData,
        type: 'offsetter',
        offsetter: {
          numberOfTrees: parseInt(formData.trees || '0'),
          location: formData.location || '',
        },
      } as CreateJoinRequestDto;
    case 'land_provider':
      return {
        ...baseData,
        type: 'land_provider',
        landProvider: {
          landLocation: formData.landLocation || '',
          landSize: formData.landSize || '',
          preferredTrees: formData.preferredTrees || '',
          notes: formData.notes || '',
        },
      } as CreateJoinRequestDto;
    case 'volunteer':
      return {
        ...baseData,
        type: 'volunteer',
        volunteer: {
          volunteerLocation: formData.volunteerLocation || '',
          availableDates: formData.availableDates || '',
        },
      } as CreateJoinRequestDto;
    case 'contributor':
      return {
        ...baseData,
        type: 'contributor',
        contributor: {
          skills: formData.skills || '',
          howToHelp: formData.howToHelp || '',
        },
      } as CreateJoinRequestDto;
    default:
      throw new Error(`Unknown backend type: ${backendType}`);
  }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const JoinPage = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formData, setFormData] = useState<JoinFormData>({
    name: '',
    email: '',
    trees: '',
    location: '',
    landLocation: '',
    landSize: '',
    preferredTrees: '',
    notes: '',
    volunteerLocation: '',
    availableDates: '',
    skills: '',
    howToHelp: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: '' }));
    }

    // Clear API error when user starts typing
    if (apiError) {
      setApiError(null);
    }
  };

  const handleSubmit = async (block: JoinFormBlock) => {
    // Validate form before submission
    const errors = validateForm(formData, block.fields);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setApiError(null);

    try {
      // Transform form data to API format
      const apiData = transformFormDataToAPI(formData, block.backendType);

      // Submit to API
      const response = await axios.post<ApiResponse<JoinRequest>>(
        `${API_BASE_URL}/join`,
        apiData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 second timeout
        }
      );

      if (response.data.success) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setActiveModal(null);
        setFormErrors({});
        setApiError(null);

        // Reset form after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            name: '',
            email: '',
            trees: '',
            location: '',
            landLocation: '',
            landSize: '',
            preferredTrees: '',
            notes: '',
            volunteerLocation: '',
            availableDates: '',
            skills: '',
            howToHelp: '',
          });
        }, 3000);
      } else {
        throw new Error(response.data.error?.message || 'Submission failed');
      }
    } catch (error: any) {
      setIsSubmitting(false);

      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data?.message ||
          error.response.data?.error ||
          `Server error: ${error.response.status}`;
        setApiError(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        setApiError(
          'Network error: Unable to connect to server. Please check your internet connection and try again.'
        );
      } else {
        // Something else happened
        setApiError(
          error.message || 'An unexpected error occurred. Please try again.'
        );
      }

      console.error('Submission error:', error);
    }
  };

  const joinBlocks: JoinFormBlock[] = [
    {
      id: 'plant-trees',
      title: 'Offset Your Carbon Footprint by Planting Trees',
      description:
        'We all create carbon footprints in many ways. Offset part of yours with Tree++ by planting trees.',
      buttonText: 'Plant Trees',
      icon: FaTree,
      modalTitle: 'Plant Trees',
      backendType: 'offsetter',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        {
          name: 'trees',
          label: 'Number of trees to plant',
          type: 'number',
          required: true,
        },
        {
          name: 'location',
          label: 'Country/Location',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      id: 'enlist-land',
      title: 'Enlist Your Land for Tree Plantation',
      description:
        'Have unused land? List it in Tree++ with your preferred tree types. When we get a match, we&apos;ll contact you to confirm before planting.',
      buttonText: 'Enlist Your Land',
      icon: FaMapMarkedAlt,
      modalTitle: 'Enlist Your Land',
      backendType: 'land_provider',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        {
          name: 'landLocation',
          label: 'Land Location',
          type: 'text',
          required: true,
        },
        {
          name: 'landSize',
          label: 'Land Size (acres/hectares)',
          type: 'text',
          required: true,
        },
        {
          name: 'preferredTrees',
          label: 'Preferred Trees',
          type: 'text',
          required: true,
        },
        {
          name: 'notes',
          label: 'Any notes',
          type: 'textarea',
          required: false,
        },
      ],
    },
    {
      id: 'volunteer',
      title: 'Join as a Volunteer',
      description:
        'Share your availability to join hands-on tree plantation events. If a match is found near you, we&apos;ll invite you.',
      buttonText: 'Join Volunteer',
      icon: FaHandsHelping,
      modalTitle: 'Join as Volunteer',
      backendType: 'volunteer',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        {
          name: 'volunteerLocation',
          label: 'Location',
          type: 'text',
          required: true,
        },
        {
          name: 'availableDates',
          label: 'Available Dates/Times',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      id: 'contributor',
      title: 'Contribute in Any Capacity',
      description:
        'Passionate about climate action but not sure how to help? Tell us your skills and we&apos;ll match you with opportunities.',
      buttonText: 'Join as Contributor',
      icon: FaHeart,
      modalTitle: 'Join as Contributor',
      backendType: 'contributor',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        {
          name: 'skills',
          label: 'Skills/Expertise',
          type: 'textarea',
          required: true,
        },
        {
          name: 'howToHelp',
          label: 'How you want to help',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
          <FaCheck className="mr-2" />
          Thank you! We&apos;ll be in touch soon.
        </div>
      )}

      {/* Main Content */}
      <div className="md:py-10 pt-10 mx-auto md:max-w-[90%] max-w-[95%]">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="head-text mb-4">
            Join Tree++ to Turn Emissions into Actions
          </h1>
          <p className="paragraph-text max-w-3xl mx-auto">
            Choose how you&apos;d like to contribute to our mission of creating
            a sustainable future through tree plantation and climate action.
          </p>
        </div>

        {/* Join Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-none">
          {joinBlocks.map((block) => (
            <div
              key={block.id}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <block.icon className="text-green-600" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-3 text-center text-gray-800">
                  {block.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => setActiveModal(block.id)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 uppercase tracking-wide text-sm"
              >
                {block.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Don&apos;t want to join, but stay updated with what Tree++ is
              doing? Subscribe to our newsletter.{' '}
              <span className="italic">
                The newsletter sends at most one email in every three months. No
                worries, no spam!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 uppercase tracking-wide text-xs whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {joinBlocks.map((block) => (
        <Modal
          key={block.id}
          isOpen={activeModal === block.id}
          onClose={() => {
            setActiveModal(null);
            setFormErrors({});
            setApiError(null);
          }}
          title={block.modalTitle}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(block);
            }}
          >
            {/* API Error Display */}
            {apiError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <div className="flex items-center text-red-800 text-sm">
                  <FaExclamationTriangle className="mr-2" size={14} />
                  {apiError}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {block.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name as keyof JoinFormData] || ''}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      required={field.required}
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 ${
                        formErrors[field.name]
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.name as keyof JoinFormData] || ''}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      required={field.required}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 ${
                        formErrors[field.name]
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  )}

                  {/* Error Message */}
                  {formErrors[field.name] && (
                    <div className="flex items-center mt-1 text-red-600 text-sm">
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {formErrors[field.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  setFormErrors({});
                  setApiError(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </Modal>
      ))}
    </div>
  );
};

export default JoinPage;
