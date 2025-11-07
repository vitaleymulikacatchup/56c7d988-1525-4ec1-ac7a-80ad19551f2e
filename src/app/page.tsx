"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart3, Facebook, Instagram, MessageSquare, ShieldCheck, Smartphone, Sparkles, Star, TrendingUp, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TelReview"
          button={{
            text: "Submit Review",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Honest Phone Reviews You Can Trust"
          description="Get unbiased, detailed reviews of the latest smartphones from verified users and tech experts. Make informed decisions with real user experiences."
          tag="Trusted Reviews"
          tagIcon={ShieldCheck}
          buttons={[
            { text: "Read Reviews", href: "testimonials" },
            { text: "Submit Review", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/smartphone-phone-review-rating-modern-1762530655600-080c4056.jpg"
          imageAlt="smartphone phone review rating modern"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe every phone purchase should be backed by honest, comprehensive reviews from real users who understand what matters most in your daily mobile experience."
          features={[
            {
              icon: ShieldCheck,
              title: "Verified Reviews",
              description: "All reviews are verified from actual phone owners ensuring authentic experiences and genuine feedback."
            },
            {
              icon: BarChart3,
              title: "Detailed Analysis",
              description: "In-depth testing of battery life, camera quality, performance, and build quality for complete insights."
            },
            {
              icon: Users,
              title: "Community Driven",
              description: "Join thousands of tech enthusiasts sharing real experiences to help others make better choices."
            },
            {
              icon: Award,
              title: "Expert Insights",
              description: "Professional reviewers and tech experts provide comprehensive analysis alongside user reviews."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything You Need for Smart Phone Decisions"
          description="Comprehensive review platform designed to give you all the information needed to choose your perfect smartphone"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Authentic Verification",
              description: "Advanced verification system ensures all reviews come from genuine phone owners",
              icon: ShieldCheck
            },
            {
              title: "Performance Analytics",
              description: "Detailed performance metrics including battery tests, speed benchmarks, and real-world usage data",
              icon: BarChart3
            },
            {
              title: "Mobile Optimized",
              description: "Seamless experience across all devices with our responsive mobile-first platform",
              icon: Smartphone
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Community Says"
          description="Real feedback from verified reviewers who trust our platform"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Tech Reviewer",
              company: "TechDaily",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/professional-woman-business-portrait-rev-1762530664049-f2ae7b1b.jpg",
              imageAlt: "professional woman business portrait reviewer"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Mobile Expert",
              company: "PhoneGuide",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/man-technology-professional-reviewer-por-1762530665974-a80584ca.jpg",
              imageAlt: "man technology professional reviewer portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Consumer Advocate",
              company: "SmartChoice",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/young-woman-smartphone-user-reviewer-por-1762530668245-99422ef5.jpg",
              imageAlt: "young woman smartphone user reviewer portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Technology Analyst",
              company: "MobileInsights",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/business-man-phone-technology-reviewer-1762530670092-d00e6d7b.jpg",
              imageAlt: "business man phone technology reviewer"
            },
            {
              id: "5",
              name: "Lisa Wang",
              role: "Product Reviewer",
              company: "GadgetReview",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/woman-professional-reviewer-technology-p-1762530671881-67d99370.jpg",
              imageAlt: "woman professional reviewer technology portrait"
            },
            {
              id: "6",
              name: "James Mitchell",
              role: "Tech Journalist",
              company: "PhoneWeekly",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/man-business-professional-smartphone-rev-1762530674009-a92b0820.jpg",
              imageAlt: "man business professional smartphone reviewer"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Thousands"
          description="Our growing community of reviewers and readers"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Active Reviewers",
              value: "15,000+"
            },
            {
              id: "2",
              icon: Smartphone,
              title: "Phones Reviewed",
              value: "2,500+"
            },
            {
              id: "3",
              icon: Star,
              title: "Reviews Published",
              value: "45,000+"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Submit Your Phone Review"
          description="Share your experience with your current smartphone and help others make informed decisions. Your review matters to our community."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34RP4F9iQtPn24OHDYSkxrYkkIo/tmp/modern-smartphones-collection-review-tes-1762530676188-5b61647a.jpg"
          imageAlt="modern smartphones collection review testing"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Start Review"
          termsText="By submitting a review you agree to our Community Guidelines and Terms of Service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="TelReview"
          columns={[
            {
              title: "Platform",
              items: [
                { label: "Browse Reviews", href: "testimonials" },
                { label: "Submit Review", href: "contact" },
                { label: "How It Works", href: "about" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Reviewers", href: "testimonials" },
                { label: "Guidelines", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
          copyrightText="© 2025 TelReview. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}