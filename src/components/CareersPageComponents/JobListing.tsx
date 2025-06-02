import React, { useState } from 'react';

interface JobListingProps {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const JobListing: React.FC<JobListingProps> = ({ title, department, location, type }) => {
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = () => {
    setIsApplying(true);
    // Simulate application process
    setTimeout(() => {
      alert(`Application submition is under maintenance. Please come back later!`);
      setIsApplying(false);
    }, 1000);
  };

  return (
    <article className="bg-[rgba(26,26,26,1)] flex min-h-[72px] w-full items-center gap-[40px_100px] justify-between flex-wrap px-4 py-3.5 max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 my-auto max-md:max-w-full">
        <h3 className="max-w-full overflow-hidden text-base text-white font-medium">
          {title}
        </h3>
        <p className="max-w-full overflow-hidden text-sm text-[rgba(173,173,173,1)] font-normal max-md:max-w-full">
          {department} · {location} · {type}
        </p>
      </div>
      <div className="self-stretch text-sm text-white font-medium whitespace-nowrap text-center w-[84px] my-auto">
        <button
          onClick={handleApply}
          disabled={isApplying}
          className="bg-[rgba(54,54,54,1)] flex min-w-[84px] min-h-8 w-[84px] items-center overflow-hidden justify-center px-4 rounded-2xl hover:bg-[rgba(64,64,64,1)] transition-colors disabled:opacity-50"
        >
          <span className="self-stretch w-[39px] overflow-hidden my-auto">
            {isApplying ? '...' : 'Apply'}
          </span>
        </button>
      </div>
    </article>
  );
};