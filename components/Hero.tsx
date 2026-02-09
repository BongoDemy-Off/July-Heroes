import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline */}
        <div className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-wide text-red-600 bg-red-50 rounded-full animate-fade-in">
          ২০২৪-এর জুলাই বিপ্লব
        </div>
        
        {/* Main Headline */}
        <h1 className="font-bengali font-extrabold text-5xl md:text-7xl text-gray-900 leading-tight mb-8 animate-slide-up">
          ইতিহাস হোক <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">সত্যের</span>
          <br />
          আসল নায়কদের <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">চিনুন</span>
        </h1>
        
        {/* Sub-text */}
        <p className="max-w-3xl mx-auto text-lg text-gray-600 font-bengali leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          জুলাই বিপ্লবের প্রতিটি মুহূর্ত এবং প্রতিটি নায়কের ভেরিফাইড আর্কাইভ। ভুয়া দাবি বর্জন করুন, সত্য ইতিহাস সংরক্ষণ করুন।
        </p>

      </div>
    </section>
  );
};