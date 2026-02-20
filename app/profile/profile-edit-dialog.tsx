'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Combobox } from "@/components/ui/combobox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { editProfileInfo } from "./[username]/actions"
import { useState } from "react"

const SOCIAL_PLATFORMS = ['LinkedIn', 'Twitter', 'Instagram', 'GitHub', 'YouTube', 'Website']

type Social = {
    platform: string
    url: string
}

export function DialogDemo({ children }: { children: React.ReactNode }) {
    const [socials, setSocials] = useState<Social[]>([{ platform: 'LinkedIn', url: '' }])
    const [locationResults, setLocationResults] = useState<string[]>([])
    const [selectedLocation, setSelectedLocation] = useState('')
    const [locationLoading, setLocationLoading] = useState(false)

    const addSocial = () => {
        const usedPlatforms = socials.map(s => s.platform)
        const nextPlatform = SOCIAL_PLATFORMS.find(p => !usedPlatforms.includes(p)) ?? 'Website'
        setSocials([...socials, { platform: nextPlatform, url: '' }])
    }

    const updateSocial = (index: number, field: keyof Social, value: string) => {
        const updated = [...socials]
        updated[index][field] = value
        setSocials(updated)
    }

    const removeSocial = (index: number) => {
        setSocials(socials.filter((_, i) => i !== index))
    }

    const handleLocationSearch = async (value: string) => {
        if (value.length < 3) return setLocationResults([])
        setLocationLoading(true)
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=json&limit=5&addressdetails=1`,
                { headers: { 'User-Agent': 'kavya-app' } }
            )
            const data = await res.json()
            const formatted = data.map((place: any) => {
                const { city, town, village, state, country } = place.address
                const locality = city ?? town ?? village
                return [locality, state, country].filter(Boolean).join(', ')
            })
            setLocationResults([...new Set(formatted)] as string[])
        } catch (e) {
            console.error(e)
        } finally {
            setLocationLoading(false)
        }
    }

    return (
        <Dialog>
            <form action={(formData) => {
                formData.append('socials', JSON.stringify(socials))
                formData.append('location', selectedLocation)
                editProfileInfo(formData)
            }}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 overflow-y-auto max-h-[60vh] px-4 pr-1">
                        <FieldGroup>
                            <Field>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" name="firstName" placeholder="John" />
                            </Field>

                            <Field>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" name="lastName" placeholder="Doe" />
                            </Field>

                            <Field>
                                <Label htmlFor="bio">Bio</Label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={3}
                                    placeholder="Tell something about yourself..."
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </Field>

                            <Field>
                                <Label>Location</Label>
                                <Combobox
                                    items={locationResults}
                                    placeholder="Mumbai, India..."
                                    loading={locationLoading}
                                    onSearch={handleLocationSearch}
                                    onSelect={(value) => setSelectedLocation(value)}
                                />
                            </Field>
                        </FieldGroup>

                        <div className="space-y-2">
                            <Label>Social Links</Label>
                            {socials.map((social, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="w-32 shrink-0">
                                                {social.platform}
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {SOCIAL_PLATFORMS.map((platform) => (
                                                <DropdownMenuItem
                                                    key={platform}
                                                    onClick={() => updateSocial(index, 'platform', platform)}
                                                >
                                                    {platform}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <Input
                                        placeholder="https://..."
                                        value={social.url}
                                        onChange={(e) => updateSocial(index, 'url', e.target.value)}
                                    />

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeSocial(index)}
                                    >
                                        ✕
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={addSocial}>
                                + Add Social
                            </Button>
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}