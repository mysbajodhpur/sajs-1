'use client';

import { useDonate } from '@/context/DonateContext';
import { FaTimes, FaUniversity, FaQrcode } from 'react-icons/fa';
import Image from 'next/image';

export default function DonateModal() {
  const { isDonateOpen, closeDonate } = useDonate();

  if (!isDonateOpen) return null;

  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
        onClick={closeDonate}
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh] relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary-600 p-6 text-white text-center relative">
            <button 
                onClick={closeDonate}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
            >
                <FaTimes className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-1">Support Our Mission</h2>
            <p className="text-primary-100 text-sm">Your contribution changes lives.</p>
        </div>

        {/* Content */}
        <div className="p-8">
            {/* QR Code Section */}
            {/* <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-3 shadow-inner">
                    <Image src="/images/upi-qr.png" alt="Donate UPI" width={150} height={150} />
                </div>
                <p className="text-gray-500 text-sm font-medium">Scan to Pay via UPI</p>
                <p className="text-xs text-gray-400 mt-1">GPay / PhonePe / Paytm</p>
            </div>

            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div> */}

            {/* Bank Details */}
            <div className="mt-6">
                <div className="flex items-center space-x-2 text-primary-700 font-semibold mb-3">
                    <FaUniversity />
                    <span>Bank Transfer Details</span>
                </div>
                <div className="bg-primary-50 rounded-xl p-5 space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Account Name:</span>
                        <span className="font-bold">Sewa Avam Jan Sahyog Sansthan</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Account Number:</span>
                        <span className="font-bold font-mono">83057678472</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">IFSC Code:</span>
                        <span className="font-bold font-mono">RMGB0000306</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Bank Name:</span>
                        <span className="font-bold">Rajasthan Marudhara Gramin Bank</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 text-center text-xs text-gray-400">
                <p>* All donations are eligible for tax exemption under 80G.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
