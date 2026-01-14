"use client"

import { useState } from 'react';
import { Menu, X, DoorOpen, DoorClosed, LockIcon, Info } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-blue-900 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center text-sm">
                        <div className="hidden md:flex items-center gap-4">
                            <p className="flex items-center gap-2 hover:text-green-400 transition">
                                <DoorOpen size={16} />
                                <span>Lab Opening Time: 7:00 AM</span>
                            </p>
                            <span className="hidden sm:inline text-gray-400">|</span>
                            <p className="flex items-center gap-2 hover:text-green-400 transition">
                                <DoorClosed size={16} />
                                <span>Lab Closing Time: 9:00 PM</span>
                            </p>
                            <span className="hidden sm:inline text-gray-400">|</span>
                            <p className="flex items-center gap-2 hover:text-green-400 transition">
                                <LockIcon size={16} />
                                <span>Closed: Thursday</span>
                            </p>
                        </div>
                        <div className="md:hidden">
                            <p className="flex items-center gap-2">
                                <Info size={26} />
                                <span className='text-xs'>
                                    The lab is open from 7:00 AM to 9:00 PM and remains closed on Thursdays.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3 group">
                            <div>
                                <Image
                                    src={"/images/LOGO.jpeg"}
                                    alt="logo"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-blue-900 tracking-tight">GOSWAMI</h1>
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Diagnostic Lab</p>
                            </div>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('home')} className="cursor-pointer text-blue-900 font-semibold hover:text-green-600 transition-colors">
                                Home
                            </button>
                            <button onClick={() => scrollToSection('services')} className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors">
                                About Us
                            </button>
                            <button onClick={() => scrollToSection('tests')} className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors">
                                Tests & Packages
                            </button>
                            <button onClick={() => scrollToSection('contact-section')} className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors">
                                Contact Us
                            </button>
                        </div>

                        {/* CTA Button */}
                        <a href="#" className="hidden lg:flex items-center gap-4">
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                                Book a Test
                            </button>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-blue-900 p-2"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden pb-6 animate-fadeIn">
                            <div className="flex flex-col space-y-4">
                                <button onClick={() => scrollToSection('home')} className="text-blue-900 font-semibold py-2 border-b border-gray-200">
                                    Home
                                </button>
                                <button onClick={() => scrollToSection('services')} className="text-gray-700 py-2 border-b border-gray-200">
                                    Services
                                </button>
                                <button onClick={() => scrollToSection('about')} className="text-gray-700 py-2 border-b border-gray-200">
                                    About Us
                                </button>
                                <button onClick={() => scrollToSection('tests')} className="text-gray-700 py-2 border-b border-gray-200">
                                    Tests & Packages
                                </button>
                                <button onClick={() => scrollToSection('contact-section')} className="text-gray-700 py-2 border-b border-gray-200">
                                    Contact
                                </button>
                                <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold w-full mt-4 text-center">
                                    Book a Test
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}