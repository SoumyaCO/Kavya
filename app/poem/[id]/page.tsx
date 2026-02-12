import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Share2, Bookmark, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CommentSection } from "@/components/CommentSection"
import { CategoryBadge } from "@/components/CategoryBadge"
import { MOCK_POEMS, MOCK_USERS } from "@/lib/mockData"
import { cn } from "@/lib/utils"

export default function PoemPage({ params }: { params: { id: string } }) {
    // In a real app, fetch poem by ID. Using mock data for prototype.
    const poem = MOCK_POEMS[0]

    return (
        <div className="min-h-screen pb-20">
            {/* Back Button */}
            <div className="container px-4 py-4 md:py-6 sticky top-16 z-40 bg-background/80 backdrop-blur-sm">
                <Link href="/feed">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Feed
                    </Button>
                </Link>
            </div>

            <article className="container max-w-4xl mx-auto px-4 md:px-6">
                {/* Poem Header */}
                <div className="flex flex-col items-center text-center space-y-6 mb-12">
                    <CategoryBadge category={poem.category} className="text-sm px-3 py-1" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-terracotta">
                        {poem.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={poem.author.avatar} />
                            <AvatarFallback>{poem.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="font-semibold text-lg hover:underline cursor-pointer">
                                {poem.author.name}
                            </p>
                            <p className="text-sm text-muted-foreground">{poem.timestamp} • {poem.language}</p>
                        </div>
                    </div>
                </div>

                {/* Poem Content */}
                <div className="relative mb-16 group">
                    {/* Decorative background border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-saffron-200 to-peacockBlue-200 dark:from-saffron-900/50 dark:to-peacockBlue-900/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                    <div className="relative bg-card rounded-lg shadow-sm border p-8 md:p-16 min-h-[400px] flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-linen.png')] mix-blend-multiply dark:mix-blend-screen" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-linen.png')] mix-blend-multiply dark:mix-blend-screen rotate-180" />

                        <p className="text-xl md:text-2xl lg:text-3xl leading-loose md:leading-loose text-center font-serif whitespace-pre-line italic text-foreground/90">
                            {poem.content}
                        </p>
                    </div>
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between py-6 border-y mb-12 sticky bottom-0 bg-background/95 backdrop-blur z-40 px-4 md:px-0 rounded-lg shadow-sm md:shadow-none">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-950/30">
                                <Heart className="h-6 w-6" />
                            </Button>
                            <span className="font-medium text-lg hidden md:block">{poem.likes}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/30">
                                <MessageCircle className="h-6 w-6" />
                            </Button>
                            <span className="font-medium text-lg hidden md:block">{poem.comments}</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-green-500 rounded-full">
                            <Share2 className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-saffron-500 rounded-full">
                            <Bookmark className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-16">
                    {poem.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-muted/50 hover:bg-muted font-normal text-muted-foreground">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Comments Section */}
                <div className="max-w-2xl mx-auto">
                    <CommentSection />
                </div>
            </article>

            {/* Suggested Poems */}
            <section className="bg-muted/30 py-16 mt-20">
                <div className="container px-4 md:px-6">
                    <h3 className="text-2xl font-bold font-heading mb-8 text-center">More like this</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {MOCK_POEMS.map(p => (
                            <div key={p.id} className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                                <h4 className="font-bold mb-2 line-clamp-1">{p.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 font-serif italic">{p.excerpt}</p>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={p.author.avatar} />
                                        <AvatarFallback>{p.author.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-xs font-medium">{p.author.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
