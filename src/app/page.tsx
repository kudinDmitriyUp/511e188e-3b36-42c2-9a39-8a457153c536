"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoCarousel from '@/components/sections/hero/HeroLogoCarousel';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="circleGradient"
      cardStyle="gradient-subtle"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Joule Ventures"
          button={{
            text: "Get in Touch",
            href: "#contact"
          }}
          className="bg-background/80 backdrop-blur-sm"
          buttonClassName="bg-primary-cta hover:bg-primary-cta/90"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoCarousel
          logoText="Joule Ventures"
          description="Connecting American and Israeli founders with capital, network, and expertise in Atlanta. We invest in visionary entrepreneurs building the future."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024361753-xwbb7uwr.jpg",
              imageAlt: "Portfolio company office"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024363354-0twt9287.jpg",
              imageAlt: "Portfolio company team"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024364036-8bhn18ac.jpg",
              imageAlt: "Investment meeting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024364837-flqgnw4v.jpg",
              imageAlt: "Founder pitching"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024365521-tud092he.jpg",
              imageAlt: "Innovation showcase"
            }
          ]}
          ariaLabel="Joule Ventures hero section"
          className="w-full"
          containerClassName="py-20"
          logoClassName="text-primary-cta font-light"
          descriptionClassName="text-foreground/80 max-w-lg"
        />
      </div>
      
      <div id="about" data-section="about">
        <ParallaxAbout
          title="Investment with Purpose"
          description="Joule Ventures bridges the innovation ecosystems of America and Israel, investing in founders with bold vision and exceptional execution. Based in Atlanta, we connect visionary entrepreneurs with the capital, network, and strategic expertise needed to scale globally."
          tag="About Joule"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024373699-9hvs1i66.jpg"
          imageAlt="Joule Ventures team at conference"
          buttons={[
            {
              text: "View Portfolio",
              href: "#portfolio"
            },
            {
              text: "Learn More",
              href: "#investment-focus"
            }
          ]}
          ariaLabel="About section"
          className="w-full"
          titleClassName="text-5xl md:text-6xl font-light text-primary-cta"
          descriptionClassName="text-foreground/80"
        />
      </div>
      
      <div id="investment-focus" data-section="investment-focus">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024366204-dov77dpd.jpg",
              imageAlt: "Investment thesis strategy"
            }
          ]}
          title="Our Investment Thesis"
          description="We focus on deep-tech innovation, enterprise software, fintech, and biotech. Our portfolio spans founders from Tel Aviv to Silicon Valley, united by ambition to solve meaningful problems at scale. We provide more than capital: strategic guidance, market introductions, and operational support to accelerate growth."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Investment Focus"
          buttons={[
            {
              text: "Explore Portfolio",
              href: "#portfolio"
            }
          ]}
          ariaLabel="Investment focus section"
          className="w-full"
          containerClassName="py-20"
          titleClassName="text-4xl md:text-5xl font-light text-primary-cta"
          descriptionClassName="text-foreground/80 max-w-2xl"
        />
      </div>
      
      <div id="featured-companies" data-section="featured-companies">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Featured Investment",
              price: "Growth Stage",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024361753-xwbb7uwr.jpg",
              imageAlt: "Featured portfolio company"
            },
            {
              id: "2",
              name: "Portfolio Company",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024363354-0twt9287.jpg",
              imageAlt: "Portfolio company team"
            },
            {
              id: "3",
              name: "Innovation Leader",
              price: "Pre-Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024365521-tud092he.jpg",
              imageAlt: "Innovation portfolio"
            }
          ]}
          title="Featured Portfolio Companies"
          description="Meet some of the exceptional founders and companies we have backed across multiple rounds and sectors."
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Portfolio section"
          containerClassName="py-20"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardFour
          team={[
            {
              id: "1",
              name: "Founder & Managing Partner",
              role: "American Tech Veteran",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024367148-qt8djkee.jpg",
              imageAlt: "Managing partner portrait"
            },
            {
              id: "2",
              name: "Co-Founder & Partner",
              role: "Israeli Entrepreneur",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024368029-213hq70z.jpg",
              imageAlt: "Co-founder portrait"
            },
            {
              id: "3",
              name: "Operating Partner",
              role: "Startup Operations Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024369054-0jg58zmb.jpg",
              imageAlt: "Operating partner portrait"
            },
            {
              id: "4",
              name: "Investment Associate",
              role: "Deep Tech Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024367148-qt8djkee.jpg",
              imageAlt: "Investment associate portrait"
            },
            {
              id: "5",
              name: "Portfolio Manager",
              role: "Growth Strategy Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024368029-213hq70z.jpg",
              imageAlt: "Portfolio manager portrait"
            },
            {
              id: "6",
              name: "Strategy Advisor",
              role: "Market Expansion Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024369054-0jg58zmb.jpg",
              imageAlt: "Strategy advisor portrait"
            }
          ]}
          animationType="slide-up"
          title="Our Team"
          description="World-class investors and operators dedicated to backing exceptional founders. A diverse team bridging American innovation and Israeli entrepreneurship."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Leadership"
          speed={40}
          ariaLabel="Team section"
          containerClassName="py-20"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          testimonials={[
            {
              id: "1",
              name: "Sarah Cohen",
              handle: "@sarahcohen",
              testimonial: "Joule Ventures provided not just capital, but strategic guidance that accelerated our GTM by 6 months. Their network across the US and Israel was invaluable.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024370272-li60dvru.jpg",
              imageAlt: "Sarah Cohen founder"
            },
            {
              id: "2",
              name: "David Ramirez",
              handle: "@davidramirez",
              testimonial: "The team understands both the American and Israeli tech ecosystems deeply. They connected us with partners that became key to our expansion.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024371013-31yyz5cz.jpg",
              imageAlt: "David Ramirez entrepreneur"
            },
            {
              id: "3",
              name: "Yossi Melamed",
              handle: "@yossimel",
              testimonial: "Joule Ventures is more than VCs. They are true partners committed to building category-defining companies. Outstanding execution and support.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024371817-u37i2rjb.jpg",
              imageAlt: "Yossi Melamed founder"
            },
            {
              id: "4",
              name: "Elena Martinez",
              handle: "@elenastartup",
              testimonial: "The combination of Atlanta location and US-Israel bridge is unique. Joule Ventures brought us opportunities we couldn't have found elsewhere.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024372516-fvp6i6fh.jpg",
              imageAlt: "Elena Martinez CEO"
            },
            {
              id: "5",
              name: "Michael Zhang",
              handle: "@mzhang",
              testimonial: "Best investment decision we made. Their operational expertise helped us scale from 10 to 100 team members seamlessly.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024370272-li60dvru.jpg",
              imageAlt: "Michael Zhang entrepreneur"
            },
            {
              id: "6",
              name: "Rachel Levi",
              handle: "@rachellevi",
              testimonial: "Their founders-first approach and respect for both cultures made working with Joule Ventures an absolute pleasure.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024371013-31yyz5cz.jpg",
              imageAlt: "Rachel Levi founder"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          containerStyle="card"
          title="What Founders Say"
          description="Hear directly from the exceptional entrepreneurs we partner with across industries and geographies."
          textboxLayout="default"
          useInvertedBackground="invertCard"
          tag="Testimonials"
          ariaLabel="Testimonials section"
          containerClassName="py-20"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",
              title: "What stage do you typically invest in?",
              content: "We invest across early-stage to growth-stage companies. Our sweet spot is seed through Series B, but we remain flexible for exceptional founding teams and market opportunities."
            },
            {
              id: "2",
              title: "What are your ticket sizes?",
              content: "We typically write checks ranging from $250K to $2M depending on the round size and company stage. We are prepared to lead or co-invest based on the opportunity."
            },
            {
              id: "3",
              title: "Do you focus only on Israeli founders?",
              content: "No. We invest in exceptional American and Israeli founders, or teams combining both geographies and perspectives. Our thesis centers on bridging innovation ecosystems."
            },
            {
              id: "4",
              title: "What sectors do you focus on?",
              content: "We specialize in deep-tech, enterprise software, fintech, and biotech. We look for founders solving meaningful problems at scale with defensible technology."
            },
            {
              id: "5",
              title: "How long is your investment process?",
              content: "For the right founder and opportunity, we can move quickly from first meeting to term sheet in 4-8 weeks. We maintain a streamlined, founder-friendly process."
            },
            {
              id: "6",
              title: "Do you provide support beyond capital?",
              content: "Absolutely. We offer strategic guidance, operational support, market introductions, and access to our extensive network across the US and Israel."
            },
            {
              id: "7",
              title: "Are you open to remote founders?",
              content: "Yes. While based in Atlanta, we work with exceptional founders globally. We're happy to visit you or have regular video calls to maintain deep engagement."
            },
            {
              id: "8",
              title: "How do I apply for funding?",
              content: "Submit your pitch deck and business plan to hello@jouleventures.com. Include a brief note about why you think we're the right partner. We aim to respond within 2 weeks."
            }
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about investing with Joule Ventures. Can't find an answer? Get in touch."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="FAQ"
          animationType="smooth"
          ariaLabel="FAQ section"
          containerClassName="py-20"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Ready to discuss your next big idea? Whether you're a founder seeking capital or a partner interested in collaboration, we'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your vision and why you think Joule Ventures is a good fit...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766024364036-8bhn18ac.jpg"
          imageAlt="Joule Ventures contact"
          mediaPosition="right"
          buttonText="Send Message"
          ariaLabel="Contact section"
          containerClassName="py-20"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Joule Ventures"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Portfolio",
                  href: "#portfolio"
                },
                {
                  label: "Team",
                  href: "#team"
                },
                {
                  label: "Blog",
                  href: "/blog"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Founder Guide",
                  href: "/resources/founder-guide"
                },
                {
                  label: "Investment Thesis",
                  href: "/resources/thesis"
                },
                {
                  label: "News",
                  href: "/news"
                },
                {
                  label: "Events",
                  href: "/events"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Email",
                  href: "mailto:hello@jouleventures.com"
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/joule-ventures"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/jouleventures"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Joule Ventures. All rights reserved."
          logoWidth={140}
          logoHeight={40}
          ariaLabel="Site footer"
          containerClassName="py-20"
          logoTextClassName="text-primary-cta font-light"
        />
      </div>
    </ThemeProvider>
  );
}