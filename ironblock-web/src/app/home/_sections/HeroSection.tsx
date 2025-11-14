"use client";

import Image from "next/image";
import { FadeIn, FadeInUp, ScaleIn } from "../../../components/animations";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-baseline justify-center pt-0 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/0_Space_Stars_3840x2160.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl pt-28 mx-auto w-full text-center">
        <FadeIn>
          {/* Logo com animação de escala */}
          <ScaleIn delay={0.2} className="flex justify-center mb-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              <Image
                src="/images/iron-block-logo.png"
                alt="Iron Block Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              />
            </div>
          </ScaleIn>

          {/* Texto principal */}
          <FadeInUp delay={0.4}>
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-gray-400 mb-6">
              Em breve teremos novidades para você
            </h1>
          </FadeInUp>
        </FadeIn>
      </div>
    </section>
  );
}
