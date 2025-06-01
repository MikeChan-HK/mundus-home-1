import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { JobListing } from '../../components/CareersPageComponents/JobListing';
import { ValueCard } from '../../components/CareersPageComponents/ValueCard';
import { ContactItem } from '../../components/CareersPageComponents/ContactItem';
import { Footer } from '../../components/Footer';

const Index: React.FC = () => {
  const [showReserveForm, setShowReserveForm] = useState(false);

  const handleReserveAccess = () => {
    setShowReserveForm(true);
    setTimeout(() => {
      alert('Thank you for your interest! We\'ll be in touch soon.');
      setShowReserveForm(false);
    }, 1000);
  };

  const jobListings = [
    {
      title: "Chief Software Engineer, Full-Stack",
      department: "Engineering",
      location: "Remote",
      type: "Unpaid (Project Participant → Partner)"
    },
    {
      title: "Chief Research Scientist, AI Infrastructure",
      department: "Research",
      location: "Remote",
      type: "Unpaid (Project Participant → Partner)"
    },
    {
      title: "Chief Product Manager, AELM-Playground",
      department: "Product",
      location: "Remote",
      type: "Unpaid (Project Participant → Partner)"
    },
    {
      title: "Chief Operations Lead",
      department: "Operations",
      location: "Remote",
      type: "Unpaid (Project Participant → Partner)"
    }
  ];

  const values = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/bf803dd0ad4fba710367d1aadf65f0b06c5ebb19?placeholderIfAbsent=true",
      title: "Impactful work",
      description: "Work on cutting-edge AI technology that's shaping the future."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/c1c778e30946d5d04a799e027c0e4d7186dee08e?placeholderIfAbsent=true",
      title: "Collaborative culture",
      description: "Join a team of passionate experts who support and inspire each other."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/76c8fb3fe60f2e2fbfbd3f10d5c2236dedd70e1b?placeholderIfAbsent=true",
      title: "Growth opportunities",
      description: "Advance your career with continuous learning and development programs."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/2b0ab0b91e6b526da3e6ecb6bcf8d0ec6a1349eb?placeholderIfAbsent=true",
      title: "Innovation focus",
      description: "Be part of a company that's always pushing the boundaries of what's possible."
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-[rgba(26,26,26,1)] min-h-[800px] w-full overflow-hidden max-md:max-w-full">
        <Header />
        <div className="w-full max-md:max-w-full">
          
          <main className="flex w-full justify-center mt-[49px] pt-5 pb-[69px] px-40 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
              {/* Hero Section */}
              <section className="flex min-h-[130px] w-full gap-[12px_0px] justify-between flex-wrap pt-4 pb-[31px] px-4 max-md:max-w-full">
                <div className="min-w-72 w-[862px]">
                  <h1 className="w-full text-[64px] text-white font-bold whitespace-nowrap leading-none py-[5px] max-md:max-w-full max-md:text-[40px]">
                    Careers
                  </h1>
                  <p className="text-[rgba(173,173,173,1)] text-sm font-normal leading-[21px] mt-3 max-md:max-w-full">
                    Join us in building the future of AI.
                    <br />
                    We're looking for talented individuals to help us shape the next generation of AI technology.
                  </p>
                </div>
              </section>

              {/* Job Listings Section */}
              <section>
                <h2 className="min-h-[78px] w-full text-[22px] text-white font-bold leading-none pt-[50px] px-4 max-md:max-w-full">
                  Open positions
                </h2>
                {jobListings.map((job, index) => (
                  <JobListing
                    key={index}
                    title={job.title}
                    department={job.department}
                    location={job.location}
                    type={job.type}
                  />
                ))}
              </section>

              {/* Why Mundus Section */}
              <section>
                <h2 className="min-h-[82px] w-full text-[22px] text-white font-bold leading-none pt-[50px] pb-1 px-4 max-md:max-w-full">
                  Why Mundus?
                </h2>
                <p className="w-full text-base text-white font-normal leading-6 pt-1 pb-3 px-4 max-md:max-w-full">
                  At Mundus, we're not just building AI; we're building a community of innovators. We offer competitive salaries, comprehensive benefits, and a culture that values collaboration, creativity, and continuous learning. Join us and be part of a team that's making a real impact on the world.
                </p>
              </section>

              {/* Values Section */}
              <section className="w-full px-4 py-10 max-md:max-w-full">
                <div className="flex w-full flex-col text-white max-md:max-w-full">
                  <h2 className="min-h-[45px] w-[720px] max-w-full text-4xl font-bold tracking-[-1px] leading-none max-md:max-w-full">
                    Our values
                  </h2>
                  <p className="w-[720px] max-w-full text-base font-normal leading-6 mt-4 max-md:max-w-full">
                    We believe in fostering an environment where every team member can thrive and contribute to our shared success.
                  </p>
                </div>
                <div className="w-full mt-10 max-md:max-w-full">
                  <div className="flex w-full items-stretch gap-3 flex-1 flex-wrap h-full max-md:max-w-full">
                    {values.map((value, index) => (
                      <ValueCard
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Contact Section */}
          <section className="w-full max-w-[1279px] mt-[49px] max-md:max-w-full max-md:mt-10">
            <h2 className="z-10 min-h-[60px] text-[22px] text-white font-bold leading-none pl-40 pr-4 pt-5 pb-3 max-md:max-w-full max-md:pl-5">
              Other ways to get in touch
            </h2>
            <ContactItem
              icon="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/a2a69e26e8572e14586fb59e5dc6fa2bbbb7dcbf?placeholderIfAbsent=true"
              title="Email"
              description="contact@mundus.ai"
              href="mailto:contact@mundus.ai"
            />
            <div className="z-10 -mt-1">
              <ContactItem
                icon="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/71339b6cefc6ee3d8e3f360fd02e1fa649db5806?placeholderIfAbsent=true"
                title="X"
                description="Follow us on X"
                href="https://x.com/mundusai"
              />
            </div>
            <div className="z-10 -mt-1.5">
              <ContactItem
                icon="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/23db9353305f9634f3d623df5811a9e8547cc032?placeholderIfAbsent=true"
                title="Discord"
                description="Join our community on Discord"
                href="https://discord.gg/mundusai"
              />
            </div>
          </section>

        </div>
        <div className="flex w-full justify-center px-40 max-md:max-w-full max-md:px-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
