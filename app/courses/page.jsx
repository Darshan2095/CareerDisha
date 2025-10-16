"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");
    const summaryRef = useRef(null);
    const router = useRouter();

    const handleCareerChange = (e) => {
        const value = e.target.value;
        if (value) {
            router.push(value);
        }
    };

    const careerStreams = [
        {
            title: "Engineering",
            img: "/engineering.png",
            description: "Explore diverse engineering career paths including computer science, mechanical, civil, electrical, and more.",
            link: "/courses/engineering"
        },
        {
            title: "Medical",
            img: "/medical.png",
            description: "Discover careers in medicine, dentistry, pharmacy, nursing, and other healthcare professions.",
            link: "/courses/medical"
        },
        {
            title: "Arts",
            img: "/arts.png",
            description: "Pursue creative and humanities fields like literature, fine arts, history, philosophy, and performing arts.",
            link: "/courses/arts"
        },
        {
            title: "Commerce",
            img: "/commerce.png",
            description: "Build careers in finance, accounting, business management, marketing, and other commerce fields.",
            link: "/courses/Commerce"
        }
    ];

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(""), 2000);
    };

    const scrollToSection = (sectionRef, sectionId) => {
        setActiveSection(sectionId);
        if (sectionRef.current) {
            const headerHeight = 80; // Height of fixed header
            const elementPosition = sectionRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const sectionRefs = {
            summary: summaryRef
        };

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("data-section-id");
                    if (id) setActiveSection(id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.entries(sectionRefs).forEach(([id, ref]) => {
            if (ref.current) {
                ref.current.setAttribute("data-section-id", id);
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            {/* Header - Sticky */}
           

            {/* Spacer */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-64 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
                <div className="text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Library</h2>
                    <p className="text-lg md:text-xl opacity-90">Explore diverse career paths and find your perfect fit</p>
                </div>
            </section>

            {/* Breadcrumb + Dropdown */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home</div>
                <div className="relative">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        defaultValue=""
                        onChange={handleCareerChange}
                    >
                        <option value="" disabled>Choose another Career</option>
                        <option value="/engineering">Engineering</option>
                        <option value="/medical">Medical</option>
                        <option value="/arts">Arts</option>
                        <option value="/commerce">Commerce</option>
                    </select>
                </div>
            </div>

            <div className="px-8 py-8 max-w-7xl mx-auto">
                {/* Summary Section */}
                <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800">Explore Career Paths</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                        <span className="text-2xl">📄</span>
                        <span>Find Your Perfect Career Fit</span>
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Choosing the right career path is one of the most important decisions you'll make. At Mindler, we provide comprehensive career libraries for major streams to help you make informed decisions.
                        </p>
                        <p>
                            Whether technology, healthcare, humanities, or business, we guide you through opportunities, challenges, and growth paths.
                        </p>
                        <p>
                            Explore our career libraries below for detailed info about professions, educational requirements, career prospects, and leading institutions.
                        </p>
                    </div>
                </section>

                {/* Career Streams Section */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Popular Career Streams</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {careerStreams.map((stream, index) => (
                            <Link
                                href={stream.link}
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={stream.img}
                                        alt={stream.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{stream.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">{stream.description}</p>
                                    <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300">
                                        <span>Explore Careers</span>
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Additional Info & CTA Sections */}
            </div>
        </div>
    );
}

