import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const developers = [
  {
    name: "Divay Marwaha",
    image: "src/assets/divayy.jpeg",
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/divaymarwaha",
  },
  {
    name: "Nehal Mishra",
    image: "src/assets/nehal.jpeg",
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/nehal-mishra-044602322/",
  },
  {
    name: "Paras Jain",
    image: "src/assets/paras.jpeg",
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/paras-jain02",
  },
  {
    name: "Akansha Yadav",
    image: "src/assets/akansha.jpeg",
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/ak8nksha/",
  },
];

const leadDeveloper = {
  name: "Kushal Arora",
  role: "Lead Developer",
  image: "src/assets/kushal.png",
  icon: <FaLinkedin className="w-6 h-6" />,
  link: "https://www.linkedin.com/in/kushal-arora-666869300/",
};

export default function DevelopersSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-gray-900">
          MEET THE DEVELOPERS
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14">

          {/* LEFT */}
          {[developers[0], developers[1]].map((dev, i) => (
            <motion.a
              key={`left-${i}`}
              href={dev.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.07 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="relative w-32 h-32 rounded-full overflow-hidden border border-white/60 transition-all duration-300"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.30)",
                  boxShadow:
                    "0 0 14px rgba(249,115,22,0.10), 0 4px 18px rgba(0,0,0,0.07)",
                }}
              >
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-full bg-white/8 group-hover:bg-white/5 transition-all duration-300" />

                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1.5px rgba(249,115,22,0.35)",
                  }}
                />
              </div>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{dev.name}</p>
                <p className="text-orange-500 text-xs font-medium flex items-center justify-center gap-1 mt-0.5">
                  {dev.icon}
                </p>
              </div>
            </motion.a>
          ))}

          {/* CENTER */}
          <motion.a
            href={leadDeveloper.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div
              className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/70 transition-all duration-300"
              style={{
                backdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.40)",
                boxShadow:
                  "0 0 22px rgba(249,115,22,0.14), 0 8px 28px rgba(0,0,0,0.09)",
              }}
            >
              <img
                src={leadDeveloper.image}
                alt={leadDeveloper.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-full bg-white/8 group-hover:bg-white/5 transition-all duration-300" />

              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold mb-1.5">
                ★ Lead Developer
              </div>
              <p className="font-bold text-gray-900 text-md">
                {leadDeveloper.name}
              </p>
              <div className="text-orange-500 text-sm font-medium flex items-center justify-center gap-1 mt-0.5">{leadDeveloper.icon}</div>
            </div>
          </motion.a>

          {/* RIGHT */}
          {[developers[2], developers[3]].map((dev, i) => (
            <motion.a
              key={`right-${i}`}
              href={dev.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.07 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="relative w-32 h-32 rounded-full overflow-hidden border border-white/60 transition-all duration-300"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.30)",
                  boxShadow:
                    "0 0 14px rgba(249,115,22,0.10), 0 4px 18px rgba(0,0,0,0.07)",
                }}
              >
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-full bg-white/8 group-hover:bg-white/5 transition-all duration-300" />

                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>

              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">{dev.name}</p>
                <p className="text-orange-500 text-xs font-medium flex items-center justify-center gap-1 mt-0.5">
                  {dev.icon}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden flex-wrap justify-center gap-8">

          {/* LEAD */}
          <motion.a
            href={leadDeveloper.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div
              className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/70"
              style={{
                backdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.40)",
                boxShadow:
                  "0 0 22px rgba(249,115,22,0.14), 0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={leadDeveloper.image}
                alt={leadDeveloper.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-white/8" />
            </div>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold mb-1">
                ★ Lead Developer
              </div>
              <p className="font-black text-gray-900">
                {leadDeveloper.name}
              </p>
            </div>
          </motion.a>

          {/* OTHERS */}
          {developers.map((dev, i) => (
            <motion.a
              key={i}
              href={dev.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="relative w-32 h-32 rounded-full overflow-hidden border border-white/60"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.30)",
                  boxShadow:
                    "0 0 12px rgba(249,115,22,0.10), 0 4px 14px rgba(0,0,0,0.07)",
                }}
              >
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-white/8" />
              </div>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{dev.name}</p>
                <p className="text-orange-500 text-xs font-medium flex items-center justify-center gap-1">
                  {dev.icon}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}