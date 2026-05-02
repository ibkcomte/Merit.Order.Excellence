import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Edit3 } from "lucide-react";
import { Play } from "lucide-react";
const BookLandingPage = () => {
  // Editable state for the book cover
  const [title ] = useState("LASU MBA");
  const [subtitle] = useState("THE EXECUTIVES");
  const [author] = useState("M.O.E 2025");

  // Colors based on your preference
  const colors = {
    armyGreen: "#4b5320",
    deepBrown: "#3d2b1f",
    accentGreen: "#626b3a",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 font-sans text-gray-900">
      {/* --- BACKGROUND PATCHES --- */}
      {/* Top Left Army Green Patch */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: colors.armyGreen }}
      />
      {/* Bottom Right Deep Brown Patch */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-600px h-600px rounded-full opacity-10"
        style={{ backgroundColor: colors.deepBrown }}
      />

      {/* Floating Circles (Geometric Patches from your image) */}
      <div className="absolute top-10 right-[15%] w-32 h-32 border-2 rounded-full border-gray-200" />
      <div
        className="absolute bottom-20 left-[5%] w-48 h-48 border-4 rounded-full opacity-20"
        style={{ borderColor: colors.armyGreen }}
      />

      {/* --- NAVIGATION / LOGO --- */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="flex items-center gap-2">
          <BookOpen size={32} style={{ color: colors.armyGreen }} />
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ color: colors.armyGreen }}
          >
            M.O.E
          </span>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 grid min-h-[80vh] grid-cols-1 items-center px-8 lg:grid-cols-2 lg:px-16">
        {/* Left Column: Text & Controls */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl text-gray-800">
              Welcome to LASU <br />
              <span style={{ color: colors.armyGreen }}>MBA Programme</span>
            </h1>
            <p className="max-w-md text-lg text-gray-600">
              Here, ambition meets opportunity. From your first steps in the
              screening process to fully settling into the programme, we are
              with you every step of the way. We are excited to have you on this
              journey and look forward to all you will achieve. Welcome to
              LASU—your future starts here.
            </p>
          </div>

          {/* EDITABLE CONTROLS */}
          <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm space-y-4 max-w-sm">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
              <Edit3 size={14} /> Merit Order Excellence.
            </div>
            <div className="flex justify-center items-center p-8">
              <motion.a
                href="https://chat.whatsapp.com/CoHYF84yimRHkZoodE92lU?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ translateY: "4px" }} // Moves down when clicked to simulate a press
                className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-2xl font-black text-white tracking-widest transition-all"
                style={{
                  backgroundColor: colors.armyGreen,
                  // This creates the "3D" effect seen in your image
                  boxShadow: `0 6px 0 0 ${colors.deepBrown}`,
                }}
              >
                <span className="text-lg md:text-xl uppercase">
                  Contact Support
                </span>

                {/* The White Triangle Icon from your image */}
                <div className="bg-white p-1 rounded-sm flex items-center justify-center">
                  <Play
                    fill="currentColor"
                    className="w-4 h-4 text-[#8B6508]"
                    style={{ color: colors.armyGreen }}
                  />
                </div>

                {/* Optional: Subtle glow effect to make it "catchy" */}
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Book Mockup */}
        <div className="relative flex items-center justify-center py-20 perspective-1000">
          <motion.div
            whileHover={{ rotateY: -25, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-64 h-96 bg-white shadow-2xl preserve-3d cursor-grab active:cursor-grabbing"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "20px 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            {/* Spine */}
            <div
              className="absolute left-0 top-0 h-full w-10 -ml-10 origin-right bg-gray-200"
              style={{ transform: "rotateY(-90deg)" }}
            />

            {/* Cover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 border-l-4 border-gray-100">
              <div
                className="w-12 h-1 mb-4"
                style={{ backgroundColor: colors.armyGreen }}
              />

              <h2 className="text-3xl font-black text-center leading-none text-gray-700">
                {title}
              </h2>

              <div
                className="my-4 px-3 py-1 text-xs font-bold text-white rounded-full"
                style={{ backgroundColor: colors.accentGreen }}
              >
                WELCOMES
              </div>

              <h3 className="text-4xl font-light tracking-tighter text-center text-gray-800">
                {subtitle}
              </h3>

              <div className="mt-auto pt-4 border-t w-full text-center">
                <p className="text-sm italic text-gray-500 font-serif">
                  {author}
                </p>
              </div>

              <div
                className="w-12 h-1 mt-4"
                style={{ backgroundColor: colors.armyGreen }}
              />
            </div>

            {/* Book Pages Effect (Stacking shadow) */}
            <div className="absolute top-0 right-0 h-full w-2 bg-gray-100 shadow-inner" />
          </motion.div>

          {/* Decorative Corner Shape (The Green Patch from image) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -bottom-10 -right-10 w-64 h-64 -z-10 rounded-tl-[100px]"
            style={{ backgroundColor: colors.armyGreen }}
          />
        </div>
      </main>

      {/* --- FOOTER SECTION --- */}

      {/* Custom Styles for 3D */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default BookLandingPage;
