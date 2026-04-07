import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold text-dark">
          Elementum
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="text-gray-700 hover:text-dark transition">
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-dark focus:outline-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              // Cross Icon
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              // Hamburger Icon
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute top-full left-0 w-full shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="block py-2 text-gray-700 hover:text-dark transition">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;