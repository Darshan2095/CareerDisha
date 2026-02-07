"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Google Translate Initialization
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
          includedLanguages: "en,hi,ur,ks,doi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-blue-700 to-indigo-800 shadow-xl z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide flex items-center gap-2">
          <Compass size={25} />
          CareerDisha
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-200">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/colleges" className="hover:text-yellow-300 transition-colors duration-300">
            Colleges
          </Link>
          <Link href="/scholarships" className="hover:text-yellow-300 transition-colors duration-300">
            Scholarships
          </Link>
          <Link href="/quiz" className="hover:text-yellow-300 transition-colors duration-300">
            Mock Test
          </Link>
          <Link href="/courses" className="hover:text-yellow-300 transition-colors duration-300">
            Courses & Degree
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            Get Started
          </button>
          <Link href="#" className="text-white">
            Log In
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-blue-800 to-indigo-900 text-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-6 border-b border-blue-700">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Compass size={22} />
            CareerDisha
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-8 px-6 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/colleges" onClick={() => setIsOpen(false)}>
            Colleges
          </Link>
          <Link href="/scholarships" onClick={() => setIsOpen(false)}>
            Scholarships
          </Link>
          <Link href="/quiz" onClick={() => setIsOpen(false)}>
            Mock Test
          </Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>
            Courses & Degree
          </Link>
        </nav>

        <div className="flex flex-col gap-4 mt-10 px-6">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300">
            Get Started
          </button>
          <Link href="#" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300">
            Log In
          </Link>
        </div>

        <div id="google_translate_element" className="mt-8 px-6"></div>
      </div>

      {/* Background overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </>
  );
}
