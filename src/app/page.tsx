import AboutUs from "@/components/about-us";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import SpecialFeatures from "@/components/special-features";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <SpecialFeatures />
      <Products />
      <AboutUs />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
