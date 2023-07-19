import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4">
      <div className="mx-auto text-center text-white">
        <p>All Rights Reserved. &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
