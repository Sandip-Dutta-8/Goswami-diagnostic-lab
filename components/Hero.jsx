"use client"

import { ChevronRight, Shield, Zap, Heart, Award, Clock, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-26 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">

                        {/* Main Heading */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Accurate Diagnostics.
                                <br />
                                <span className="text-green-400">Trusted Care.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                                Advanced medical diagnostic services delivering precise results, faster turnaround times, and compassionate care—because your health deserves certainty.
                            </p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Advanced Diagnostic Technology</h3>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Secure Digital Reports</h3>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Expert Pathologists</h3>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="/bookings" className="group bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-2xl hover:shadow-green-600/50 transform hover:-translate-y-1">
                                Book a Test
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1">
                                Home Sample Collection
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 pt-6 border-t border-white border-opacity-20">
                            <div>
                                <p className="text-3xl font-bold text-green-400">98%</p>
                                <p className="text-sm text-blue-200">Accuracy Rate</p>
                            </div>
                            <div className="w-px h-12 bg-white bg-opacity-20"></div>
                            <div>
                                <p className="text-3xl font-bold text-green-400">500+</p>
                                <p className="text-sm text-blue-200">Happy Patients</p>
                            </div>
                            <div className="w-px h-12 bg-white bg-opacity-20"></div>
                            <div>
                                <p className="text-3xl font-bold text-green-400">10+</p>
                                <p className="text-sm text-blue-200">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative w-full max-w-lg">
                            {/* Main Card */}
                            <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20 p-12 shadow-2xl">
                                <div className="text-center">
                                    <div className="mb-6 inline-block">
                                        <div className="w-32 h-32 bg-linear-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                            <Shield size={64} className="text-white" />
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-lg">West Bengal Govt. Registered Lab</p>
                                    <div className="mt-6 flex justify-center gap-4">
                                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                                            <Award size={32} className="text-green-400" />
                                        </div>
                                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                                            <Shield size={32} className="text-green-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -top-6 -right-6 bg-linear-to-br from-green-600 to-green-700 rounded-2xl p-6 shadow-2xl animate-float">
                                <Zap size={36} className="text-white mb-2" />
                                <p className="text-sm font-bold text-white">Fast Results</p>
                                <p className="text-xs text-green-100">Within 24 hours</p>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                                <Heart size={36} className="text-green-600 mb-2" />
                                <p className="text-sm font-bold">Expert Care</p>
                                <p className="text-xs text-gray-600">Trusted by thousands</p>
                            </div>

                            <div className="absolute top-1/2 -right-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                                <Clock size={28} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}