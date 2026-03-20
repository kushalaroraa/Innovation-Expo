import { motion } from 'motion/react';
import { Calendar, Globe, MapPin, Mail, ArrowUp, CheckCircle, ArrowRight, Code2, Cpu, Layers, Sparkles } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-18 h-18 rounded-full overflow-hidden">
                  <img src={"src/assets/logo.png"} alt="IEEE WIE Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">IEEE WIE</h3>
                  <p className="text-sm text-gray-400">Innovation Society</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &quot;IEEE Women in Engineering (WIE) is one of the world's largest professional networks dedicated to promoting diversity, inclusion, and innovation in technology and engineering. We empower students and professionals through technical growth, leadership development, and strong industry connections.&quot;
              </p>
            </div>

            <div>
              <h4 className="font-bold text-orange-400 mb-4 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guidelines</a></li>
                <li>
                  <a
                    href="https://forms.office.com/r/Q4dmT4XJs3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Registration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-orange-400 mb-4 uppercase tracking-wider text-sm">Venue</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-sm">
                    Bennett University<br />
                    Plot Nos 8-11, Tech Zone II<br />
                    Greater Noida, UP, 201310
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href="mailto:ieeewie@bennett.edu.in" className="text-gray-400 text-sm hover:text-white transition-colors">
                    ieeewie@bennett.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 IEEE WIE Innovation Expo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}