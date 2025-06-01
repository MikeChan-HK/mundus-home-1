import React from 'react';

interface ContactItemProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon, title, description, href }) => {
  const content = (
    <div className="bg-[rgba(26,26,26,1)] flex min-h-[77px] items-center gap-4 flex-wrap px-40 py-[15px] max-md:px-5 hover:bg-[rgba(36,36,36,1)] transition-colors">
      <div className="bg-[rgba(54,54,54,1)] self-stretch flex min-h-12 items-center justify-center w-12 h-12 my-auto rounded-lg">
        <img
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-6 self-stretch my-auto"
        />
      </div>
      <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
        <div className="overflow-hidden text-base text-white font-medium">
          {title}
        </div>
        <div className="overflow-hidden text-sm text-[rgba(173,173,173,1)] font-normal">
          {description}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};
