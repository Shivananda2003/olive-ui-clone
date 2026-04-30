import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"];

  return (
    <nav className="w-full">
      <div className="w-full px-2 md:px-3 py-1 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <svg
            className="h-12 w-auto"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Olive icon */}
            <ellipse cx="18" cy="22" rx="12" ry="14" fill="#A3B938" />
            <ellipse cx="14" cy="20" rx="2" ry="2" fill="#1F2937" />
            <ellipse cx="22" cy="20" rx="2" ry="2" fill="#1F2937" />
            <path
              d="M14 25C16 27 20 27 22 25"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 6C20 4 24 4 26 6"
              stroke="#7A8F2A"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Text */}
            <text
              x="36"
              y="24"
              fontSize="22"
              fontWeight="800"
              fill="#A3B938"
              fontFamily="Inter, sans-serif"
              transform="scale(1,1.35)"
            >
              Live
            </text>
          </svg>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 text-sm ">
          {navLinks.map((link) => (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[#3a463a] font-medium tracking-[0.2px] hover:bg-[#e8efe8] transition cursor-pointer">
              {link}

              {(link === "Solutions" || link === "Blog" || link === "Food") && (
                <FaChevronDown className="text-[10px] mt-[2px]" />
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-gray-900">
            Sign in
          </a>

          <button className="bg-[#253612] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2f4f2f] transition cursor-pointer">
            Get Olive →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block">
              {link}
            </a>
          ))}

          <button className="w-full bg-gray-900 text-white py-2 rounded-full">
            Get Olive →
          </button>
        </div>
      )}
    </nav>
  );
}