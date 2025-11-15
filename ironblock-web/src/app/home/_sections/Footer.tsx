import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-background text-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-100">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-100">
              Iron Block
            </h3>
            <p className="text-gray-600">
              {" "}
              A tokenização de ativos é uma solução inovadora que transforma a
              maneira como as empresas operam, tornando seus processos mais
              eficientes, seguros e acessíveis. Na IronBlock, somos
              especialistas no desenvolvimento de tokens e em sua integração em
              redes Blockchain, sejam elas públicas ou privadas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contato</h4>
            <p className="text-gray-600">
              Rua Gomes de Carvalho 1629, conjunto 129931
              <br />
              CEP 04547-006 - Vila Olímpia - São Paulo-SP
              <br />
              Telefone +5511 40811014
              <br />
              Email: comercial@ironblock.com.br
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
