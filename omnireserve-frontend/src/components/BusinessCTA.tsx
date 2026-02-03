export default function BusinessCTA() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            ¿Tienes un negocio?
            <br />
            <span className="text-amber-400">
              Empieza a recibir reservas hoy
            </span>
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Gestiona citas, horarios y clientes desde una sola plataforma.
            Aumenta tu visibilidad y optimiza tu tiempo.
          </p>

          <button className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-300 transition">
            Registrar mi negocio
          </button>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e1"
            alt="Business dashboard"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}
