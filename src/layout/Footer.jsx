
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#d1eadb] text-black pt-20 pb-10 px-6 md:px-20 font-satoshi overflow-hidden relative">
      
      {/* 1. Newsletter Section */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        
        {/* Red Curly Arrows Decoration */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex pointer-events-none">
          <img src="/footer/Vector 2518.png" alt="arrow" className="w-30 h-auto" />
          <img src="/footer/Vector 2519.png" alt="arrow" className="w-30 h-auto" />
        </div>

        {/* Purple Blob Decoration */}
        <div className="absolute -right-5 md:-right-15 w-15 sm:w-20 md:w-30 lg:w-40 lg:-right-80 top-0 lg:top-30 pointer-events-none hidden md:hidden lg:block">
          <img 
            src="/footer/Ellipse 739 (1).png" 
            alt="decoration" 
            className="w-32 md:w-40 opacity-90" 
          />
        </div>

        <h2 className="text-3xl md:text-6xl lg:text-8xl font-gerbil font-[400px] tracking-tight mb-4">
          Subscribe to <br /> our newsletter
        </h2>
        
        <p className="text-gray-700 mb-8 max-w-md mx-auto">
          To make your stay special and even more memorable
        </p>

        <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
          Subscribe Now
        </button>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-t border-black/10 mb-16" />

      {/* 2. Footer Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Column 1: Company */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Studio</a></li>
            <li><a href="#" className="hover:underline">Service</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Column 2: Terms & Policies */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Terms & Policies</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Explore</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Youtube</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>

        {/* Column 4: Contact/Address */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Terms & Policies</h3>
          <div className="text-gray-700 space-y-4">
            <p className="leading-relaxed">
              1498w Fluton ste, STE<br />
              2D Chicago, IL 63867.
            </p>
            <p>(123) 456789000</p>
            <p className="hover:underline cursor-pointer">info@elementum.com</p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright */}
      <div className="text-center pt-8 border-t border-black/5">
        <p className="text-sm text-gray-600">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;