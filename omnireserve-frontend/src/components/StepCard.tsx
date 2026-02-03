type Props = {
  step: number
  title: string
  description: string
  icon: string
}

export default function StepCard({
  step,
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="text-center px-6">
      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <span className="absolute -top-3 -right-3 bg-black text-white text-sm w-7 h-7 rounded-full flex items-center justify-center">
          {step}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">{description}</p>
    </div>
  )
}
