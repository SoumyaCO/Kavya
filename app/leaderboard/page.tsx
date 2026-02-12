import { Trophy, Medal, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_USERS } from "@/lib/mockData"

export default function LeaderboardPage() {
    return (
        <div className="container py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-heading mb-4">Top Contributors</h1>
                <p className="text-muted-foreground">Celebrating the voices that move us.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* 2nd Place */}
                <Card className="md:mt-12 order-2 md:order-1 border-saffron-200 bg-gradient-to-b from-saffron-50 to-background">
                    <CardHeader className="text-center">
                        <Medal className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                        <CardTitle>2nd Place</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-4 border-gray-200 mb-4">
                            <AvatarImage src={MOCK_USERS[1].avatar} />
                            <AvatarFallback>{MOCK_USERS[1].name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-lg">{MOCK_USERS[1].name}</h3>
                        <p className="text-sm text-muted-foreground">{MOCK_USERS[1].posts} Posts</p>
                    </CardContent>
                </Card>

                {/* 1st Place */}
                <Card className="order-1 md:order-2 border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg scale-105 z-10">
                    <CardHeader className="text-center">
                        <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
                        <CardTitle className="text-primary">1st Place</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Avatar className="h-24 w-24 border-4 border-yellow-500 mb-4">
                            <AvatarImage src={MOCK_USERS[0].avatar} />
                            <AvatarFallback>{MOCK_USERS[0].name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-xl">{MOCK_USERS[0].name}</h3>
                        <p className="text-sm text-muted-foreground font-semibold">{MOCK_USERS[0].posts + 20} Posts</p>
                    </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="md:mt-12 order-3 border-terracotta-200 bg-gradient-to-b from-terracotta-50 to-background">
                    <CardHeader className="text-center">
                        <Award className="h-10 w-10 mx-auto text-orange-400 mb-2" />
                        <CardTitle>3rd Place</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-4 border-orange-200 mb-4">
                            <AvatarImage src={MOCK_USERS[2].avatar} />
                            <AvatarFallback>{MOCK_USERS[2].name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-lg">{MOCK_USERS[2].name}</h3>
                        <p className="text-sm text-muted-foreground">{MOCK_USERS[2].posts - 5} Posts</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
