"use client"

import { useState } from "react"
import { Send, ThumbsUp, MessageSquare, CornerDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Comment, MOCK_USERS } from "@/lib/mockData"

const MOCK_COMMENTS: Comment[] = [
    {
        id: "c1",
        user: MOCK_USERS[0],
        content: "This is absolutely breathtaking! The imagery is so vivid.",
        timestamp: "2 hours ago",
        likes: 12,
    },
    {
        id: "c2",
        user: MOCK_USERS[2],
        content: "The way you describe the silence... chills.",
        timestamp: "1 hour ago",
        likes: 8,
        replies: [
            {
                id: "c2-r1",
                user: MOCK_USERS[1],
                content: "Thank you so much! Glad it resonated with you.",
                timestamp: "30 mins ago",
                likes: 3,
            }
        ]
    },
]

export function CommentSection() {
    const [comments, setComments] = useState(MOCK_COMMENTS)
    const [newComment, setNewComment] = useState("")

    const handlePostComment = () => {
        if (!newComment.trim()) return
        const comment: Comment = {
            id: `c-${Date.now()}`,
            user: MOCK_USERS[0], // Current user mock
            content: newComment,
            timestamp: "Just now",
            likes: 0,
        }
        setComments([comment, ...comments])
        setNewComment("")
    }

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading">Comments ({comments.length})</h3>

            <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={MOCK_USERS[0].avatar} />
                    <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                    <Textarea
                        placeholder="Share your thoughts..."
                        className="min-h-[100px] resize-none focus-visible:ring-saffron"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="flex justify-end">
                        <Button size="sm" onClick={handlePostComment} disabled={!newComment.trim()}>
                            Post Comment
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <Separator />

            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4 group">
                        <Avatar className="h-10 w-10 border border-border">
                            <AvatarImage src={comment.user.avatar} />
                            <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-semibold text-sm">{comment.user.name}</span>
                                    <span className="text-xs text-muted-foreground ml-2">{comment.timestamp}</span>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed">{comment.content}</p>

                            <div className="flex items-center gap-4 pt-1">
                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                                    <ThumbsUp className="h-3 w-3" />
                                    <span>{comment.likes}</span>
                                </button>
                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                                    <MessageSquare className="h-3 w-3" />
                                    <span>Reply</span>
                                </button>
                            </div>

                            {comment.replies && (
                                <div className="ml-4 mt-4 border-l-2 pl-4 space-y-4">
                                    {comment.replies.map(reply => (
                                        <div key={reply.id} className="flex gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={reply.user.avatar} />
                                                <AvatarFallback>{reply.user.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-xs">{reply.user.name}</span>
                                                    <span className="text-[10px] text-muted-foreground">{reply.timestamp}</span>
                                                </div>
                                                <p className="text-xs">{reply.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
