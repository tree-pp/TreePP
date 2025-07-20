'use client';
import React, { useState } from 'react';

const PlantTreeForm = ({ onClose }: { onClose?: () => void }) => {
  const [numTrees, setNumTrees] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNumTreesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumTrees(value);
    if (value && !isNaN(Number(value))) {
      setAmount((Number(value) * 5).toString());
    } else {
      setAmount('');
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    if (value) {
      setNumTrees('');
    }
  };

  return (
    <div className="bg-slate-200 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-md">
      <span className="text-lg font-semibold mb-4">Plant Tree</span>
      <form className="flex flex-col w-full gap-2">
        <input
          type="text"
          placeholder="Name"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          placeholder="Number of Trees (optional)"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="numTrees"
          value={numTrees}
          onChange={handleNumTreesChange}
        />
        <input
          type="number"
          min="1"
          placeholder="Amount"
          className="rounded px-2 py-1 text-black border border-gray-300"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <div className="text-xs text-gray-500">$5 per tree</div>
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

export default PlantTreeForm; 