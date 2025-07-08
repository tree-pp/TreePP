import React from 'react';

const EnlistLandPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black items-center justify-center py-8">
      <div className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-md">
        <span className="text-lg font-semibold mb-4">Enlist Land</span>
        <form className="flex flex-col w-full gap-2">
          <input
            type="text"
            placeholder="Short Description"
            className="rounded px-2 py-1 text-black border border-gray-300"
            name="description"
          />
          <input
            type="text"
            placeholder="Location"
            className="rounded px-2 py-1 text-black border border-gray-300"
            name="location"
          />
          <textarea
            placeholder="Other relevant info"
            className="rounded px-2 py-1 text-black border border-gray-300"
            name="otherInfo"
            rows={2}
          />
          <button
            type="submit"
            className="mt-2 bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnlistLandPage; 