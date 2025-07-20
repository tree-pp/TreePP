"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import EnlistLandForm from "./enlist-land/EnlistLandForm";
import PlantTreeForm from "./plant-tree/PlantTreeForm";
import VolunteerForm from "./volunteer/VolunteerForm";
import ContactForm from "./contact/ContactForm";
import NewsletterForm from "./newsletter/NewsletterForm";

const FORM_KEYS = [
  "enlist-land",
  "plant-tree",
  "volunteer",
  "contact",
  "newsletter",
];

const FORM_DESCRIPTIONS: Record<string, { title: string; description: string }> = {
  "enlist-land": {
    title: "Enlist Land",
    description:
      "Have land available for tree plantation? Share a brief description and location. Our team will review and get in touch to help you make an environmental impact.\nYour land will remain yours and you will get some free plants!",
  },
  "plant-tree": {
    title: "Plant Tree",
    description:
      "Support our mission by planting trees. You can offset your carbon footprint easily by planting trees or by donating to our cause. We offer regular update about your trees.",
  },
  "volunteer": {
    title: "Join as Volunteer",
    description:
      "Join our community of passionate volunteers! Register and take part in our campaigns, workshops and other activities.",
  },
  "contact": {
    title: "Like the idea? Contact us!",
    description:
      "Have questions, suggestions, or want to partner with us? Reach out and let us know how you’d like to help or collaborate.",
  },
  "newsletter": {
    title: "Newsletter Subscription",
    description:
      "Stay updated with our latest news, events, and impact stories. Subscribe to our monthly newsletter and be part of our green journey!",
  },
};

const JoinPage = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const formSectionRef = useRef<HTMLDivElement | null>(null);

  // Show form based on hash in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (FORM_KEYS.includes(hash)) {
        setActiveForm(hash);
      }
    }
  }, []);

  // Update hash when form changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (activeForm) {
        window.location.hash = `#${activeForm}`;
      } else {
        window.location.hash = "";
      }
    }
  }, [activeForm]);

  // Scroll to form section on mobile when activeForm changes
  useEffect(() => {
    if (activeForm && formSectionRef.current) {
      // Check if device is mobile (width < 768px)
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeForm]);

  const handleCardClick = useCallback((formKey: string) => {
    setActiveForm(formKey);
  }, []);

  const handleClose = useCallback(() => {
    setActiveForm(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-6xl mb-8">
            {/* Enlist Land Card */}
            <button
              onClick={() => handleCardClick("enlist-land")}
              className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center"
              aria-label="Enlist Land"
              id="enlist-land-card"
            >
              <span className="text-lg font-semibold mb-4">Enlist Land</span>
            </button>
            {/* Plant Tree Card */}
            <button
              onClick={() => handleCardClick("plant-tree")}
              className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center"
              aria-label="Plant Tree"
              id="plant-tree-card"
            >
              <span className="text-lg font-semibold mb-4">Plant Tree</span>
            </button>
            {/* Join as Volunteer Card */}
            <button
              onClick={() => handleCardClick("volunteer")}
              className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center"
              aria-label="Join as Volunteer"
              id="volunteer-card"
            >
              <span className="text-lg font-semibold mb-4">Join as Volunteer</span>
            </button>
            {/* Like the idea? Card */}
            <button
              onClick={() => handleCardClick("contact")}
              className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center"
              aria-label="Like the idea? Contact"
              id="contact-card"
            >
              <span className="text-lg font-semibold mb-4 text-center">Like the idea?<br/>Reach us to help</span>
            </button>
          </div>
          {/* Newsletter Subscription Link */}
          <div className="w-full max-w-md flex justify-center mb-8">
            <button
              onClick={() => handleCardClick("newsletter")}
              className="text-base font-medium text-blue-700 hover:underline text-center"
              aria-label="Subscribe to newsletter"
              id="newsletter-link"
            >
              Want to stay in touch? Subscribe to our monthly newsletter.
            </button>
          </div>
          {/* Show the selected form below the cards */}
          {activeForm && (
            <div
              ref={formSectionRef}
              className="w-full flex flex-col md:flex-row items-start justify-center gap-8 mt-4"
            >
              {/* Description on the left */}
              <div className="w-full md:w-1/2 max-w-md p-4 text-left mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">{FORM_DESCRIPTIONS[activeForm].title}</h2>
                <p className="text-gray-700">{FORM_DESCRIPTIONS[activeForm].description}</p>
              </div>
              {/* Form on the right */}
              <div className="w-full md:w-1/2 flex justify-center">
                {activeForm === "enlist-land" && <EnlistLandForm onClose={handleClose} />}
                {activeForm === "plant-tree" && <PlantTreeForm onClose={handleClose} />}
                {activeForm === "volunteer" && <VolunteerForm onClose={handleClose} />}
                {activeForm === "contact" && <ContactForm onClose={handleClose} />}
                {activeForm === "newsletter" && <NewsletterForm onClose={handleClose} />}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default JoinPage; 