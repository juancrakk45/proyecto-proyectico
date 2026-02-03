export default function ReservasPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">

      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* FORMULARIO */}
        <div className="flex-[1.5] p-10">
          <h2 className="text-4xl font-bold mb-2">Reserva tu cita</h2>
          <p className="text-gray-500 mb-8">
            Selecciona el mejor momento para tu experiencia.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {["09:00", "11:30", "14:00", "16:30", "18:00"].map(hora => (
              <button
                key={hora}
                className="border py-3 rounded-xl hover:border-amber-500 hover:text-amber-500 transition"
              >
                {hora}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border-b py-3 mb-4 outline-none"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border-b py-3 outline-none"
          />

          <button className="w-full bg-black text-white py-5 rounded-2xl mt-10 font-bold">
            Confirmar Reserva
          </button>
        </div>

        {/* RESUMEN */}
        <div className="flex-1 bg-gray-900 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Resumen</h3>
            <p className="text-gray-400">Lumière Spa</p>
            <p className="italic text-sm text-gray-400">
              Masaje Terapéutico
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="text-3xl font-bold">$75</span>
            </div>
            <p className="text-xs text-gray-500">
              Al confirmar aceptas nuestros términos.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
