import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LabGallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthPackages from "@/components/Packages";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import TestsServices from "@/components/Tests";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonial */}
      <Testimonials />

      {/* About Us */}
      <AboutUs />

      {/* Lab Gallery */}
      <LabGallery />

      {/* Tests and packages*/}
      <TestsServices />
      <HealthPackages />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
