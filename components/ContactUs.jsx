"use client"

import { Stethoscope, Building2, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';

export default function ContactUs() {

    const partnerOptions = [
        {
            id: 1,
            title: 'For Doctors',
            description: 'Partner with us for reliable diagnostics, seamless report access, and dedicated professional support.',
            icon: Stethoscope,
            gradient: 'from-blue-500 via-blue-600 to-blue-700',
            accentColor: 'blue'
        },
        {
            id: 2,
            title: 'For Corporates',
            description: 'We offer customized corporate health checkups and on-site sample collection services for organizations.',
            icon: Building2,
            gradient: 'from-green-500 via-green-600 to-green-700',
            accentColor: 'green'
        }
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Doctors & Partners Section */}
            <div className="relative py-20 px-4 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            DOCTORS & PARTNERS
                        </div>
                        <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Join Our Network
                        </h1>
                        <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-green-600 mx-auto rounded-full" />
                    </div>

                    {/* Partner Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                        {partnerOptions.map((option) => {
                            const Icon = option.icon;

                            return (
                                <div
                                    key={option.id}
                                    className={`relative bg-linear-to-br ${option.gradient} rounded-2xl p-8 overflow-hidden transition-all duration-500 cursor-pointer group`}
                                >
                                    {/* Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-0 right-0 w-40 h-40 border-4 border-white rounded-full -mr-20 -mt-20" />
                                        <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-white rounded-full -ml-16 -mb-16" />
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon Circle */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
                                        </div>

                                        {/* Content */}
                                        <h2 className="text-3xl font-bold text-white mb-4">
                                            {option.title}
                                        </h2>
                                        <p className="text-white text-opacity-90 text-lg leading-relaxed mb-6">
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button
                            onClick={scrollToContact}
                            className="cursor-pointer group relative inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative">Partner With Us</span>
                            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-section" className="relative py-20 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 px-5 py-2 rounded-full text-sm font-semibold text-gray-700 mb-6 shadow-sm">
                            <MessageCircle className="w-4 h-4" />
                            CONTACT US
                        </div>
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're here to help with your diagnostic needs.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Phone Card */}
                        <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-500 to-blue-600 rounded-t-2xl" />

                            <div className="flex flex-col items-center text-center pt-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-10 h-10 text-blue-600" strokeWidth={2} />
                                </div>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
                                    Phone
                                </p>
                                <a href='tel:+918653190270' className="text-2xl font-bold text-blue-950 mb-2">
                                    +91-8653190270
                                </a>
                                <p className="text-sm text-blue-700">
                                    Available Whatsapp on this number
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-500 to-green-600 rounded-t-2xl" />

                            <div className="flex flex-col items-center text-center pt-4">
                                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-10 h-10 text-green-600" strokeWidth={2} />
                                </div>
                                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
                                    Email
                                </p>
                                <a href='mailto:' className="text-2xl font-bold text-blue-950 mb-2">
                                    [Support Email]
                                </a>
                                <p className="text-sm text-blue-700">
                                    We'll respond within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}