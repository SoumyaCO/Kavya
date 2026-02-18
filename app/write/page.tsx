"use client"

import { useState } from "react"
import { Image as ImageIcon, Hash, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from "@/components/ui/dropdown-menu"
import { WritingType } from "@/types/types"

export default function WritePage() {
  const [writingType, setWritingType] = useState<WritingType>("blog")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState<string>("")

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentTag.trim()) {
      e.preventDefault()
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()])
      }
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex justify-between gap-4">
          <h1 className="text-3xl font-bold font-heading">Write a </h1>
          <WritingTypeSelector setWritingState={setWritingType} writingType={writingType} />
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Save Draft</Button>
          <Button>Publish</Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Cover Image Upload (Mock) */}
        <div className="h-40 md:h-56 bg-muted/40 rounded-lg border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/60 transition-colors">
          <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
          <span className="text-sm text-muted-foreground font-medium">Add Cover Image (Optional)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="urdu">Urdu</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hinglish">Hinglish</SelectItem>
            </SelectContent>
          </Select>

          {writingType == 'poem' && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ghazal">Ghazal</SelectItem>
                <SelectItem value="nazm">Nazm</SelectItem>
                <SelectItem value="shayari">Shayari</SelectItem>
                <SelectItem value="haiku">Haiku</SelectItem>
                <SelectItem value="freeverse">Free Verse</SelectItem>
              </SelectContent>
            </Select>
          )
          }
        </div>

        <Input
          placeholder="Title"
          className="text-2xl md:text-3xl font-bold font-heading border-none px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50 h-auto py-2"
        />

        <Textarea
          placeholder="Start writing your masterpiece..."
          className="min-h-[400px] text-lg leading-relaxed font-serif resize-none border-none px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30 p-0"
        />

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className="px-2 py-1 gap-1">
                #{tag}
                <button onClick={() => removeTag(tag)} className="hover:text-destructive ml-1">×</button>
              </Badge>
            ))}
          </div>
          <div className="relative">
            <Hash className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Add tags (press Enter)"
              className="pl-9"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyDown={handleAddTag}
            />
          </div>
        </div>
      </div>
    </div >
  )

  function WritingTypeSelector(
    { setWritingState, writingType }: { setWritingState: React.Dispatch<React.SetStateAction<WritingType>>, writingType: WritingType }
  ) {
    const options: { label: string; value: WritingType }[] = [
      { label: "Blog", value: "blog" },
      { label: "Article", value: "article" },
      { label: "Poem", value: "poem" },
    ]
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{writingType.toUpperCase()} <ChevronDown /></Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setWritingState(option.value)}
            >
              {option.label.toUpperCase()}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
}
