import React from 'react';
import { HeroData } from '../types';
import { PLACEHOLDER_IMAGE } from '../constants';

interface GalleryProps {
  heroes: HeroData[];
  loading: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ heroes, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl h-80 animate-pulse border border-gray-100"></div>
        ))}
      </div>
    );
  }

  if (heroes.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 font-bengali">এখনো কোনো তথ্য যুক্ত করা হয়নি।</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {heroes.map((hero, index) => (
        <div 
          key={hero.id || index} 
          className="break-inside-avoid bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
             {/* If we had real images, we'd use them here. For now, a stylish placeholder pattern or the provided link if valid image */}
             {hero.driveLink && (hero.driveLink.match(/\.(jpeg|jpg|gif|png)$/) != null) ? (
                <img 
                  src={hero.driveLink} 
                  alt={hero.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
             ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-300">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="text-xs uppercase tracking-widest opacity-50">Image N/A</span>
                </div>
             )}
             
             <div className="absolute top-3 left-3">
               <span className="px-2 py-1 text-xs font-semibold bg-white/90 backdrop-blur text-gray-800 rounded-md shadow-sm border border-white/20">
                 {hero.district}
               </span>
             </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold font-bengali text-gray-900 mb-2 group-hover:text-brand-red transition-colors">
              {hero.name}
            </h3>
            <p className="text-gray-600 font-bengali text-sm leading-relaxed line-clamp-4">
              {hero.story}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-sans">
              <span>Verified Hero</span>
              <span>{new Date(hero.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};