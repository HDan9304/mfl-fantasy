import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="w-full mb-4">
    <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
    <input 
      {...props}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
    />
  </div>
);
