import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, LucideSaudiRiyal } from "lucide-react";
import { useTheme } from "./useTheme";
import lasuMBA from "./assets/lasuMBA.jpg";
import moeLogo from "./assets/moeLogo.png";
// Define types for our Navigation links
interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "HOME", href: "#" },
  { name: "MISSION", href: "#" },
  { name: "COMMUNITY", href: "#" },
  { name: "STEPS", href: "#" },
  { name: "PEOPLE", href: "#" },
  { name: "NETWORK", href: "#" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(true);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
        style={{ backgroundImage: `url(${lasuMBA})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Navigation Header */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Matches Morad Cares */}
          <div className="flex-shrink-0 cursor-pointer flex items-center">
            {/* 2. Use the imported variable in the src attribute */}
            <img className="h-8 w-auto" src={moeLogo} alt="Brand Logo" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((NavLink) => (
            <a
              key={NavLink.name}
              href={NavLink.href}
              className="text-sm font-bold text-white/90 hover:text-[#B8860B] transition-colors tracking-widest"
            >
              {NavLink.name}
            </a>
          ))}
        </div>
        {/* Desktop Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {/* Mobile Menu Toggle */}
        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-indigo-600 focus:outline-none transition-all duration-200"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 pb-20">
        {/* Welcome Message Background Text */}
        <div className="absolute top-1/3 text-center pointer-events-none opacity-40 select-none">
          <h1 className="text-5xl md:text-8xl font-black text-white/20 leading-none">
            LASU MBA TOOLKIT
          </h1>
        </div>

        {/* The Information Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10 space-y-6">
                <header className="space-y-4">
                  <h2 className="text-lg font-bold text-slate-800">
                    Dear Future Leaders,
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Welcome to the Lagos State University MBA program!
                  </p>
                </header>

                <div className="text-sm text-slate-500 leading-relaxed space-y-4">
                  <p>Welcome to LASU MBA!</p>
                  <p>
                    We are here to support you academically and socially,
                    ensuring a smooth and successful start to your journey. From
                    screening to settling in, you can count on us every step of
                    the way. We wish you a rewarding experience at LASU.
                  </p>
                  <p className="pt-2 italic">
                    Warm regards,
                    <br />
                    <span className="font-bold text-slate-700">MOE</span>
                  </p>
                </div>

                <footer className="flex justify-end pt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-[#3B82F6] hover:bg-blue-600 text-white px-8 py-2 rounded-md font-semibold transition-all shadow-lg active:scale-95"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
          <button className="flex-1 bg-[#8B6508] hover:bg-[#A07810] text-white py-4 px-8 rounded-lg font-black tracking-tight transition-all shadow-xl uppercase">
            Important Steps
          </button>
          <button className="flex-1 border-2 border-[#8B6508] text-white hover:bg-white/10 py-4 px-8 rounded-lg font-black tracking-tight transition-all backdrop-blur-sm uppercase">
            People To Know
          </button>
        </div>
      </main>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-slate-900 flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>
            {navLinks.map((NavLink) => (
              <a
                key={NavLink.name}
                href={NavLink.href}
                className="text-2xl font-black text-white hover:text-[#B8860B]"
                onClick={() => setIsOpen(false)}
              >
                {NavLink.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
