import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

// Theme consistency colors
const colors = {
  armyGreen: "#4b5320",
  deepBrown: "#3d2b1f",
  accentGold: "#8B6508",
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <div
            className="p-2 rounded-lg transition-colors group-hover:bg-opacity-20"
            style={{
              backgroundColor: `${colors.armyGreen}10`,
              color: colors.armyGreen,
            }}
          >
            <HelpCircle size={20} />
          </div>
          <span className="font-bold text-gray-800 md:text-lg tracking-tight transition-colors group-hover:text-[#4b5320]">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-14 pr-4 text-gray-600 leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the requirements to apply?",
      answer:
        "•	Hold a first degree (BSc or equivalent) from a recognised institution, •	Have an NYSC discharge certificate or exemption letter, •	Successfully pass the interview stage",
    },
    {
      question: "How do I access the MBA Toolkit resources?",
      answer:
        "Once you have completed your portal activation at the ICT center, you can log in using your matriculation number to access all digital handbooks and study materials.",
    },
    {
      question: "Where can I find the official LASU clearance form?",
      answer:
        "Clearance forms are available under the 'Downloads' section of the LACACA portal. Ensure you have your payment receipt ready before starting the upload process.",
    },
    {
      question: "PEOPLE TO KNOW",
      answer:
        "Coordinator of MBA Program, Dean of Post Graduate School, Program Secretary, LASUMBA Executives, GBENUSI Community",
    },
    {
      question: "How do I join the professional networking group?",
      answer:
        "You can join our community by clicking the WhatsApp icon in the footer. This group is specifically for MBA candidates to share resources and career opportunities.",
    },
    {
      question: "What if I just joined or haven't completed registration?",
      answer:
        "You may still be able to proceed. Contact the admin privately via DM for guidance on next steps.",
    },

    {
      question: "What is the cost and how is payment structured?",
      answer: "Total programme fee: ₦446,250\nFirst ₦297,500 at least 70% is required upfront\nSecond ₦148,750 remaining 30%, Compulsory Fees Acceptance Fee #50,000 Medical Fee: #50,000 LACACA: #30,000 Others: Development Levy: #52,000 ICT Charge: #41,600 Multipurpose Smart Crad: #26,000",
    },
    {
      question: "What are the available specialisations?",
      answer:
        "There are eight specialisations to choose from - Finance, Marketing, Human Resource Management, Operations Management, Entrepreneurship, Information Technology Management, International Business, and Project Management.",
    },
    {
      question: "When are lectures and what is the schedule?",
      answer:
        "Lectures are held on weekendsto accommodate working professionals Saturdays 9:00 AM – 6:00 PM, Sundays 12:00 PM – 4:00 PM ",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white py-24 px-6 overflow-hidden">
      {/* --- ANIMATED BACKGROUND FLOATERS --- */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ backgroundColor: colors.armyGreen }}
      />
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: colors.accentGold }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white"
            style={{ backgroundColor: colors.armyGreen }}
          >
            <MessageSquare size={14} />
            Support Center
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">
            Frequently Asked{" "}
            <span style={{ color: colors.accentGold }}>Questions</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Everything you need to know about the LASU MBA journey and our
            homegrown digital solutions.
          </p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-gray-50 shadow-2xl"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Call to Action Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">
            Still have questions?
          </p>
          <a
            href="https://chat.whatsapp.com/CoHYF84yimRHkZoodE92lU?mode=gi_t" // Optimized link format
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-black transition-all hover:shadow-2xl active:scale-95"
            style={{ backgroundColor: "#4b5320"}}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
