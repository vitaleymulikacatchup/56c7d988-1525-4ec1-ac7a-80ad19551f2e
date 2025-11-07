"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Palette, Code, Smartphone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Build Your Website"
          description="Create stunning, responsive websites with our powerful component library and design tools"
          tag="New Release"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      {/* Features Section */}
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to build amazing websites"
          tag="Features"
          features={[
            {
              title: "Lightning Fast",
              description: "Optimized performance for blazing fast load times",
              icon: Zap
            },
            {
              title: "Beautiful Design",
              description: "Stunning pre-built components and templates",
              icon: Palette
            },
            {
              title: "Clean Code",
              description: "Well-structured, maintainable, and scalable code",
              icon: Code
            },
            {
              title: "Mobile First",
              description: "Responsive design that works on all devices",
              icon: Smartphone
            }
          ]}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in creating experiences that inspire, empower, and transform. Our team is dedicated to building solutions that make a real difference."
          features={[
            {
              icon: Zap,
              title: "Innovation First",
              description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results that exceed expectations."
            },
            {
              icon: Code,
              title: "Quality Driven",
              description: "Every detail matters. We maintain the highest standards in everything we create and deliver."
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Get the latest updates and exclusive content delivered to your inbox"
          inputPlaceholder="Enter your email"
          buttonText="Sign Up"
          termsText="By clicking Sign Up you're confirming that you agree with our Terms and Conditions."
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "About", href: "about" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Home", href: "hero" }
              ]
            }
          ]}
          logoText="Webild"
          copyrightText="© 2025 | Webild"
        />
      </div>
    </ThemeProvider>
  );
}