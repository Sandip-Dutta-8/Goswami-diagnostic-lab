"use client"

import { useState } from 'react';
import { X } from 'lucide-react';

export default function LabGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Replace with your actual lab image
    const labImage = {
        id: 1,
        url: 'https://ik.imagekit.io/m2p6j6atx/lab1.jpeg',
        title: 'Goswami Diagnostic Lab'
    };

    const videoUrl = 'https://ik.imagekit.io/m2p6j6atx/video.mp4';

    return (
        <div className="py-16 px-4 bg-linear-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-6xl mx-auto">

                {/* Gallery Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <span className="bg-linear-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase inline-block mb-4">
                            Our Facility
                        </span>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div
                            onClick={() => setSelectedImage(labImage)}
                            className="cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-blue-100 hover:border-blue-400"
                        >
                            <img
                                src={labImage.url}
                                alt={labImage.title}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div>
                    <div className="text-center mb-8">
                        <span className="bg-linear-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase inline-block mb-4">
                            Watch Now
                        </span>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-green-100">
                        <div className="aspect-video">
                            <video
                                src={videoUrl}
                                controls
                                className="w-full h-full"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-linear-to-br from-blue-900 to-green-900 bg-opacity-95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white bg-linear-to-r from-blue-600 to-green-600 rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-4 border-white"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}