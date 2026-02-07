"use client";

import { GraduationCap, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 md:px-10">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center gap-3 mb-4">
            <GraduationCap size={26} className="text-blue-400" />
            <span className="font-semibold text-xl text-white">CareerDisha</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Empowering students in Jammu & Kashmir with comprehensive educational
            guidance and resources.
          </p>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-white mb-4 text-lg">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/colleges" className="text-sm hover:text-blue-400 transition-colors">
                Colleges
              </a>
            </li>
            <li>
              <a href="/scholarships" className="text-sm hover:text-blue-400 transition-colors">
                Scholarships
              </a>
            </li>
            <li>
              <a href="/courses" className="text-sm hover:text-blue-400 transition-colors">
                Career Guidance
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                Admission Support
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-white mb-4 text-lg">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="/keydates" className="text-sm hover:text-blue-400 transition-colors">
                Important Dates
              </a>
            </li>
            <li>
              <a href="/admission-jk" className="text-sm hover:text-blue-400 transition-colors">
                Application Forms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                Study Materials
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-white mb-4 text-lg">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <MapPin size={14} /> Srinagar, Jammu & Kashmir
            </li>
            <li>
              <a href="mailto:contact@careerdisha.com" className="hover:text-blue-400 transition-colors">
                contact@careerdisha.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">
                +91-1234567890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-white font-medium">CareerDisha</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}