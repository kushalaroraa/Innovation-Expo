import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function GuidelinesSection({ fadeInUp }) {
  return (
    <section id="guidelines" className="py-20 px-4">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            {/* Outer sleek gray container — like the reference */}
            <div
              className="rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12"
              style={{
                background: 'rgba(245, 245, 247, 0.82)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 2px 40px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(220,220,225,0.7)',
              }}
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-xs">
                  Guidelines
                </h2>
                <div className="md:text-right max-w-xs">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Review the rules and requirements before submitting your project to Innovation Expo 2026.
                  </p>
                </div>
              </div>

              {/* 2×2 Cards Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    num: "01",
                    title: "Eligibility",
                    description: "Open to all students and innovators passionate about technology. Teams of 2–4 members (maximum 4 participants per team) are strongly encouraged.",
                    highlight: true,
                  },
                  {
                    num: "02",
                    title: "Rules",
                    description: "All projects must be original work. Plagiarism will result in disqualification. Uphold IEEE code of ethics throughout.",
                    highlight: false,
                  },
                  {
                    num: "03",
                    title: "Submission",
                    description: "Submit your project proposal before the deadline with your project title, description, and full team details.",
                    highlight: false,
                  },
                  {
                    num: "04",
                    title: "Evaluation",
                    description: "Projects are judged on innovation, feasibility, impact, and presentation quality by our panel of industry experts. Shortlisted teams must bring a working model or prototype to present on the event day",
                    highlight: false,
                  },
                ].map((g, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    className={`relative rounded-2xl p-7 flex flex-col justify-between min-h-[200px] transition-all duration-300 group ${
                      g.highlight
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl'
                        : 'bg-white shadow-sm hover:shadow-md border border-gray-100'
                    }`}
                  >
                    {/* Arrow button top-right */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`text-4xl font-black tracking-tight ${
                          g.highlight ? 'text-white/90' : 'text-gray-800'
                        }`}
                      >
                        {g.num}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                          g.highlight
                            ? 'bg-white/20 text-white'
                            : 'bg-orange-500 text-white'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 -rotate-45" />
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          g.highlight ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {g.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          g.highlight ? 'text-white/80' : 'text-gray-500'
                        }`}
                      >
                        {g.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
  );

}