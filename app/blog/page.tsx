import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MOCK_BLOGS } from "@/lib/mockData"
import { CalendarDays, Clock } from "lucide-react"

export default function BlogListingPage() {
    return (
        <div className="container py-10">
            <div className="flex flex-col items-center text-center mb-12 space-y-4">
                <h1 className="text-4xl font-bold font-heading">Kavya Blog</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Explore insights on poetry, history, and the art of writing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_BLOGS.map((blog) => (
                    <Link href={`/blog/${blog.id}`} key={blog.id} className="group">
                        <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="hover:bg-secondary/80">
                                        {blog.category}
                                    </Badge>
                                    <span className="flex items-center text-xs text-muted-foreground gap-1">
                                        <Clock className="h-3 w-3" /> {blog.readTime}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h2>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3 text-sm">
                                    {blog.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={blog.author.avatar} />
                                        <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-xs font-medium">{blog.author.name}</span>
                                </div>
                                <span className="flex items-center text-xs text-muted-foreground gap-1">
                                    <CalendarDays className="h-3 w-3" /> {blog.timestamp}
                                </span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
