"use client"

import { Activity, Droplet, Microscope, FileText, Dna, Scan } from 'lucide-react';

export default function TestsServices() {

    const categories = [
        {
            id: 1,
            title: 'Blood Tests',
            icon: Droplet,
            description: 'Complete blood count, lipid profile, and more',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            title: 'Hormonal Tests',
            icon: Activity,
            description: 'Thyroid, testosterone, estrogen analysis',
            color: 'from-green-500 to-green-600'
        },
        {
            id: 3,
            title: 'Microbiology',
            icon: Microscope,
            description: 'Culture tests, infection screening',
            color: 'from-blue-600 to-blue-700'
        },
        {
            id: 4,
            title: 'Histopathology',
            icon: FileText,
            description: 'Tissue examination and biopsy analysis',
            color: 'from-green-600 to-green-700'
        },
        {
            id: 5,
            title: 'Genetic Testing',
            icon: Dna,
            description: 'DNA analysis and hereditary screening',
            color: 'from-blue-700 to-blue-800'
        },
        {
            id: 6,
            title: 'Radiology & Imaging',
            icon: Scan,
            description: 'X-ray, CT, MRI, and ultrasound services',
            color: 'from-green-700 to-green-800'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 py-16 px-4" id='tests'>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                            TESTS & PACKAGES
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Diagnostic Tests
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Browse our comprehensive range of diagnostic tests designed to support
                        accurate diagnosis and effective treatment planning.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                {/* Content */}
                                <div className="relative p-8">
                                    {/* Icon Container */}
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div
                                    className={`h-1 bg-linear-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}