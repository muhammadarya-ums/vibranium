import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface PillarCardProps {
  title: string
  description: string
  icon?: LucideIcon
  href: string
  imageSrc?: string
  bgColor?: string
}

export function PillarCard({
  title,
  description,
  icon: Icon,
  href,
  imageSrc,
  bgColor = 'bg-[#C29C6D]',
}: PillarCardProps) {
  return (
    <Link href={href}>
      <div className={`${bgColor} rounded-2xl p-8 h-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
        {/* Header with white background */}
        <div className="bg-white rounded-xl p-6 mb-6 text-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="h-32 w-full object-contain mb-4"
            />
          ) : Icon ? (
            <Icon className="h-16 w-16 mx-auto text-[#1A2B3C] mb-4" />
          ) : null}
          <h3 className="text-xl font-bold text-[#1A2B3C] mb-2">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-white text-center font-medium">
          {description}
        </p>
      </div>
    </Link>
  )
}
