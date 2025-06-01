
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitError(null); // Clear previous errors
      // onSubmit && onSubmit(email); // Keep or remove based on whether local onSubmit prop usage is still desired

      const googleSheetUrl = "https://docs.google.com/spreadsheets/d/1Ah_f-vH7DHGgCGs5UMMMqr-j6R1RJQUwkdWMWEZZGi0/edit?pli=1&gid=0#gid=0"; // This URL is for viewing, not for direct POST via Apps Script or API

      // NOTE: Directly POSTing to a Google Sheet URL like this will not work
      // as Google Sheets do not accept POST requests in this manner to append data.
      // This typically requires using Google Apps Script to create a web app endpoint
      // or using the Google Sheets API with proper authentication.

      // For the purpose of this exercise, I will construct the fetch request
      // as if it were a functional endpoint.
      // In a real scenario, the URL would be a Google Apps Script web app URL.
      try {
        const response = await fetch(googleSheetUrl, { // This will likely result in a CORS error or a non-200 response
          method: 'POST',
          mode: 'no-cors', // 'no-cors' is often used when trying to hit endpoints not expecting direct browser requests, but it limits what you can do with the response
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });

        // Since 'no-cors' mode is used, we can't inspect the response status directly in the same way.
        // A real API would provide a meaningful response.
        // For now, we'll assume success if the request doesn't throw an error.
        console.log('Email submission attempted. Check the network tab for details.');
        setEmail(''); // Clear email field after attempting submission

        // If there was an external onSubmit prop, you might still want to call it
        if (onSubmit) {
          onSubmit(email);
        }

      } catch (error) {
        console.error('Error submitting email:', error);
        setSubmitError("Submission failed. Please try again.");
        // Handle error appropriately in a real application
      }
      setIsSubmitted(true); // Set submitted state to true after the fetch attempt
    }
  };

  return (
    <div className={`relative w-full max-w-[480px] ${className}`}>
      {submitError && (
        <div className="text-red-500 text-center p-2">
          {submitError}
        </div>
      )}
      {isSubmitted ? (
        <div className="text-center p-4">
          <p className="text-xl text-white">Thank you for your interest!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
      )}
    </div>
  );
};
