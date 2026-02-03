export default function Navbar() {
  return (
    <nav className="p-8 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="text-3xl font-bold tracking-tighter text-gray-800">
        OMNI<span className="text-amber-500">RESERVE</span>
      </div>

      <div className="space-x-8 text-sm uppercase tracking-wider text-gray-600">
        <a className="hover:text-black cursor-pointer">Explorar</a>
        <a className="hover:text-black cursor-pointer">Negocios</a>
        <a className="hover:text-black cursor-pointer">Ayuda</a>
        <a className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Mi Cuenta
        </a>
      </div>
    </nav>
  )
}
