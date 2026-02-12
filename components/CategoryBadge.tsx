import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type CategoryType = "Ghazal" | "Nazm" | "Shayari" | "Haiku" | "Free Verse" | string

interface CategoryBadgeProps {
    category: CategoryType
    className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
    const getBadgeColor = (cat: CategoryType) => {
        switch (cat.toLowerCase()) {
            case "ghazal":
                return "bg-saffron text-white hover:bg-saffron-600 border-saffron-600"
            case "nazm":
                return "bg-peacockBlue text-white hover:bg-peacockBlue/90 border-peacockBlue"
            case "shayari":
                return "bg-terracotta text-white hover:bg-terracotta/90 border-terracotta"
            case "haiku":
                return "bg-indiaGreen text-white hover:bg-indiaGreen-600 border-indiaGreen-600"
            default:
                return "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }
    }

    return (
        <Badge
            variant="outline"
            className={cn("whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-semibold shadow-sm", getBadgeColor(category), className)}
        >
            {category}
        </Badge>
    )
}
