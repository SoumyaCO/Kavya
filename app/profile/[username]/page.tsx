import { MapPin, Link as LinkIcon, Calendar, Edit3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PoemCard } from "@/components/PoemCard"
import { MOCK_USERS, MOCK_POEMS } from "@/lib/mockData"

export default function ProfilePage({ params }: { params: { username: string } }) {
    const user = MOCK_USERS[0] // Mock user

    return (
        <div className="min-h-screen">
            {/* Cover Image */}
            <div className="h-48 md:h-64 w-full bg-gradient-to-r from-saffron-400 to-terracotta relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            </div>

            <div className="container px-4 md:px-6 relative">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-6 items-start -mt-12 md:-mt-16 mb-8">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-lg">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 pt-14 md:pt-16 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold font-heading">{user.name}</h1>
                                <p className="text-muted-foreground">{user.username}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <Edit3 className="mr-2 h-4 w-4" />
                                    Edit Profile
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Settings className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <p className="max-w-xl text-sm md:text-base leading-relaxed">{user.bio}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>Mumbai, India</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <LinkIcon className="h-4 w-4" />
                                <a href="#" className="hover:text-primary hover:underline">kavya.com/aarya</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Joined January 2024</span>
                            </div>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-foreground">{user.following}</span>
                                <span className="text-muted-foreground">Following</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-foreground">{user.followers}</span>
                                <span className="text-muted-foreground">Followers</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-foreground">{user.posts}</span>
                                <span className="text-muted-foreground">Posts</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs */}
                <Tabs defaultValue="posts" className="w-full">
                    <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                        <TabsTrigger
                            value="posts"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                        >
                            Poems
                        </TabsTrigger>
                        <TabsTrigger
                            value="drafts"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                        >
                            Drafts
                        </TabsTrigger>
                        <TabsTrigger
                            value="saved"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                        >
                            Saved
                        </TabsTrigger>
                        <TabsTrigger
                            value="about"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                        >
                            About
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="posts" className="py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_POEMS.map((poem) => (
                                <PoemCard key={poem.id} poem={poem} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="drafts" className="py-12 text-center text-muted-foreground">
                        <p>Only you can see your drafts.</p>
                    </TabsContent>

                    <TabsContent value="saved" className="py-12 text-center text-muted-foreground">
                        <p>No saved poems yet.</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
