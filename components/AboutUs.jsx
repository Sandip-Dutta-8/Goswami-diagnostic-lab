import React from "react";

const AboutUs = () => {
    return (
        <section id="about" className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
                    About Us
                </h2>

                {/* Who We Are */}
                <div className="mb-8">
                    <p className="text-base md:text-lg leading-relaxed">
                        We are a patient-focused medical diagnostic laboratory committed to
                        delivering accurate, timely, and reliable diagnostic services that
                        support better healthcare decisions.
                    </p>
                </div>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-700">
                            To enhance patient outcomes through precise diagnostics, ethical
                            practices, and continuous innovation in laboratory medicine.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-700">
                            To be a trusted diagnostic partner for patients, doctors, and
                            healthcare institutions by setting benchmarks in quality,
                            reliability, and care.
                        </p>
                    </div>

                    {/* Leadership */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Leadership
                        </h3>
                        <p className="text-gray-700">
                            Our laboratory is led by experienced medical professionals and
                            pathologists with decades of expertise in clinical diagnostics and
                            laboratory medicine.
                        </p>
                    </div>

                    {/* Ethics */}
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                            Ethics & Patient Confidentiality
                        </h3>
                        <p className="text-gray-700">
                            We maintain strict confidentiality of patient data and adhere to
                            privacy-first practices in all laboratory operations.
                        </p>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className="mt-10 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">
                        Infrastructure & Technology
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600">✔</span> Fully automated analyzers
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600">✔</span> Advanced quality control systems
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600">✔</span> Digitized report generation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600">✔</span> Stringent sample tracking protocols
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
