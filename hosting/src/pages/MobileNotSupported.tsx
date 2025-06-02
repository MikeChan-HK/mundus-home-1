import { useEffect } from "react";

const MobileNotSupported = () => {
  useEffect(() => {
    console.warn("Mobile device detected. Displaying 'Mobile Not Supported' page.");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Mobile Not Supported</h1>
        <p className="text-xl text-gray-600 mb-4">
          We're sorry, but this site is not accessible on mobile devices.
        </p>
        <p className="text-lg text-gray-500">
          Please access this site from a desktop computer.
        </p>
      </div>
    </div>
  );
};

export default MobileNotSupported;
