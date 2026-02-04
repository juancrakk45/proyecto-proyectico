import Sidebar from "@/components/empresa/Sidebar"

export default function EmpresaDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

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

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Reservas Hoy", value: "14", note: "↑ 12% vs ayer" },
            { title: "Ingresos", value: "$1,240", note: "Estimado" },
            { title: "Nuevos Clientes", value: "5", note: "Pendientes" },
            { title: "Puntuación", value: "4.9 / 5", note: "120 reseñas" },
          ].map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-3xl shadow border"
            >
              <p className="text-gray-400 text-sm uppercase">
                {stat.title}
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {stat.value}
              </h3>
              <p className="text-xs mt-2 text-gray-500">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* RESERVAS */}
        <div className="bg-white rounded-3xl p-8 shadow border">
          <h2 className="text-2xl font-bold mb-6">
            Próximas Reservas
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b">
                <th className="pb-4">Cliente</th>
                <th className="pb-4">Servicio</th>
                <th className="pb-4">Hora</th>
                <th className="pb-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 font-semibold">Ana García</td>
                <td>Masaje</td>
                <td>14:00</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                    Confirmado
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-semibold">Carlos Ruiz</td>
                <td>Facial</td>
                <td>16:30</td>
                <td>
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-bold">
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
