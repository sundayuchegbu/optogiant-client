import ColorCollections from "./components/ColorCollections";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import NewsletterBanner from "./components/NewsletterBanner";
import PaintCarousel from "./components/PaintCarousel";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <ColorCollections />
      <PaintCarousel />
      <WhyChooseUs />
      <Testimonials />
      <NewsletterBanner />
      <WhatsAppButton />
    </>
  );
}
