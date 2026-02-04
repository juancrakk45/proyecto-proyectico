"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const [busqueda, setBusqueda] = useState("")
  const router = useRouter()

  const buscar = () => {
    if (!busqueda) return
    router.push(`/lugares?query=${busqueda}`)
  }

  return (
    <header className="py-24 text-center bg-gradient-to-br from-gray-50 to-white">
      <h1 className="text-6xl mb-4 font-extrabold text-gray-900">
        Tu Próxima Experiencia <span className="text-amber-500">Empieza Aquí</span>.
      </h1>

      <p className="text-gray-600 mb-10 text-xl max-w-3xl mx-auto">
        Descubre y reserva en los lugares más exclusivos de tu ciudad.
      </p>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-full p-3 flex border">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="¿Qué buscas? (Spa, Restaurante, Clínica...)"
          className="flex-grow px-6 text-lg outline-none bg-transparent"
        />
        <button
          onClick={buscar}
          className="bg-amber-500 text-white px-10 py-4 rounded-full font-semibold"
        >
          Buscar
        </button>
      </div>
    </header>
  )
}
