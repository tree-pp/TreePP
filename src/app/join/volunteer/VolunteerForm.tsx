'use client';
import React from 'react';

const VolunteerForm = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-md">
      <span className="text-lg font-semibold mb-4">Join as Volunteer</span>
      <form className="flex flex-col w-full gap-2">
        <input
          type="text"
          placeholder="Name"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="name"
        />
        <input
          type="text"
          placeholder="Location"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="location"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="email"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="phone"
        />
        <button
          type="submit"
          className="mt-2 bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 font-semibold"
        >
          Submit
        </button>
        {onClose && (
          <button type="button" className="mt-2 text-sm text-gray-600 underline" onClick={onClose}>Close</button>
        )}
      </form>
    </div>
  );
};

export default VolunteerForm; 