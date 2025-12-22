import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-1">
                 <Image 
                  src="/logo.png" 
                  alt="SAJS Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">SAJS Foundation</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
            <p className="text-xs text-primary-400 mt-2 font-mono">
              Reg No: COOP/2019/JODHPUR/100657
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/teams" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Activities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/activities/education" className="hover:text-primary-400 transition-colors">Education</Link></li>
              <li><Link href="/activities/health" className="hover:text-primary-400 transition-colors">Health</Link></li>
              <li><Link href="/activities/sanskar" className="hover:text-primary-400 transition-colors">Sanskar</Link></li>
              <li><Link href="/activities/environment" className="hover:text-primary-400 transition-colors">Environment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-primary-400" />
                <span>Plot No 155, Prithvi Raj Nagar Jhalamand,<br />Jodhpur, Rajasthan 342006</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary-400" />
                <span>+91 9828030604</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-primary-400" />
                <span>info@sajs.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} SAJS Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
