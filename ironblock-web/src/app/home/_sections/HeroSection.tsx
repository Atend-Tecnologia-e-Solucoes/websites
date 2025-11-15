"use client";

import Image from "next/image";
import { FadeIn, FadeInUp, ScaleIn } from "../../../components/animations";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex flex-col overflow-hidden">
      {/* Parte 1: Seção com logo */}
      <div className="relative h-[92vh] flex items-start justify-start px-4 sm:px-6 lg:px-8">
        {/* Imagem de fundo centralizada */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/fundo-geometrico-abstrato-8000x4153.jpg"
            alt="fundo geometrico abstrato"
            fill
            className="object-cover object-center"
            priority
            sizes="100% 100%"
          />
        </div>

        <FadeIn>
          <ScaleIn delay={0.2}>
            <div className="relative w-[205px] h-[205px] sm:w-64 sm:h-64 md:w-[307px] md:h-[307px] lg:w-[358px] lg:h-[358px]">
              <Image
                src="/images/iron-block-logo.png"
                alt="Iron Block Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 205px, (max-width: 768px) 256px, (max-width: 1024px) 307px, 358px"
              />
            </div>
          </ScaleIn>
        </FadeIn>
      </div>

      {/* texto em breve */}
      <div className="absolute bottom-40 left-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
          <FadeInUp delay={0.4}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
              Em breve
            </h1>
          </FadeInUp>
        </h1>
      </div>
    </section>
  );
}
