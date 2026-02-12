import Link from "next/link"
import { ArrowLeft, Share2, Bookmark, CalendarDays, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MOCK_BLOGS } from "@/lib/mockData"
import { notFound } from "next/navigation"

import { use } from "react"

export default function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const blog = MOCK_BLOGS.find((b) => b.id === id)

    if (!blog) {
        notFound()
    }

    return (
        <div className="min-h-screen py-8 md:py-12">
            <div className="container max-w-3xl px-4 md:px-6">
                <Link href="/blog">
                    <Button variant="ghost" size="sm" className="mb-6 -ml-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blogs
                    </Button>
                </Link>

                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge>{blog.category}</Badge>
                        <span className="flex items-center text-sm text-muted-foreground gap-1">
                            <Clock className="h-3 w-3" /> {blog.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-between mb-8 pb-8 border-b">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={blog.author.avatar} />
                                <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-sm">{blog.author.name}</p>
                                <p className="flex items-center text-xs text-muted-foreground gap-1">
                                    <CalendarDays className="h-3 w-3" /> Published on {blog.timestamp}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Bookmark className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <p className="lead text-xl text-muted-foreground mb-8">
                        {blog.excerpt}
                    </p>

                    {/* Render Content - In a real app this would be rich text/MDX */}
                    <div className="mb-8">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-auto rounded-lg object-cover max-h-[400px]"
                        />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />

                    <p className="mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <blockquote className="border-l-4 border-primary pl-4 italic my-8 text-xl font-serif">
                        "Poetry is the rhythmical creation of beauty in words."
                    </blockquote>

                    <h2 className="text-2xl font-bold font-heading mt-8 mb-4">Conclusion</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>

                </article>
            </div>
        </div>
    )
}
