import StepCard from "@/components/StepCard"

const steps = [
  {
    step: 1,
    title: "Explora lugares",
    description:
      "Busca spas, gimnasios, clínicas, restaurantes y más según tu necesidad.",
    icon: "https://cdn-icons-png.flaticon.com/512/622/622669.png",
  },
  {
    step: 2,
    title: "Reserva en segundos",
    description:
      "Elige la fecha y hora disponible que más te convenga.",
    icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
  },
  {
    step: 3,
    title: "Disfruta tu cita",
    description:
      "Asiste a tu reserva sin filas ni llamadas innecesarias.",
    icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        ¿Cómo funciona?
      </h2>

      <div className="max-w-6xl mx-auto grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
    </section>
  )
}
