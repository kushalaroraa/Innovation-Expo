import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function RewardSection({ fadeInUp }) {
  return (
    <section className="py-20 px-4">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-2xl border-2 border-orange-200/50 text-center transition-all relative overflow-hidden"
              style={{
                boxShadow: '0 0 40px rgba(249, 115, 22, 0.15), 0 10px 30px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <p className="text-sm font-bold uppercase tracking-widest mb-4 text-orange-600">THE REWARD</p>
                <h2 className="text-4xl md:text-4xl font-black mb-6 leading-tight text-gray-900">
                  TOP PROJECTS WILL BE REWARDED
                </h2>
                <h3 className="text-xl font-bold mb-1 text-gray-900">All Participants Receive:</h3>
                <p className="text-gray-600 text-md leading-relaxed mb-2">
                   Certificate of participation, Direct exposure to industry professionals
                  & Valuable networking with innovators and mentors
                </p>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Winning Teams Receive:</h3>
                 <p className="text-gray-600 text-md leading-relaxed mb-2">
                   Trophies and exciting goodies/prizes, Special recognition for outstanding innovation
                  & Featured exposure within the IEEE WIE community 
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
  );
}