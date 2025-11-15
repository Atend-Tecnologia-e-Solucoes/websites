import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  return (
    // bg var(--background)
    <nav className="bg-background border-b border-gray-600 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <Image
              src="/images/iron-block-logo.png"
              alt="Iron Block"
              width={150}
              height={32}
            /> */}
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#inicio"
              className="text-primary-100 hover:text-primary-400 transition"
            >
              Início
            </Link>
            {/* <Link
              href="#aplicativo"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Plataforma
            </Link>
            <Link
              href="#baas"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Serviços
            </Link> */}

            <Link
              href="#contato"
              className="text-gray-600 hover:text-primary-400 transition"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
