"use client"

// Testimonials.js
import { Quote, User, Stethoscope } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: "Professional staff and quick reports. The home collection service was extremely convenient.",
            author: "Verified Patient",
            icon: User,
            bgColor: "bg-blue-50"
        },
        {
            text: "Accurate reports and excellent coordination with doctors.",
            author: "Referring Physician",
            icon: Stethoscope,
            bgColor: "bg-green-50"
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                        Testimonials
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => {
                        const IconComponent = testimonial.icon;
                        return (
                            <div
                                key={index}
                                className={`${testimonial.bgColor} rounded-lg p-8 shadow-md relative`}
                            >
                                <Quote size={40} className="text-green-600 opacity-20 absolute top-6 left-6" />

                                <div className="relative z-10">
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                                            <IconComponent size={20} className="text-blue-900" />
                                        </div>
                                        <p className="text-blue-900 font-semibold">
                                            — {testimonial.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}