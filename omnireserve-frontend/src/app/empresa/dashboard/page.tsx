export default function DashboardEmpresa() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-8">
          <div className="text-2xl font-bold tracking-tighter text-gray-800 uppercase">
            OMNI<span className="text-amber-500">BIZ</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          <a className="flex items-center p-3 text-amber-600 font-semibold bg-amber-50 rounded-xl">
            📊 Dashboard
          </a>
          <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-slate-100">
            📅 Agenda de Citas
          </a>
          <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-slate-100">
            ✨ Mis Servicios
          </a>
          <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-slate-100">
            👤 Clientes
          </a>
          <a className="flex items-center p-3 text-gray-600 rounded-xl hover:bg-slate-100">
            ⚙️ Configuración
          </a>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <div className="bg-gray-900 text-white p-4 rounded-2xl text-xs">
            <p className="font-bold">Plan Premium</p>
            <p className="opacity-60 mb-3">Vence en 20 días</p>
            <button className="text-amber-400 font-bold underline">
              Renovar
            </button>
          </div>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="ml-64 flex-grow p-10">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hola, Lumière Spa
            </h1>
            <p className="text-gray-500">
              Esto es lo que está pasando hoy en tu negocio.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-bold">Admin Lumière</p>
              <p className="text-xs text-green-500">● Negocio Abierto</p>
            </div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </header>

        {/* ESTADÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            ["Reservas Hoy", "14", "↑ 12% vs ayer"],
            ["Ingresos Estimados", "$1,240", "Basado en reservas"],
            ["Nuevos Clientes", "5", "Requieren atención"],
          ].map(([title, value, info]) => (
            <div
              key={title}
              className="bg-white p-6 rounded-3xl shadow-sm border"
            >
              <p className="text-gray-400 text-sm uppercase">{title}</p>
              <h3 className="text-3xl font-bold mt-2">{value}</h3>
              <p className="text-xs mt-2 text-gray-500">{info}</p>
            </div>
          ))}

          <div className="bg-amber-500 p-6 rounded-3xl text-white">
            <p className="text-sm uppercase">Puntuación</p>
            <h3 className="text-3xl font-bold mt-2">4.9 / 5</h3>
            <p className="text-xs">Basado en 120 reseñas</p>
          </div>
        </div>

        {/* TABLA */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Próximas Reservas</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="py-3 text-left">Cliente</th>
                <th>Servicio</th>
                <th>Hora</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 font-semibold">Ana García</td>
                <td>Masaje</td>
                <td>14:00</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                    Confirmado
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-semibold">Carlos Ruiz</td>
                <td>Hidroterapia</td>
                <td>15:30</td>
                <td>
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs">
                    Pendiente
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  )
}
