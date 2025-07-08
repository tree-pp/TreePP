import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const JoinPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-6xl mb-8">
            {/* Enlist Land Card */}
            <Link href="/join/enlist-land" className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center">
              <span className="text-lg font-semibold mb-4">Enlist Land</span>
            </Link>
            {/* Plant Tree Card */}
            <Link href="/join/plant-tree" className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center">
              <span className="text-lg font-semibold mb-4">Plant Tree</span>
            </Link>
            {/* Join as Volunteer Card */}
            <Link href="/join/volunteer" className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 mb-4 md:mb-0 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center">
              <span className="text-lg font-semibold mb-4">Join as Volunteer</span>
            </Link>
            {/* Like the idea? Card */}
            <Link href="/join/contact" className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center w-64 h-64 transition-colors duration-200 hover:bg-slate-300 cursor-pointer text-center">
              <span className="text-lg font-semibold mb-4 text-center">Like the idea?<br/>Reach us to help</span>
            </Link>
          </div>
          {/* Newsletter Subscription Link */}
          <div className="w-full max-w-md flex justify-center">
            <Link href="/join/newsletter" className="text-base font-medium text-blue-700 hover:underline text-center">
              Want to stay in touch? Subscribe to our monthly newsletter.
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JoinPage; 