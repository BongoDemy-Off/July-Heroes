import React from 'react';

export const SearchFilter: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-6 sm:p-8">
        
        {/* Main Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 text-lg font-bengali text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-shadow shadow-sm"
            placeholder="নায়কের নাম দিয়ে খুঁজুন..."
          />
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Division Select */}
          <div className="relative group">
             <select className="w-full appearance-none px-4 py-3 font-bengali text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all cursor-pointer group-hover:bg-white">
              <option value="" disabled selected>বিভাগ নির্বাচন করুন</option>
              <option value="dhaka">ঢাকা</option>
              <option value="chattogram">চট্টগ্রাম</option>
              <option value="rajshahi">রাজশাহী</option>
              <option value="khulna">খুলনা</option>
              <option value="barishal">বরিশাল</option>
              <option value="sylhet">সিলেট</option>
              <option value="rangpur">রংপুর</option>
              <option value="mymensingh">ময়মনসিংহ</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* District Select */}
          <div className="relative group">
            <select className="w-full appearance-none px-4 py-3 font-bengali text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all cursor-pointer group-hover:bg-white">
              <option value="" disabled selected>জেলা</option>
              <option value="dhaka">ঢাকা</option>
              <option value="gazipur">গাজীপুর</option>
              <option value="narayanganj">নারায়ণগঞ্জ</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Upazila Select */}
           <div className="relative group">
            <select className="w-full appearance-none px-4 py-3 font-bengali text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all cursor-pointer group-hover:bg-white">
              <option value="" disabled selected>উপজেলা/শহর</option>
              <option value="savar">সাভার</option>
              <option value="dhamrai">ধামরাই</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Status Select */}
          <div className="relative group">
            <select className="w-full appearance-none px-4 py-3 font-bengali text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all cursor-pointer group-hover:bg-white">
              <option value="all">সব</option>
              <option value="verified">ভেরিফাইড</option>
              <option value="pending">যাচাই চলছে</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex justify-end">
          <button className="text-sm font-medium font-bengali text-brand-red hover:text-red-800 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            রিসেট ফিল্টার
          </button>
        </div>

      </div>
    </div>
  );
};