import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 font-bengali text-sm">
          &copy; ২০২৪ জুলাইয়ের নায়করা। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="text-gray-400 text-xs mt-2 font-sans">
          Built with passion for the Revolution.
        </p>
      </div>
    </footer>
  );
};