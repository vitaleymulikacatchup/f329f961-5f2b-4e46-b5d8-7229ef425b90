"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Heart, Waves, Crown, Sparkles, Star, Gem, Trophy, Users, MessageCircle, Handshake, HelpCircle, BookOpen, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Resort"
          button={{
            text: "Book Now",
            href: "https://booking.grandazureresort.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Luxury Redefined"
          description="Experience unparalleled elegance at Grand Azure Resort, where world-class service meets breathtaking ocean views in perfect harmony."
          tag="5-Star Resort"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.grandazureresort.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Azure Resort luxury exterior with ocean view"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Exceptional Hospitality"
          description="Discover a world where luxury meets personalized service, creating unforgettable experiences for discerning travelers."
          tag="Our Promise"
          tagIcon={Heart}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Virtual Tour",
              href: "https://tour.grandazureresort.com"
            }
          ]}
          bulletPoints={[
            {
              title: "Oceanfront Paradise",
              description: "Prime beachfront location with stunning panoramic views and direct beach access.",
              icon: Waves
            },
            {
              title: "Award-Winning Service",
              description: "24/7 personalized concierge service dedicated to exceeding every expectation.",
              icon: Award
            },
            {
              title: "World-Class Amenities",
              description: "Luxury spa, infinity pools, gourmet restaurants, and exclusive member privileges.",
              icon: Crown
            }
          ]}
          imageSrc="https://images.pexels.com/photos/28054891/pexels-photo-28054891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury suite with ocean view and elegant furnishings"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Resort Amenities"
          description="Indulge in world-class facilities designed to enhance every moment of your stay"
          tag="Luxury Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Serenity Spa & Wellness",
              description: "Rejuvenate your mind, body, and soul with our award-winning spa treatments and wellness programs.",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room with ocean view",
              button: {
                text: "Book Spa",
                href: "https://spa.grandazureresort.com"
              }
            },
            {
              title: "Azure Fine Dining",
              description: "Savor exceptional cuisine crafted by renowned chefs using the finest local and international ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant fine dining restaurant with ocean view",
              button: {
                text: "View Menu",
                href: "dining"
              }
            },
            {
              title: "Infinity Pool Oasis",
              description: "Relax in our stunning infinity pools that seamlessly blend with the horizon of the azure ocean.",
              imageSrc: "https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Infinity pool overlooking ocean at sunset",
              button: {
                text: "Pool Info",
                href: "amenities"
              }
            },
            {
              title: "Personalized Concierge",
              description: "Our dedicated concierge team is available 24/7 to curate bespoke experiences tailored to your desires.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional concierge team ready to assist guests",
              button: {
                text: "Concierge Services",
                href: "services"
              }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each offering unparalleled comfort and breathtaking views"
          tag="Room Types"
          tagIcon={Award}
          plans={[
            {
              id: "deluxe",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$450/night",
              subtitle: "Perfect for couples seeking luxury",
              features: [
                "Ocean view balcony",
                "King-size luxury bedding",
                "Marble bathroom with soaking tub",
                "24/7 room service",
                "Complimentary WiFi",
                "Daily housekeeping"
              ]
            },
            {
              id: "suite",
              badge: "Most Luxurious",
              badgeIcon: Crown,
              price: "$850/night",
              subtitle: "Ultimate comfort and space",
              features: [
                "Panoramic ocean views",
                "Separate living area",
                "Premium bath amenities",
                "Personal butler service",
                "Complimentary breakfast",
                "Airport transfers included"
              ]
            },
            {
              id: "penthouse",
              badge: "Exclusive",
              badgeIcon: Gem,
              price: "$1,500/night",
              subtitle: "The pinnacle of luxury",
              features: [
                "Private terrace with pool",
                "360-degree ocean views",
                "Chef's kitchen",
                "Dedicated concierge",
                "Spa treatments included",
                "Private yacht access"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality is reflected in these remarkable achievements"
          tag="Awards & Recognition"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "Guest Satisfaction",
              description: "Consistently rated as exceptional by our valued guests",
              icon: Heart
            },
            {
              id: "2",
              value: "25+",
              title: "International Awards",
              description: "Recognition from prestigious hospitality organizations worldwide",
              icon: Award
            },
            {
              id: "3",
              value: "50K+",
              title: "Happy Guests",
              description: "Travelers from around the globe have experienced our luxury",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leadership"
          description="The passionate professionals dedicated to creating extraordinary experiences for every guest"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Isabella Rodriguez",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality, Isabella ensures every guest receives personalized, world-class service.",
              imageSrc: "https://images.pexels.com/photos/4060364/pexels-photo-4060364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Isabella Rodriguez, General Manager",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/isabella-rodriguez"
                },
                {
                  icon: "Mail",
                  url: "mailto:isabella@grandazureresort.com"
                }
              ]
            },
            {
              id: "2",
              name: "Chef Antoine Dubois",
              role: "Executive Chef",
              description: "Michelin-starred chef bringing innovative culinary artistry to our award-winning restaurant collection.",
              imageSrc: "https://images.pexels.com/photos/8270011/pexels-photo-8270011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Antoine Dubois, Executive Chef",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/chef.antoine"
                },
                {
                  icon: "Globe",
                  url: "https://chefantoine.com"
                }
              ]
            },
            {
              id: "3",
              name: "Sofia Wellness",
              role: "Spa Director",
              description: "Leading wellness expert dedicated to creating transformative spa experiences that rejuvenate mind, body, and spirit.",
              imageSrc: "https://images.pexels.com/photos/7581573/pexels-photo-7581573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sofia Wellness, Spa Director",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/sofia.wellness"
                },
                {
                  icon: "Globe",
                  url: "https://sofiawellness.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable stays at Grand Azure Resort"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              role: "CEO",
              company: "TechVision Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Mitchell, satisfied guest"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Travel Blogger",
              company: "Luxury Escapes",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Thompson, travel blogger"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Investment Director",
              company: "Global Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen, business traveler"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              company: "Elegant Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7180625/pexels-photo-7180625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez, event planner"
            },
            {
              id: "5",
              name: "Michael Hartmann",
              role: "Entrepreneur",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Hartmann, entrepreneur"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Proudly partnered with the world's most prestigious hospitality brands and organizations"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/12516848/pexels-photo-12516848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17394906/pexels-photo-17394906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3770158/pexels-photo-3770158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay at Grand Azure Resort"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport transfers for suite guests. Deluxe room guests can arrange transfers for a nominal fee. All transfers are in luxury vehicles."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three award-winning restaurants: Azure Fine Dining for gourmet cuisine, Oceanside Grill for casual beachfront dining, and the Sunset Bar for cocktails and light bites."
            },
            {
              id: "4",
              title: "Is there a spa on the property?",
              content: "Our Serenity Spa offers a full range of treatments including massages, facials, body treatments, and wellness therapies. Advance booking is recommended."
            },
            {
              id: "5",
              title: "What activities are available for guests?",
              content: "Guests can enjoy water sports, tennis, fitness center, yoga classes, cooking workshops, cultural tours, and exclusive beach access with premium amenities."
            },
            {
              id: "6",
              title: "Do you accommodate special dietary requirements?",
              content: "Absolutely. Our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and other special requirements. Please inform us during booking."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Resort Journal"
          description="Discover insider tips, local attractions, and luxury travel insights from our hospitality experts"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Travel Tips",
              title: "Ultimate Guide to Ocean Activities",
              excerpt: "Explore the best water sports and marine adventures available during your luxury resort stay.",
              imageSrc: "https://images.pexels.com/photos/34409665/pexels-photo-34409665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean activities and water sports",
              authorName: "Marina Torres",
              authorAvatar: "https://images.pexels.com/photos/34415337/pexels-photo-34415337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Wellness",
              title: "Spa Treatments for Total Relaxation",
              excerpt: "Discover our signature wellness treatments designed to rejuvenate your mind, body, and spirit.",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatments and wellness",
              authorName: "Dr. Wellness Chen",
              authorAvatar: "https://images.pexels.com/photos/13736395/pexels-photo-13736395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Dec 2024"
            },
            {
              id: "3",
              category: "Culinary",
              title: "Farm-to-Table Dining Experience",
              excerpt: "Learn about our sustainable culinary philosophy and meet the local partners who supply our kitchens.",
              imageSrc: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Farm-to-table fine dining cuisine",
              authorName: "Chef Isabella Rose",
              authorAvatar: "https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "5 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Subscribe to Azure Updates"
          description="Be the first to know about exclusive offers, new amenities, and special events at Grand Azure Resort."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about resort news and exclusive offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Resort",
              items: [
                { label: "Accommodations", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" },
                { label: "Business Center", href: "business" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "https://booking.grandazureresort.com" },
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Azure Resort"
        />
      </div>
    </ThemeProvider>
  );
}