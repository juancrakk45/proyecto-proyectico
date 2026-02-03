import CategoryCard from "@/components/CategoryCard"

const categories = [
  {
    title: "Spa & Bienestar",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7b_spa.svg",
  },
  {
    title: "Restaurantes",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7e_restaurant.svg",
  },
  {
    title: "Clínicas & Médicos",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7c_doctor.svg",
  },
  {
    title: "Espacios de Trabajo",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7a_workspace.svg",
  },
  {
    title: "Fitness & Gym",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7d_gym.svg",
  },
  {
    title: "Belleza & Peluquería",
    icon: "https://assets.website-files.com/62c0199e3a6a12b3226a4220/62d98a0d4c8033230b021d7f_barber.svg",
  },
]

export default function Categories() {
  return (
    <section className="mb-20 px-6">
      <h2 className="text-4xl text-center mb-12 font-bold text-gray-800">
        Explora por Categoría
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-7xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.title}
            title={cat.title}
            icon={cat.icon}
          />
        ))}
      </div>
    </section>
  )
}
