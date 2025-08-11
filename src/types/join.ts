// Join request types - mirroring backend types
// TODO: Replace with @tree-pp/shared-types once package is fixed

export interface BaseJoinRequest {
  type: 'offsetter' | 'land_provider' | 'volunteer' | 'contributor';
  name: string;
  email: string;
}

export interface OffsetterData {
  numberOfTrees: number;
  location: string;
}

export interface LandProviderData {
  landLocation: string;
  landSize: string;
  preferredTrees: string;
  notes?: string;
}

export interface VolunteerData {
  volunteerLocation: string;
  availableDates: string;
}

export interface ContributorData {
  skills: string;
  howToHelp: string;
}

export interface OffsetterRequest extends BaseJoinRequest {
  type: 'offsetter';
  offsetter: OffsetterData;
}

export interface LandProviderRequest extends BaseJoinRequest {
  type: 'land_provider';
  landProvider: LandProviderData;
}

export interface VolunteerRequest extends BaseJoinRequest {
  type: 'volunteer';
  volunteer: VolunteerData;
}

export interface ContributorRequest extends BaseJoinRequest {
  type: 'contributor';
  contributor: ContributorData;
}

export type JoinRequest =
  | OffsetterRequest
  | LandProviderRequest
  | VolunteerRequest
  | ContributorRequest;

export interface CreateJoinRequestDto {
  type: 'offsetter' | 'land_provider' | 'volunteer' | 'contributor';
  name: string;
  email: string;
  offsetter?: OffsetterData;
  landProvider?: LandProviderData;
  volunteer?: VolunteerData;
  contributor?: ContributorData;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Frontend form data interface
export interface JoinFormData {
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

// Form field configuration
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'textarea';
  required: boolean;
}

// Form block configuration
export interface JoinFormBlock {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon: any; // React icon component
  modalTitle: string;
  fields: FormField[];
  backendType: 'offsetter' | 'land_provider' | 'volunteer' | 'contributor';
}
