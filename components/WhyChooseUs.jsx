"use client"

import { CheckCircle, Award, Shield } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        "State-of-the-art laboratory infrastructure",
        "Highly qualified pathologists and technicians",
        "Strict sample handling and quality assurance protocols",
        "Fast and reliable report turnaround",
        "Home sample collection for your convenience",
        "Secure and confidential digital reports"
    ];

    return (
        <section className="py-16 bg-white" id="why-choose">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Why Choose Us */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                            Why Choose Us
                        </h2>
                        <p className="text-xl text-green-600 font-semibold mb-8">
                            Your Health. Our Responsibility.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-green-600 shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-lg">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Accreditations */}
                    <div className="bg-blue-50 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center">
                                <Award size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900">
                                Accreditations & Quality
                            </h3>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow nationally and internationally recognized quality standards to ensure every test result is accurate, reliable, and clinically meaningful.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Our laboratory processes comply with established regulatory and data protection guidelines.
                        </p>

                        {/* Certification Badges */}
                        <div className="mt-8 flex gap-4">
                            <div className="bg-white rounded-lg p-4 shadow-md flex items-center justify-center flex-1">
                                <div className="text-center">
                                    <Shield size={32} className="text-blue-900 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-gray-700">West Bengal Govt. Registered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}