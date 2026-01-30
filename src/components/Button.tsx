import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <button 
    {...props}
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
  >
    {loading ? 'Processing...' : children}
  </button>
);
