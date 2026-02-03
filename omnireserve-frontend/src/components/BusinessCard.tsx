type Props = {
  name: string
  category: string
  image: string
  rating: number
}

export default function BusinessCard({
  name,
  category,
  image,
  rating,
}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
      <img src={image} alt={name} className="h-56 w-full object-cover" />

      <div className="p-5">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-xl font-semibold text-gray-800 mt-1">{name}</h3>

        <div className="mt-3 flex items-center text-amber-500">
          {"★".repeat(Math.round(rating))}
          <span className="ml-2 text-gray-600 text-sm">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  )
}
