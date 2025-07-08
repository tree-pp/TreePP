import React from 'react';

const NewsletterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black items-center justify-center py-8">
      <div className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-md">
        <span className="text-base font-medium mb-2">Newsletter</span>
        <form className="flex w-full gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="rounded px-2 py-1 text-black border border-gray-300 flex-1"
            name="newsletterEmail"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPage; 