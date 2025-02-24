import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

const categories = [
  {
    name: "Company",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O7Om85JiI9urQRIRHYjEfYCW7EBMcV.png",
  },
  {
    name: "Startup",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O7Om85JiI9urQRIRHYjEfYCW7EBMcV.png",
  },
  {
    name: "Enterprise",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O7Om85JiI9urQRIRHYjEfYCW7EBMcV.png",
  },
  {
    name: "Venture",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O7Om85JiI9urQRIRHYjEfYCW7EBMcV.png",
  },
]

const CategoryItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2 px-8">
    <div className="relative w-6 h-6">
      <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
    </div>
    <span className="text-gray-700 text-lg font-medium whitespace-nowrap">{name}</span>
  </div>
)

const SkeletonItem = () => (
  <div className="flex items-center gap-2 px-8">
    <Skeleton className="w-6 h-6 rounded" />
    <Skeleton className="w-24 h-6 rounded" />
  </div>
)

export default function InfiniteScroll() {
  return (
    <div className="w-full bg-gray-50/50 py-8 overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set */}
        <div className="flex items-center gap-12 animate-scroll">
          {categories.map((category, i) => (
            <CategoryItem key={`first-${i}`} {...category} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 animate-scroll">
          {categories.map((category, i) => (
            <CategoryItem key={`second-${i}`} {...category} />
          ))}
        </div>
      </div>
    </div>
  )
}

