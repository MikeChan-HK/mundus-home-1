
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
    <form onSubmit={handleSubmit} className={`relative w-full max-w-[480px] min-h-16 ${className}`}>
      <div className="flex w-full items-stretch flex-1 h-full rounded-xl">
        <div className="bg-neutral-800 flex min-h-16 rounded-[12px_0px_0px_12px] border-[rgba(77,77,77,1)] border-t border-b border-l" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="self-stretch bg-neutral-800 overflow-hidden text-xl text-[rgba(173,173,173,1)] font-normal leading-6 h-full flex-1 p-2 border-[rgba(77,77,77,1)] border-t border-b placeholder:text-[rgba(173,173,173,1)] focus:outline-none focus:text-white max-md:text-lg max-md:px-3"
          required
        />
        <div className="bg-neutral-800 flex items-center text-base text-white font-bold text-center justify-center h-full pr-[7px] rounded-[0px_12px_12px_0px] border-[rgba(77,77,77,1)] border-t border-r border-b">
          <button
            type="submit"
            className="bg-[rgba(134,134,134,1)] self-stretch flex min-w-[84px] min-h-11 items-center overflow-hidden justify-center my-auto px-5 rounded-3xl hover:bg-[rgba(154,154,154,1)] transition-colors max-md:px-3 max-md:text-sm"
          >
            <span className="overflow-hidden my-auto whitespace-nowrap">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
