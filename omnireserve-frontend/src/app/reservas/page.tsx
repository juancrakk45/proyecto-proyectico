"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"


export default function ReservasPage() {
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const searchParams = useSearchParams()

  const lugar = searchParams.get("lugar") || "Lugar no definido"
  const servicio = searchParams.get("servicio") || "Servicio"
  const precio = searchParams.get("precio") || "0"


  const horas = ["09:00", "11:30", "14:00", "16:30", "18:00"]

  const confirmarReserva = () => {
    if (!horaSeleccionada || !nombre || !email) {
      alert("Por favor completa todos los campos")
      return
    }

    console.log("Reserva creada:", {
      hora: horaSeleccionada,
      nombre,
      email,
      lugar,
      servicio,
      precio,
    })


    alert("Reserva confirmada (simulada)")
  }

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
            {horas.map((hora) => (
              <button
                key={hora}
                onClick={() => setHoraSeleccionada(hora)}
                className={`border py-3 rounded-xl transition
                  ${horaSeleccionada === hora
                    ? "bg-black text-white border-black"
                    : "hover:border-amber-500 hover:text-amber-500"
                  }`}
              >
                {hora}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border-b py-3 mb-4 outline-none"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b py-3 outline-none"
          />

          <button
            onClick={confirmarReserva}
            className="w-full bg-black text-white py-5 rounded-2xl mt-10 font-bold"
          >
            Confirmar Reserva
          </button>
        </div>

        {/* RESUMEN */}
        <div className="flex-1 bg-gray-900 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Resumen</h3>
            <p className="text-gray-400">{lugar}</p>
            <p className="italic text-sm text-gray-400">
              {servicio}
            </p>

            {horaSeleccionada && (
              <p className="mt-4 text-sm text-amber-400">
                Hora seleccionada: {horaSeleccionada}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="text-3xl font-bold">${precio}</span>
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
