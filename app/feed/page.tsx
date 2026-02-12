import Link from "next/link"
import { TrendingUp, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PoemCard } from "@/components/PoemCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MOCK_POEMS, MOCK_USERS, TRENDING_TAGS } from "@/lib/mockData"

export default function FeedPage() {
    return (
        <div className="container px-4 md:px-6 py-6 md:py-10">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* Main Feed */}
                <div className="flex-1 w-full max-w-2xl mx-auto space-y-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold font-heading">Latest Poems</h1>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="rounded-full">Trending</Button>
                            <Button variant="ghost" size="sm" className="rounded-full">Newest</Button>
                        </div>
                    </div>

                    {MOCK_POEMS.map((poem, i) => (
                        <PoemCard key={`feed-${i}`} poem={poem} className="mb-8" />
                    ))}

                    {/* Duplicate for demo scroll */}
                    {MOCK_POEMS.map((poem, i) => (
                        <PoemCard key={`feed-dup-${i}`} poem={poem} className="mb-8" />
                    ))}

                    <div className="flex justify-center py-8">
                        <Button variant="outline" className="min-w-[200px]">Load More</Button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="hidden md:block w-72 lg:w-80 shrink-0 space-y-8">
                    {/* Trending Tags */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                            <TrendingUp className="h-5 w-5" />
                            <span>Trending Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {TRENDING_TAGS.map((tag) => (
                                <Link key={tag} href={`/feed?tag=${tag.replace('#', '')}`}>
                                    <span className="inline-block bg-muted hover:bg-muted/80 px-3 py-1 rounded-full text-sm font-medium transition-colors">
                                        {tag}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Top Poets */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                            <Users className="h-5 w-5" />
                            <span>Top Poets</span>
                        </div>
                        <div className="space-y-4">
                            {MOCK_USERS.map((user) => (
                                <div key={user.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-9 w-9 border">
                                            <AvatarImage src={user.avatar} />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium line-clamp-1">{user.name}</span>
                                            <span className="text-xs text-muted-foreground">{user.username}</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" className="h-7 text-xs px-2">
                                        Follow
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
