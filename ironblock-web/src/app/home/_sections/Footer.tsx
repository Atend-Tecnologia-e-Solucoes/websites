import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Iron Block</h3>
            <p className="text-gray-400">
              Plataforma BaaS completa para empresas que desejam oferecer
              serviços financeiros digitais sem complexidade.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary-500 transition">
                  Em breve
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <p className="text-gray-400">
              Rua Manual da Silva Mano, 297, Ourinhos-SP <br /> Email:
              comercial@atend.srv.br <br /> Phone: +55 (11) 961282600 <br /> ©
              Copyright Iron Block
            </p>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2026 Iron Block. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
