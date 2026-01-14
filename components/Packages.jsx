"use client"

import { Heart, User, Users, Shield } from 'lucide-react';

export default function HealthPackages() {

    const packages = [
        {
            id: 1,
            title: 'Basic Health Package',
            description: 'Ideal for routine health screening and early detection.',
            icon: Shield,
            gradient: 'from-blue-500 to-blue-600',
            bgGradient: 'from-blue-50 to-blue-100'
        },
        {
            id: 2,
            title: "Women's Health Package",
            description: 'Focused on hormonal balance, nutritional health, and preventive screening.',
            icon: User,
            gradient: 'from-green-500 to-green-600',
            bgGradient: 'from-green-50 to-green-100'
        },
        {
            id: 3,
            title: "Men's Health Package",
            description: 'Designed to monitor cardiac health, metabolism, and hormonal wellness.',
            icon: Heart,
            gradient: 'from-blue-600 to-blue-700',
            bgGradient: 'from-blue-50 to-blue-100'
        },
        {
            id: 4,
            title: 'Senior Citizen Package',
            description: 'Comprehensive screening tailored for age-related health concerns.',
            icon: Users,
            gradient: 'from-green-600 to-green-700',
            bgGradient: 'from-green-50 to-green-100'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Preventive Health Checkups
                    </h1>
                    <p className="text-2xl text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-green-600 font-semibold">
                        Invest in Prevention. Protect Your Future.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.map((pkg) => {
                        const Icon = pkg.icon;
                        return (
                            <div
                                key={pkg.id}
                                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Background Gradient Overlay */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${pkg.bgGradient} rounded-full blur-3xl opacity-30 -mr-32 -mt-32 group-hover:opacity-50 transition-opacity duration-500`} />

                                <div className="relative p-8">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-linear-to-br ${pkg.gradient} mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                                        {pkg.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {pkg.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center bg-linear-to-r from-blue-600 to-green-600 rounded-3xl p-12 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
                        Choose the test or package that's right for you and take the first step towards better health.
                    </p>
                    <a href='#' className="bg-white text-blue-600 px-6 md:px-8 py-4 rounded-full font-bold text-md md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Book Test or Checkup
                    </a>
                </div>
            </div>
        </div>
    );
}