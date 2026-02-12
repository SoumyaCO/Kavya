"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CategoryBadge } from "@/components/CategoryBadge"
import { Poem } from "@/lib/mockData"
import { cn } from "@/lib/utils"

interface PoemCardProps {
    poem: Poem
    className?: string
}

export function PoemCard({ poem, className }: PoemCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={className}
        >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm dark:bg-card/80">
                <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                        src={poem.image}
                        alt={poem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                        <CategoryBadge category={poem.category} />
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                        <h3 className="font-bold text-lg line-clamp-1">{poem.title}</h3>
                        <p className="text-xs opacity-90">{poem.timestamp}</p>
                    </div>
                </div>

                <CardContent className="pt-6 pb-2">
                    <Link href={`/poem/${poem.id}`}>
                        <p className="font-serif text-lg leading-relaxed text-foreground/90 line-clamp-4 whitespace-pre-line italic">
                            {poem.content}
                        </p>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                            <span key={tag} className="text-xs text-saffron-600 dark:text-saffron-400 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t bg-muted/20 p-4">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-white/20">
                            <AvatarImage src={poem.author.avatar} alt={poem.author.name} />
                            <AvatarFallback>{poem.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium leading-none">{poem.author.name}</span>
                            <span className="text-xs text-muted-foreground">{poem.author.username}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-xs text-muted-foreground mr-1">{poem.likes}</span>

                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-blue-500">
                            <MessageCircle className="h-4 w-4" />
                            <span className="sr-only">Comment</span>
                        </Button>

                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-green-500">
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share</span>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
