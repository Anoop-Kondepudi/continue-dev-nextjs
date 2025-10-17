"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M20.5286 3.26811L19.1512 5.65694L22.6328 11.6849C22.6582 11.7306 22.6735 11.7866 22.6735 11.8374C22.6735 11.8882 22.6582 11.9441 22.6328 11.9899L19.1512 18.0229L20.5286 20.4117L25.4791 11.8374L20.5286 3.26303V3.26811ZM18.6176 5.3469L19.995 2.95807H17.2402L15.8628 5.3469H18.6227H18.6176ZM15.8577 5.96697L19.075 11.5324H21.8298L18.6176 5.96697H15.8577ZM18.6176 17.7179L21.8298 12.1474H19.075L15.8577 17.7179H18.6176ZM15.8577 18.338L17.2351 20.7167H19.9899L18.6125 18.338H15.8526H15.8577ZM6.52098 21.3063C6.46507 21.3063 6.41424 21.291 6.3685 21.2656C6.32276 21.2402 6.28209 21.1995 6.25668 21.1538L2.77002 15.1207H0.0152482L4.9657 23.69H14.8615L13.4841 21.3063H6.52606H6.52098ZM14.0178 20.9962L15.3952 23.38L16.7726 20.9911L15.3952 18.6023L14.0178 20.9911V20.9962ZM14.8615 18.2974H8.43712L7.05973 20.6862H13.4841L14.8615 18.2974ZM7.89836 17.9924L4.68108 12.4219L3.30369 14.8107L6.52098 20.3812L7.89836 17.9924ZM0.0101654 14.5007H2.76494L4.14232 12.1118H1.39263L0.0101654 14.5007ZM6.24143 2.5413C6.26685 2.49556 6.30751 2.4549 6.35325 2.42948C6.399 2.40407 6.4549 2.38882 6.50573 2.38882H13.474L14.8514 0H4.95045L0 8.57435H2.75477L6.23127 2.54638L6.24143 2.5413ZM4.14232 11.5782L2.76494 9.18934H0.0101654L1.38755 11.5782H4.14232ZM6.51081 3.31386L3.29861 8.8793L4.67599 11.2681L7.8882 5.70268L6.51081 3.31386ZM13.4791 3.00382H7.04448L8.42187 5.39264H14.8564L13.4791 3.00382ZM15.3952 5.0826L16.7675 2.69886L15.3952 0.310038L14.0178 2.69378L15.3952 5.0826Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="font-semibold text-lg hidden sm:block">Continue</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/solutions" className="text-sm hover:text-gray-600 transition-colors">
            Solutions
          </Link>
          <Link href="https://hub.continue.dev/pricing" className="text-sm hover:text-gray-600 transition-colors">
            Pricing
          </Link>
          <Link href="https://docs.continue.dev/intro" className="text-sm hover:text-gray-600 transition-colors">
            Docs
          </Link>
          <Link href="/about-us" className="text-sm hover:text-gray-600 transition-colors">
            About Us
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="https://hub.continue.dev/login"
            className="hidden md:block px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Sign In
          </Link>
          
          <div className="flex gap-2">
            <a href="https://github.com/continuedev/continue" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="https://discord.com/invite/EfJEfdFnDQ" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.3303 4.22781C18.7767 3.50093 17.1156 2.97267 15.3789 2.67188C15.1656 3.05749 14.9164 3.57614 14.7446 3.98873C12.8985 3.71109 11.0693 3.71109 9.25716 3.98873C9.08539 3.57614 8.83055 3.05749 8.61536 2.67188C6.87681 2.97267 5.21376 3.50287 3.66019 4.23166C0.526643 8.96686 -0.322811 13.5845 0.101917 18.1365C2.18025 19.6885 4.19441 20.6313 6.17457 21.2483C6.66349 20.5754 7.09953 19.8601 7.47518 19.1063C6.75975 18.8344 6.07453 18.499 5.42707 18.1095C5.59884 17.9822 5.76686 17.8492 5.92918 17.7123C9.87819 19.5594 14.1689 19.5594 18.0707 17.7123C18.235 17.8492 18.403 17.9822 18.5728 18.1095C17.9235 18.5009 17.2364 18.8363 16.521 19.1082C16.8966 19.8601 17.3308 20.5774 17.8216 21.2502C19.8036 20.6333 21.8197 19.6905 23.898 18.1365C24.3964 12.8595 23.0467 8.28434 20.3303 4.22781ZM8.01318 15.337C6.82772 15.337 5.85555 14.2303 5.85555 12.8826C5.85555 11.535 6.80696 10.4264 8.01318 10.4264C9.21942 10.4264 10.1916 11.533 10.1708 12.8826C10.1727 14.2303 9.21942 15.337 8.01318 15.337ZM15.9867 15.337C14.8013 15.337 13.8291 14.2303 13.8291 12.8826C13.8291 11.535 14.7805 10.4264 15.9867 10.4264C17.193 10.4264 18.1651 11.533 18.1444 12.8826C18.1444 14.2303 17.193 15.337 15.9867 15.337Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/solutions" className="text-sm hover:text-gray-600 transition-colors">
              Solutions
            </Link>
            <Link href="https://hub.continue.dev/pricing" className="text-sm hover:text-gray-600 transition-colors">
              Pricing
            </Link>
            <Link href="https://docs.continue.dev/intro" className="text-sm hover:text-gray-600 transition-colors">
              Docs
            </Link>
            <Link href="/about-us" className="text-sm hover:text-gray-600 transition-colors">
              About Us
            </Link>
            <Link
              href="https://hub.continue.dev/login"
              className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
