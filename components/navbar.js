"use client";

import Link from "next/link";

import { useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";

import { useState } from "react";

export default function Navbar({ onMenuToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  
    // <nav className="bg-white shadow-lg">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="flex justify-between h-16">
    //       <div className="flex">
    //         <div className="flex-shrink-0 flex items-center">
    //           <Link href="/" className="text-xl font-bold text-gray-800">
    //             SIH2025
    //           </Link>
    //         </div>
    //         <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
    //           <Link
    //             href="/"
    //             className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             href="/colleges"
    //             className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    //           >
    //             Colleges
    //           </Link>
    //           <Link
    //             href="/scholarships"
    //             className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    //           >
    //             Scholarships
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="hidden sm:ml-6 sm:flex sm:items-center">
    //         <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
    //           Get Started
    //         </button>
    //       </div>
    //       <div className="-mr-2 flex items-center sm:hidden">
    //         <button
    //           onClick={() => {
    //             setIsOpen(!isOpen);
    //             if (onMenuToggle) onMenuToggle();
    //           }}
    //           className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //           <svg
    //             className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {isOpen && (
    //     <div className="sm:hidden">
    //       <div className="pt-2 pb-3 space-y-1">
    //         <Link
    //           href="/"
    //           className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           href="/colleges"
    //           className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    //         >
    //           Colleges
    //         </Link>
    //         <Link
    //           href="/scholarships"
    //           className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    //         >
    //           Scholarships
    //         </Link>
    //       </div>
    //       <div className="pt-4 pb-3 border-t border-gray-200">
    //         <div className="flex items-center px-4">
    //           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 w-full">
    //             Get Started
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </nav>

    
    
    useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ur,ks,doi", // English, Hindi, Urdu, Kashmiri, Dogri
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 border-b bg-gradient-to-r from-blue-700 to-indigo-800 shadow-xl z-50">
      {/* Logo */}

      <h1 className="text-2xl font-bold text-white tracking-wide flex items-center gap-2">
      
              <Compass size={25} />
           
        CareerDisha
      </h1>

      {/* Navigation */}
      <nav className="flex gap-8 text-gray-200">
        <a href="/" className="hover:text-yellow-300 transition-colors duration-300">
          Home
        </a>
        <a
          href="/colleges"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Colleges
        </a>
        <a
          href="/scholarships"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Scholarships
        </a>
        <a
          href="/quiz"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Mock Test
        </a>
        <a
          href="/courses"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Courses & Degree
        </a>
      </nav>

      {/* Translate Widget */}
      {/* <div
        id="google_translate_element"
        className="bg-white text-black rounded-lg h-[40px] px-2 py-1 shadow-md"
      ></div> */}

      {/* Actions */}
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          Get Started
        </button>
        <a href="#" className="text-white flex items-center">
          Log In
        </a>
      </div>
    </header>
  

            </>
  );
}
