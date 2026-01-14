"use client"

export default function Footer() {
    return (
        <footer className="bg-linear-to-br from-gray-900 via-blue-900 to-green-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Goswami Diagnostic Lab</h3>
                    <p className="text-blue-200 text-lg mb-6">
                        Your trusted partner in diagnostic excellence
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                    <a href="#privacy" className="text-blue-200 hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <span className="text-blue-400">|</span>
                    <a href="#terms" className="text-blue-200 hover:text-white transition-colors">
                        Terms & Conditions
                    </a>
                    <span className="text-blue-400">|</span>
                    <a href="#hipaa" className="text-blue-200 hover:text-white transition-colors">
                        HIPAA Compliance Statement
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-blue-400 to-transparent mb-8"></div>

                {/* Copyright & Credits */}
                <div className="text-center space-y-3">
                    <p className="text-blue-200 text-sm">
                        © 2026 Goswami Diagnostic Lab. All Rights Reserved.
                    </p>

                    {/* Website Builder Credit */}
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-blue-300">Website Designed and Developed by</span>
                        <a
                            href="https://portfolio-sandip-rose.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-4"
                        >
                            Sandip Dutta
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}