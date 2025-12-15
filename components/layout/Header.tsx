'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaGraduationCap, FaHeartbeat, FaOm, FaLeaf, FaEllipsisH, FaBars } from 'react-icons/fa';
import { useDonate } from '@/context/DonateContext'; 

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const { openDonate } = useDonate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'navbar-scrolled shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">SAJS Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium ${
                isActive('/') ? 'text-primary-600 bg-primary-50' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium ${
                isActive('/about') ? 'text-primary-600 bg-primary-50' : ''
              }`}
            >
              About Us
            </Link>

            {/* Activities Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium flex items-center space-x-1">
                <span>Activities</span>
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2 border border-gray-100">
                <div className="py-2">
                  <Link href="/activities/education" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                    <FaGraduationCap className="w-5 mr-3 text-primary-600" />
                    <span className="font-medium">Education</span>
                  </Link>
                  <Link href="/activities/health" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                    <FaHeartbeat className="w-5 mr-3 text-primary-600" />
                    <span className="font-medium">Health</span>
                  </Link>
                  <Link href="/activities/sanskar" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                    <FaOm className="w-5 mr-3 text-primary-600" />
                    <span className="font-medium">Sanskar</span>
                  </Link>
                  <Link href="/activities/environment" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                    <FaLeaf className="w-5 mr-3 text-primary-600" />
                    <span className="font-medium">Environment</span>
                  </Link>
                  <Link href="/activities/other" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 border-t border-gray-100">
                    <FaEllipsisH className="w-5 mr-3 text-primary-600" />
                    <span className="font-medium">Other Activities</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/teams"
              className={`px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium ${
                isActive('/team') ? 'text-primary-600 bg-primary-50' : ''
              }`}
            >
              Teams
            </Link>
            <Link
              href="/gallery"
              className={`px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium ${
                isActive('/gallery') ? 'text-primary-600 bg-primary-50' : ''
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium ${
                isActive('/contact') ? 'text-primary-600 bg-primary-50' : ''
              }`}
            >
              Contact Us
            </Link>
            <button
              onClick={openDonate}
              className="ml-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none p-2"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium">
            About Us
          </Link>

          {/* Mobile Activities Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium"
            >
              <span>Activities</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isActivitiesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${isActivitiesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link href="/activities/education" className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">
                <FaGraduationCap className="w-5 mr-2 text-primary-600 text-sm" />
                <span>Education</span>
              </Link>
              <Link href="/activities/health" className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">
                <FaHeartbeat className="w-5 mr-2 text-primary-600 text-sm" />
                <span>Health</span>
              </Link>
              <Link href="/activities/sanskar" className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">
                <FaOm className="w-5 mr-2 text-primary-600 text-sm" />
                <span>Sanskar</span>
              </Link>
              <Link href="/activities/environment" className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">
                <FaLeaf className="w-5 mr-2 text-primary-600 text-sm" />
                <span>Environment</span>
              </Link>
              <Link href="/activities/other" className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">
                <FaEllipsisH className="w-5 mr-2 text-primary-600 text-sm" />
                <span>Other Activities</span>
              </Link>
            </div>
          </div>

          <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium">
            Teams
          </Link>
          <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium">
            Gallery
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 font-medium">
            Contact Us
          </Link>
          <button 
            onClick={() => {
                setIsMobileMenuOpen(false);
                openDonate();
            }}
            className="w-full text-left px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 mt-2"
          >
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
}
