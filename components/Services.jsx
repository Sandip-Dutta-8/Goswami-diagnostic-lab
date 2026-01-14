"use client"

import { Microscope, Activity, Shield, Dna } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Microscope,
            title: "Pathology Services",
            description: "Accurate blood, urine, and tissue testing performed using advanced automated systems and strict quality controls.",
            iconBg: "bg-blue-600"
        },
        {
            icon: Activity,
            title: "Radiology & Imaging",
            description: "High-resolution imaging services including X-ray, ultrasound, and other diagnostic scans conducted by experienced professionals.",
            iconBg: "bg-green-600"
        },
        {
            icon: Shield,
            title: "Preventive Health Packages",
            description: "Customized health checkups designed to detect potential health risks early and support long-term wellness.",
            iconBg: "bg-blue-600"
        },
        {
            icon: Dna,
            title: "Specialized Testing",
            description: "Advanced diagnostic tests including hormonal, genetic, oncology, and infectious disease testing.",
            iconBg: "bg-green-600"
        }
    ];

    return (
        <section className="py-16 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive Diagnostic Solutions Under One Roof
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8"
                            >
                                <div className={`${service.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                                    <IconComponent size={28} className="text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}