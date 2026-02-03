export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            OMNI<span className="text-amber-400">RESERVE</span>
          </h3>
          <p className="text-gray-400">
            Plataforma inteligente para la gestión de reservas y citas en
            múltiples tipos de negocios.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-white mb-4">Plataforma</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Explorar</li>
            <li className="hover:text-white cursor-pointer">Categorías</li>
            <li className="hover:text-white cursor-pointer">Cómo funciona</li>
          </ul>
        </div>

        {/* Empresas */}
        <div>
          <h4 className="font-semibold text-white mb-4">Empresas</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Registrar negocio</li>
            <li className="hover:text-white cursor-pointer">Panel empresarial</li>
            <li className="hover:text-white cursor-pointer">Planes</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Términos</li>
            <li className="hover:text-white cursor-pointer">Privacidad</li>
            <li className="hover:text-white cursor-pointer">Soporte</li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} OmniReserve. Todos los derechos reservados.
      </div>
    </footer>
  )
}
