import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import unkleKay from "./assets/unkleKay.jpg";
import lasuLogo from "./assets/lasuLogo.JPG";
import mbaLogo from "./assets/mbaLogo.JPG";
import image from "./assets/image.png";

// Define the colors used in previous pages for brand consistency
const colors = {
  armyGreen: "#4b5320",
  deepBrown: "#3d2b1f",
  accentGold: "#8B6508", // From your MBA Toolkit page
};


interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center"
  >
    <div className="w-16 h-16 mb-4 flex items-center justify-center">
      <img
        src={icon}
        alt={title}
        className="max-w-full max-h-full object-contain"
      />
    </div>
    <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight mb-1">
      {title}
    </h3>
    <p className="text-xs text-gray-500">{description}</p>
  </motion.div>
);

const Discovery: React.FC = () => {
  const solutions = [
    {
      title: "Payment of Important Fees",
      description:
        "visit the school portal to pay the required fees like Acceptance Fee, Medical Fee, LACACA Fee and Library Fee.",
      icon: lasuLogo,
    },
    {
      title: "School fee payment",
      description: "The school fee payment can be made in two (2) installments of 70% and 30%.",
      icon: image,
    },
    {
      title: "Activate Portal",
      description: "click on the Whatsapp Link and we will run you through the process",
      icon: mbaLogo,
    },
    {
      title: "Familiarize yourself ",
      description: "Class Venues, Facility Office, Library etc",
      icon: lasuLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-6 lg:px-20 font-sans">
      {/* Header Section */}
      <header className="mb-12">
        <h4
          className="text-sm font-bold uppercase tracking-widest mb-2"
          style={{ color: colors.accentGold }}
        >
          Important First Step
        </h4>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 uppercase">
          YOU NEED
        </h2>
        <div
          className="w-16 h-1 mt-2"
          style={{ backgroundColor: colors.accentGold }}
        />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Solutions Grid (Highly Responsive) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 order-2 lg:order-1">
          {solutions.map((item, idx) => (
            <SolutionCard key={idx} {...item} />
          ))}
        </div>

        {/* Right Column: Vice Chancellor Welcome Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 relative rounded-[40px] overflow-hidden shadow-2xl order-1 lg:order-2 group"
          style={{ backgroundColor: colors.deepBrown }}
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/passport-0-rceq3P.jpg" // Using your existing asset
              alt="VC"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center lg:items-start">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Welcome & Greetings!
              </h3>

              <div className="relative">
                <Quote
                  className="absolute -top-4 -left-6 opacity-20 text-white"
                  size={48}
                />
                <p className="text-sm md:text-base text-gray-200 leading-relaxed italic">
                  Team M.O.E (ably led by Kayode Joseph), will provide
                  comprehensive academic support including: • Course outlines,
                  timetable, and learning materials • Tutorial schedule and past
                  questions with answers • Access to experienced facilitators
                  and exam guides • One-on-one guidance, no one is left behind
                  Beyond academics, there are networking events and social
                  activities to complement your MBA experience.
                </p>
              </div>

              <div>
                <p className="font-bold text-white text-lg">
                  Your promised Partner in this Journey
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
                  Kayode Joseph
                </p>
              </div>
            </div>

            {/* Inset kay Portrait Image */}
            <div className="w-48 h-64 md:w-64 md:h-80 shrink-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-lg">
              <img
                src={unkleKay}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Link for the Group Join */}
      <div className="mt-12 flex justify-center lg:justify-start">
        <a
          href="https://chat.whatsapp.com/CoHYF84yimRHkZoodE92lU?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-bold transition-all hover:gap-4"
          style={{ color: colors.armyGreen }}
        >
          Important First Step
          <span className="text-2xl">→</span>
        </a>
      </div>
    </div>
  );
};

export default Discovery;
