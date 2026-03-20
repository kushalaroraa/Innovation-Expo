import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FORMS_LINK = "https://forms.office.com/r/Q4dmT4XJs3";

const timelineEvents = [
  {
    date: "21 March, 2026",
    title: "Registrations Open",
    description: "It all begins here! Form your team, bring your ideas together, and register to be part of the Innovation Expo journey.",
    link: "Register Now"
  },
  {
    date: "27 March, 2026",
    title: "Registrations Close",
    description: "Last chance to join! Make sure your team and idea are submitted before the deadline.",
    link: "Submit Team"
  },
  {
    date: "28 March, 2026",
    title: "Shortlisting & Confirmation",
    description: "Selected teams will be announced based on innovation, creativity, and feasibility. Get ready for the final stage!",
    link: "See form"
  },
  {
    date: "29 March, 2026",
    title: "Final Event Day",
    description: "Showcase your project, present your working model, and deliver your TEDx-style pitch in front of experts.",
    link: "Submit Idea"
  }
];

export default function TimelineSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-14 px-4 bg-white">
      <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-10 sm:mb-12 text-gray-900">
          EVENT TIMELINE
        </h2>

        {/* MOBILE */}
        <div className="block md:hidden relative pl-7 border-l-2 border-orange-400 space-y-6">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[34px] top-4 w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-2 border-white shadow-md z-10" />

              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {event.date}
                </div>

                <h3 className="text-sm font-bold mb-1 text-gray-900">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {event.description}
                </p>

                <a
                  href={FORMS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold text-sm inline-flex items-center gap-1"
                >
                  {event.link} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300"></div>

          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                  <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
                      {event.date}
                    </div>

                    <h3 className="text-base font-bold mb-1 text-gray-900">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                      {event.description}
                    </p>

                    <a
                      href={FORMS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 font-semibold inline-flex items-center gap-1 text-sm"
                    >
                      {event.link} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}