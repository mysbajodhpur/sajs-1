import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 pt-20 pb-12">
      <div className="text-center max-w-lg animate-fadeIn">
        <div className="relative inline-block mb-4">
            <h1 className="text-9xl font-bold text-primary-100 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <FaExclamationTriangle className="w-16 h-16 text-primary-500 opacity-80" />
            </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you are looking for seems to have wandered off. It might have been removed or doesn't exist.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
