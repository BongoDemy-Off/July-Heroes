import React, { useMemo } from 'react';
import { HeroData } from '../types';

interface StatsProps {
  heroes: HeroData[];
}

export const Stats: React.FC<StatsProps> = ({ heroes }) => {
  const stats = useMemo(() => {
    // Calculate stats dynamically based on the heroes data
    const total = heroes.length;
    // Assuming 'pending' is explicit, everything else is treated as verified/approved for this view
    const verified = heroes.filter(h => h.status !== 'pending').length; 
    const pending = heroes.filter(h => h.status === 'pending').length;
    const districts = new Set(heroes.map(h => h.district)).size;

    return {
      total,
      verified,
      pending,
      districts
    };
  }, [heroes]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {/* Card 1: Total Heroes */}
      <StatCard 
        label="মোট নথিভুক্ত বীর" 
        value={stats.total} 
        suffix="+" 
        colorClass="text-gray-900"
      />
      
      {/* Card 2: Verified */}
      <StatCard 
        label="ভেরিফাইড প্রোফাইল" 
        value={stats.verified} 
        suffix="" 
        colorClass="text-green-600"
      />
      
      {/* Card 3: Pending */}
      <StatCard 
        label="যাচাই চলছে (Pending)" 
        value={stats.pending} 
        suffix="" 
        colorClass="text-orange-500"
      />
      
      {/* Card 4: Districts */}
      <StatCard 
        label="আক্রান্ত জেলা" 
        value={stats.districts} 
        suffix="" 
        colorClass="text-red-600"
      />
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  colorClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, suffix, colorClass }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center text-center">
      <div className={`text-3xl sm:text-4xl font-bold font-sans mb-1 ${colorClass}`}>
        {value}{suffix}
      </div>
      <div className="text-sm sm:text-base font-bengali font-medium text-gray-600">
        {label}
      </div>
    </div>
  );
};