export default function Hero() {
  return (
    <header className="py-24 text-center bg-gradient-to-br from-gray-50 to-white">
      <h1 className="text-6xl mb-4 font-extrabold text-gray-900">
        Tu Próxima Experiencia <span className="text-amber-500">Empieza Aquí</span>.
      </h1>

      <p className="text-gray-600 mb-10 text-xl max-w-3xl mx-auto">
        Descubre y reserva en los lugares más exclusivos de tu ciudad,
        desde spas de lujo hasta restaurantes gourmet.
      </p>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-full p-3 flex border border-gray-100">
        <input
          type="text"
          placeholder="¿Qué buscas? (Ej. Spa, Cena, Consulta Médica...)"
          className="flex-grow px-6 text-lg outline-none bg-transparent"
        />
        <button className="bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition shadow-lg">
          Buscar
        </button>
      </div>
    </header>
  )
}
