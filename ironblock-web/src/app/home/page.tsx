"use client";

import {
  Navigation,
  HeroSection,
  ApplicationShowcaseSection,
  BaaSServicesSection,
  WhatsAppContactSection,
  ContactSection,
  Footer,
} from "./_sections";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      {/* <BaaSServicesSection />
      <ApplicationShowcaseSection />
      <WhatsAppContactSection /> */}
      {/* <ContactSection /> */}
      <Footer />
      <WhatsAppButton
        phoneNumber="5511961282600"
        message="Olá! Gostaria de saber mais sobre os serviços da Iron Block."
      />
    </div>
  );
}
