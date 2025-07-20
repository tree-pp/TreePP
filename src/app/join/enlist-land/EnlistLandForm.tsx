import React from 'react';

const EnlistLandForm = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-md">
      <span className="text-lg font-semibold mb-4">Enlist Land</span>
      <form className="flex flex-col w-full gap-2">
        <input
          type="text"
          placeholder="Owner's Name"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="ownerName"
        />
        <input
          type="tel"
          placeholder="Contact No."
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="contactNo"
        />
        <input
          type="text"
          placeholder="Location"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="location"
        />
        <select
          name="landType"
          className="rounded px-2 py-1 text-black border border-gray-300"
          defaultValue=""
        >
          <option value="" disabled>
            Select Land Type
          </option>
          <option value="household">Household</option>
          <option value="empty land">Empty Land</option>
          <option value="roadside">Roadside</option>
        </select>
        <textarea
          placeholder="Notes for plantation"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="notes"
          rows={2}
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

export default EnlistLandForm; 