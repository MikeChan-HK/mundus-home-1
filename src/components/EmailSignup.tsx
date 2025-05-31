
import React, { useState } from 'react';

interface EmailSignupProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({
  placeholder = "Enter your email",
  buttonText = "Stay Connected",
  onSubmit,
  className = ""
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onSubmit) {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-[480px] ${className}`}>
      <div className="flex w-full items-center h-16 bg-neutral-800 rounded-xl border border-[rgba(77,77,77,1)]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-xl text-[rgba(173,173,173,1)] font-normal leading-6 h-full px-4 placeholder:text-[rgba(173,173,173,1)] focus:outline-none focus:text-white rounded-l-xl max-md:text-lg max-md:px-3"
          required
        />
        <button
          type="submit"
          className="bg-[rgba(134,134,134,1)] flex items-center justify-center h-11 px-6 mx-2 rounded-full text-base text-white font-bold hover:bg-[rgba(154,154,154,1)] transition-colors whitespace-nowrap max-md:px-4 max-md:text-sm"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};
