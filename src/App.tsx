import React, { useState } from 'react';
import FAQSection from './FAQSection'

import Barcode from 'react-barcode';

 const App = () => {
  const [data, setData] = useState("IBK-2026-DEV");

  return (
   
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
      

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-black leading-tight">
              Encode your data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lime-500">
                in seconds.
              </span>
            </h1>
            <input 
              type="text" 
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter code here..."
            />
          </div>

          <div className="flex justify-center">
            {/* Keeping the barcode on a white card for scan-ability */}
            <div className="p-8 bg-white rounded-3xl shadow-2xl dark:shadow-teal-900/20 border border-slate-100">
              <Barcode 
                value={data || "EMPTY"} 
                width={2} 
                height={100} 
                lineColor="#0f172a" 
              />
              <p className="text-center mt-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                Verification Ready
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
        
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          &copy; 2026 IbkCodes. Built with React & Tailwind v4.
        </footer>
      </div>
   
  );
};

export default App