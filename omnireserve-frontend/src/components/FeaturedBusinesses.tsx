import BusinessCard from "@/components/BusinessCard"

const businesses = [
  {
    name: "Zen Spa Center",
    category: "Spa & Bienestar",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    rating: 4.8,
  },
  {
    name: "FitLife Gym",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001e3",
    rating: 4.6,
  },
  {
    name: "DentalCare Plus",
    category: "Clínica",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    rating: 4.7,
  },
]

export default function FeaturedBusinesses() {
  return (
    <section className="px-6 mb-24">
      <h2 className="text-4xl text-center mb-12 font-bold text-gray-800">
        Negocios Destacados
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {businesses.map((biz) => (
          <BusinessCard key={biz.name} {...biz} />
        ))}
      </div>
    </section>
  )
}
