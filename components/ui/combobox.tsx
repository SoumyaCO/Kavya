'use client'
import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

type Props = {
    items: string[]
    placeholder?: string
    emptyMessage?: string
    onSearch?: (value: string) => void
    onSelect?: (value: string) => void
    loading?: boolean
}

export function Combobox({ items, placeholder = 'Search...', emptyMessage = 'No results found.', onSearch, onSelect, loading }: Props) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between font-normal"
                >
                    {selected || placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder={placeholder}
                        onValueChange={onSearch}
                    />
                    <CommandList>
                        <CommandEmpty>
                            {loading ? 'Searching...' : emptyMessage}
                        </CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem
                                    key={item}
                                    value={item}
                                    onSelect={() => {
                                        setSelected(item)
                                        onSelect?.(item)
                                        setOpen(false)
                                    }}
                                >
                                    <Check className={cn("mr-2 h-4 w-4", selected === item ? "opacity-100" : "opacity-0")} />
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}