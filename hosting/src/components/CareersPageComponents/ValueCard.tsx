import React from 'react';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-neutral-800 border grow shrink w-[178px] p-4 rounded-lg border-[rgba(77,77,77,1)] border-solid hover:border-[rgba(100,100,100,1)] transition-colors">
      <div className="flex w-full flex-col">
        <img
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-6 flex-1"
        />
      </div>
      <div className="w-full mt-3">
        <h4 className="min-h-5 w-full text-base text-white font-bold leading-none">
          {title}
        </h4>
        <p className="w-full text-sm text-[rgba(173,173,173,1)] font-normal leading-[21px] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};
