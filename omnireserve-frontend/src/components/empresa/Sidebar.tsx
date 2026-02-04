export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
      <div className="p-8">
        <div className="text-2xl font-bold tracking-tighter text-gray-800 uppercase">
          OMNI<span className="text-amber-500">BIZ</span>
        </div>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        <a className="flex items-center p-3 bg-amber-50 text-amber-600 rounded-xl font-semibold">
          📊 Dashboard
        </a>
        <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-gray-100">
          📅 Agenda de Citas
        </a>
        <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-gray-100">
          ✨ Mis Servicios
        </a>
        <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-gray-100">
          👤 Clientes
        </a>
        <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-gray-100">
          ⚙️ Configuración
        </a>
      </nav>

      <div className="p-6 border-t">
        <div className="bg-gray-900 text-white p-4 rounded-2xl text-xs">
          <p className="font-bold">Plan Premium</p>
          <p className="opacity-60 mb-3">Vence en 20 días</p>
          <button className="text-amber-400 font-bold underline">
            Renovar
          </button>
        </div>
      </div>
    </aside>
  )
}
