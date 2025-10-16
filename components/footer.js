

"use client"; // needed for router + onClick

import { useRouter } from "next/navigation";
import { FiSearch, FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import { LuSchool } from "react-icons/lu";
import { MdOutlineEventNote, MdOutlineNewspaper } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

const footer = () => {
    const router = useRouter();
  return (
   <>
    {/* Footer */}
        <footer className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-900 dark:bg-black text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={24} className="text-blue-400" />
                <span className="font-inter font-semibold text-xl text-white">
                  CareerDisha
                </span>
              </div>
              <p className="font-poppins text-sm text-gray-400 leading-relaxed">
                Empowering students in Jammu & Kashmir with comprehensive
                educational guidance and resources.
              </p>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/colleges"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    College 
                  </a>
                </li>
                <li>
                  <a
                    href="/scholerships"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Admission Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/keydates"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Important Dates
                  </a>
                </li>
                <li>
                  <a
                    href="/admission-jk"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Application Forms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    Study Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-sm hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="font-poppins text-sm flex items-center gap-2">
                  <MapPin size={14} />
                  Srinagar, Jammu & Kashmir
                </li>
                <li className="font-poppins text-sm">
                  contact@careerdisha.com
                </li>
                <li className="font-poppins text-sm">+91-XXXXXXXXXX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-poppins text-sm text-gray-400">
              © 2025 CareerDisha. All rights reserved.
            </p>
          </div>
        </footer>
   </>
  )
}

export default footer