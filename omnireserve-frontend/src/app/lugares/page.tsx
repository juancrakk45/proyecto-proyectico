"use client"
import { useSearchParams, useRouter } from "next/navigation"

const lugares = [
    {
        id: 1,
        nombre: "Lumière Spa",
        categoria: "spa",
        servicio: "Masaje Terapéutico",
        precio: 75,
    },
    {
        id: 2,
        nombre: "Zen Beauty",
        categoria: "spa",
        servicio: "Facial Premium",
        precio: 60,
    },
]

export default function LugaresPage() {
    const params = useSearchParams()
    const router = useRouter()
    const query = params.get("query")?.toLowerCase() || ""

    const resultados = lugares.filter((l) =>
        l.nombre.toLowerCase().includes(query) ||
        l.categoria.includes(query)
    )

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-8">
                Resultados para: <span className="text-amber-500">{query}</span>
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
                {resultados.map((lugar) => (
                    <div
                        key={lugar.id}
                        className="bg-white p-6 rounded-3xl shadow border"
                    >
                        <h2 className="text-2xl font-bold">{lugar.nombre}</h2>
                        <p className="text-gray-500 italic">{lugar.servicio}</p>
                        <p className="mt-2 font-bold">${lugar.precio}</p>

                        <button
                            onClick={() =>
                                router.push(
                                    `/reservas?lugar=${encodeURIComponent(lugar.nombre)}&servicio=${encodeURIComponent(
                                        lugar.servicio
                                    )}&precio=${lugar.precio}`
                                )
                            }

                            className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-bold"
                        >
                            Pedir reserva
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
