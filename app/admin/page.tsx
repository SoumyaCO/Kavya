import {
    Users, FileText, CheckCircle, Eye, MoreHorizontal, XCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminPage() {
    return (
        <div className="flex min-h-screen bg-muted/40">
            {/* Sidebar (Simple for prototype) */}
            <aside className="hidden w-64 flex-col border-r bg-background lg:flex">
                <div className="flex h-14 items-center border-b px-6">
                    <span className="font-bold text-lg text-primary">Kavya Admin</span>
                </div>
                <nav className="flex-1 overflow-auto py-4 px-2 space-y-1">
                    <Button variant="secondary" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Users
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approvals <Badge className="ml-auto bg-saffron text-white">4</Badge>
                    </Button>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-background px-6 lg:h-[60px]">
                    <h1 className="text-lg font-semibold">Overview</h1>
                </header>

                <main className="flex-1 p-4 md:p-6 space-y-6">
                    {/* Stats Cards */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                                <FileText className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">+201 since last hour</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Views</CardTitle>
                                <Eye className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">45.2k</div>
                                <p className="text-xs text-muted-foreground">+12% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">4</div>
                                <p className="text-xs text-muted-foreground">Requires attention</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Approvals Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Posts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">ID</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Author</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">#PO-231</TableCell>
                                        <TableCell>Whispers of the Wind</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span>User 1</span>
                                            </div>
                                        </TableCell>
                                        <TableCell><Badge variant="outline">Haiku</Badge></TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">Approve</Button>
                                                <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">Reject</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">#PO-232</TableCell>
                                        <TableCell>The Lost Letter</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarFallback>A</AvatarFallback>
                                                </Avatar>
                                                <span>User 2</span>
                                            </div>
                                        </TableCell>
                                        <TableCell><Badge variant="outline">Free Verse</Badge></TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">Approve</Button>
                                                <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">Reject</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}
