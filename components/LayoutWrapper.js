"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayoutWrapper({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
     
      
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        
        {/* Page content */}
        <main className="flex-1 overflow-auto pt-20">
          {children}
        <Footer></Footer>
        </main>
      </div>
    </div>
  );
}
