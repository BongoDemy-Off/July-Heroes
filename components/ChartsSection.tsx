import React, { useEffect, useRef } from 'react';

// Declare Chart.js global since we are using CDN
declare const Chart: any;

export const ChartsSection: React.FC = () => {
  const chartRef1 = useRef<HTMLCanvasElement>(null);
  const chartRef2 = useRef<HTMLCanvasElement>(null);
  const chartRef3 = useRef<HTMLCanvasElement>(null);
  const chartRef4 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Wait for Chart.js to load from CDN
    const initCharts = () => {
      if (typeof Chart === 'undefined') {
        setTimeout(initCharts, 500);
        return;
      }
      
      const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: "'Hind Siliguri', sans-serif" }
            }
          }
        }
      };

      // 1. Casualties by Profession (Pie)
      if (chartRef1.current) {
        new Chart(chartRef1.current, {
          type: 'pie',
          data: {
            labels: ['ছাত্র', 'শ্রমিক', 'পেশাজীবী', 'অন্যান্য'],
            datasets: [{
              data: [65, 20, 10, 5],
              backgroundColor: ['#DC2626', '#1A1A1A', '#4B5563', '#9CA3AF'],
              borderWidth: 0
            }]
          },
          options: commonOptions
        });
      }

      // 2. Age Group Distribution (Bar)
      if (chartRef2.current) {
        new Chart(chartRef2.current, {
          type: 'bar',
          data: {
            labels: ['শিশু (০-১২)', 'কিশোর (১৩-১৮)', 'যুবক (১৯-৩০)', 'মধ্যবয়সী (৩১-৫০)', 'বয়োজ্যেষ্ঠ (৫০+)'],
            datasets: [{
              label: 'নিহত/আহত',
              data: [12, 45, 120, 30, 8],
              backgroundColor: '#DC2626',
              borderRadius: 4
            }]
          },
          options: {
            ...commonOptions,
            scales: {
              y: { beginAtZero: true }
            }
          }
        });
      }

      // 3. Political Affiliation (Doughnut)
      if (chartRef3.current) {
        new Chart(chartRef3.current, {
          type: 'doughnut',
          data: {
            labels: ['সাধারণ শিক্ষার্থী/জনতা', 'রাজনৈতিক কর্মী', 'অজ্ঞাত'],
            datasets: [{
              data: [85, 10, 5],
              backgroundColor: ['#DC2626', '#F87171', '#E5E7EB'],
              borderWidth: 0
            }]
          },
          options: commonOptions
        });
      }

      // 4. Timeline of Incidents (Line)
      if (chartRef4.current) {
        new Chart(chartRef4.current, {
          type: 'line',
          data: {
            labels: ['১৬ জুলাই', '১৮ জুলাই', '১৯ জুলাই', '২০ জুলাই', '৪ আগস্ট', '৫ আগস্ট'],
            datasets: [{
              label: 'ঘটনা প্রবাহ',
              data: [5, 25, 40, 15, 60, 30],
              borderColor: '#DC2626',
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            ...commonOptions,
            scales: {
              y: { beginAtZero: true }
            }
          }
        });
      }
    };

    initCharts();

    // Cleanup not strictly necessary for simple CDN implementation in this context
    // but good practice would be to destroy chart instances if re-rendering.
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-10 text-center">
         <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-brand-red uppercase bg-red-50 rounded-full">
           পরিসংখ্যান
         </span>
         <h2 className="text-3xl font-bold font-bengali text-gray-900 sm:text-4xl">
           বিপ্লবের চিত্র
         </h2>
         <div className="w-20 h-1 mt-4 bg-brand-red rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Chart 1 */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold font-bengali text-gray-900 mb-4 text-center">পেশাভিত্তিক পরিসংখ্যান</h3>
          <div className="h-64 relative w-full">
            <canvas ref={chartRef1}></canvas>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold font-bengali text-gray-900 mb-4 text-center">বয়স ভিত্তিক বিভাজন</h3>
          <div className="h-64 relative w-full">
            <canvas ref={chartRef2}></canvas>
          </div>
        </div>

        {/* Chart 3 */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold font-bengali text-gray-900 mb-4 text-center">রাজনৈতিক পরিচয়</h3>
          <div className="h-64 relative w-full">
            <canvas ref={chartRef3}></canvas>
          </div>
        </div>

        {/* Chart 4 */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold font-bengali text-gray-900 mb-4 text-center">ঘটনা প্রবাহ (জুলাই-আগস্ট)</h3>
          <div className="h-64 relative w-full">
            <canvas ref={chartRef4}></canvas>
          </div>
        </div>

      </div>
    </div>
  );
};