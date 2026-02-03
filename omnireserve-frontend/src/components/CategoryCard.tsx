type Props = {
  title: string
  icon: string
}

export default function CategoryCard({ title, icon }: Props) {
  return (
    <div className="category-item flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:scale-105 transition">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <span className="font-medium text-lg text-gray-700">{title}</span>
    </div>
  )
}
