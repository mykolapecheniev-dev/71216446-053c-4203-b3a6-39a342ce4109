"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Sun } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Bouquets",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Panda Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Blooms That Tell Your Story"
      description="At Panda Flowers Studio, we craft artisanal arrangements that bring nature's beauty into your home, celebrating every moment with petals of perfection."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="https://pixabay.com/get/g11e65694e3896b9746281d0fc237067453582cc329f290dd139b42e4335097f6b68740d721fd11ee5ddee81a67d83f847b75a74fc9ec7c6199fdd74866bc4fc9_1280.jpg"
      mediaAnimation="blur-reveal"
      imageAlt="Elegant flower bouquet studio aesthetic"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Artistry in Every Bloom"
      description="Panda Studio was born from a passion for botanical aesthetics and sustainable floristry. We source locally, design organically, and deliver joy."
      subdescription="Every arrangement is hand-selected to match your vision and elevate your space."
      imageSrc="https://pixabay.com/get/gf73d401af96dfa0675e9bd6981e19e8830559f02590ca9dcfb4eecd527cdf6c9ada5084470db25babec503b0a503babb544a4ace30e4a285954989ba682c0a6e_1280.jpg?_wi=1"
      mediaAnimation="slide-up"
      icon={Sun}
      imageAlt="Florist arranging flowers in a studio"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Panda Studio",
          name: "The Morning Glow",
          price: "$65",
          rating: 5,
          reviewCount: "12",
          imageSrc: "https://pixabay.com/get/g6ee9ca4707cd5375ec7a5d06ab079767c29afef1f8d607d49a38e0357de452e00be9d18ab01dc616993f4459dd3b32be0af3feddbcd59ebd9f5af36062b16aec_1280.jpg",
        },
        {
          id: "p2",
          brand: "Panda Studio",
          name: "Velvet Sunset",
          price: "$85",
          rating: 5,
          reviewCount: "8",
          imageSrc: "https://pixabay.com/get/g72c0682f8c407c6953c1a3424f910245cfdbdd7f2a1329831dc080174892316c28ec1f3af64fa9efcd834ecf77a10556e8fe33dd9926881ea70f25b05e0fddcc_1280.jpg",
        },
        {
          id: "p3",
          brand: "Panda Studio",
          name: "Spring Whispers",
          price: "$55",
          rating: 5,
          reviewCount: "15",
          imageSrc: "https://pixabay.com/get/g901b51381e8fc2c351e62494967d52f4cf6c6f5d64a2d1da66e4db82bdcf0c58d386943127645d0f7c8ae48d1734e0909743b61966f22cfdc76b3ea50403aa90_1280.jpg",
        },
      ]}
      title="Fresh Seasonal Selections"
      description="Curated arrangements for every occasion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elena R.",
          handle: "@elena_designs",
          testimonial: "The most beautiful arrangements I've ever seen! Absolutely loved my wedding bouquet.",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g50541bbb4b2d3b1cbd4797d6dfb8fa9cac96f9069663c3cc6d0cacd1f21d89c3e93ddc567b68962b26ccff410ffc928b0e6cbb4e699724543c67b2c19805f736_1280.jpg",
        },
        {
          id: "2",
          name: "Mark S.",
          handle: "@marks_world",
          testimonial: "Fast delivery and the flowers looked even better in person than online.",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6a5e9b93019cf3455536ee86b5157a2c1ac77cea8fb347a97545fcd75bb3494d3277c30155e51f814cd5c943ff26f01b8a4cd1ee63186c93c173b055ebe41c1a_1280.jpg",
        },
        {
          id: "3",
          name: "Sarah L.",
          handle: "@sarah_life",
          testimonial: "Panda Studio is my go-to for every anniversary. Stunning work every time.",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g1d8301c8328566234484369af89c5eb4513fe2bafce0a01f4d95702f875be6ae480ee7b91ba18b307a28402c8b8b6331314a5d66496d3b777deea6e478c69c77_1280.jpg",
        },
        {
          id: "4",
          name: "Jessica M.",
          handle: "@jess_m",
          testimonial: "Sophisticated designs that really stand out. Incredible attention to detail!",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g759df0729e746dcc9b56380dda76c6f4b73bcda4dbef3cd034a22ff4eaa80c77ed5169d6376be95f3bc1cbddb08766722e7fd2feb0e607f165a246684005520a_1280.jpg",
        },
      ]}
      showRating={true}
      title="Loved by Our Community"
      description="Heartfelt words from our happy customers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Ready for a Custom Bouquet?"
      description="Share your vision with us, and we will create the perfect floral experience for you."
      mediaAnimation="slide-up"
      imageSrc="https://pixabay.com/get/gf73d401af96dfa0675e9bd6981e19e8830559f02590ca9dcfb4eecd527cdf6c9ada5084470db25babec503b0a503babb544a4ace30e4a285954989ba682c0a6e_1280.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Bouquets",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Pinterest",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Panda Studio"
      copyrightText="© 2025 Panda Studio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
