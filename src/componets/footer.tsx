import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-24 bg-purple-100">
        {/* Copyrights note */}
        <div className="text-sm text-gray-600 mr-4">
          Made by{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-400">
            Isa
          </span>{' '}
          with help of Gideon
        </div>
      </div>
    </footer>
  );
}

export default Footer;
