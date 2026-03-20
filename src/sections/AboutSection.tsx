import { motion } from "framer-motion";
import expoIllustration from "../assets/a5307c74891f3fc356578c887ff68cb037002558.png";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[60%] flex justify-center md:justify-end md:translate-x-8 items-center"
          >
            <img
              src={expoIllustration}
              alt="Innovation Expo illustration"
              className="block mx-auto w-[80%] max-w-[260px] sm:max-w-sm md:w-full md:max-w-3xl object-contain select-none"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full md:w-[40%] text-center md:text-left"
          >
            <h2
              className="mb-6 leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                fontWeight: 400
              }}
            >
              What is Innovation Expo?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Imagine a place where ideas are not just discussed — but built, showcased, and brought to life.
Innovation Expo 2026 is a platform where students present real projects and pitch their ideas in a TEDx-style format to industry experts from companies like <b>Samsung</b>, <b>Ixigo</b>. <br></br>
Participants present directly to a panel of expert industry judges, receive constructive feedback, gain professional exposure, and compete for recognition.

            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              
              <span className="font-bold text-gray-900">INNOVATION</span>
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">Under the theme of “Innovation”, it brings together creativity, technology, and problem-solving into one powerful experience.
 
</p>

            <div className="mt-8 inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
              29 MARCH 2026 · IEEE WIE
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}