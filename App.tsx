import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilter } from './components/SearchFilter';
import { Stats } from './components/Stats';
import { ChartsSection } from './components/ChartsSection';
import { Gallery } from './components/Gallery';
import { SubmissionForm } from './components/SubmissionForm';
import { Footer } from './components/Footer';
import { HeroData } from './types';
import { fetchHeroes } from './services/api';

const App: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  // Initial Data Load (Simulated or Real if backend is connected)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchHeroes();
        if (data && data.length > 0) {
          setHeroes(data);
        } else {
          // Fallback mock data if API is not yet configured by user
          setHeroes([
            { id: '1', name: 'মীর মুগ্ধ', district: 'ঢাকা', story: 'আন্দোলনের সময় পানি বিতরণ করছিলেন...', driveLink: '', createdAt: new Date().toISOString() },
            { id: '2', name: 'আবু সাঈদ', district: 'রংপুর', story: 'পুলিশের সামনে বুক পেতে দাঁড়িয়েছিলেন...', driveLink: '', createdAt: new Date().toISOString() },
            { id: '3', name: 'ফারহান ফায়াজ', district: 'ঢাকা', story: 'রেসিডেন্সিয়াল মডেল কলেজের ছাত্র...', driveLink: '', createdAt: new Date().toISOString() }
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch heroes", error);
        // Keep mock data or empty state
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [refreshTrigger]);

  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-50 selection:bg-brand-red selection:text-white pb-20">
      <Header />
      
      <main className="space-y-16 sm:space-y-24">
        <Hero />
        <SearchFilter />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Stats heroes={heroes} />
          
          <div id="gallery" className="scroll-mt-24">
            <div className="flex flex-col items-center mb-10 text-center">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-brand-red uppercase bg-red-50 rounded-full">
                স্মৃতির মিনার
              </span>
              <h2 className="text-3xl font-bold font-bengali text-gray-900 sm:text-4xl">
                বীরদের গ্যালারি
              </h2>
              <div className="w-20 h-1 mt-4 bg-brand-red rounded-full"></div>
            </div>
            <Gallery heroes={heroes} loading={loading} />
          </div>

          <div id="charts" className="scroll-mt-24">
            <ChartsSection />
          </div>

          <div id="submit-section" className="scroll-mt-24 max-w-3xl mx-auto">
            <div className="relative p-6 sm:p-10 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold font-bengali mb-3 text-gray-900">
                    তথ্য জমা দিন
                  </h2>
                  <p className="text-gray-600 font-bengali">
                    আপনার পরিচিত কোনো বীরের গল্প বা ছবি আমাদের কাছে পাঠান। আমরা তা যাচাই করে আর্কাইভে যুক্ত করব।
                  </p>
                </div>
                <SubmissionForm onSuccess={handleRefresh} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;