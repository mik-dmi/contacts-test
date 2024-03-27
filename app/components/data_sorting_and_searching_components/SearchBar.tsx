import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


export default function SearchBar() {
  return (
    <Command>
  <CommandInput placeholder="Search Here..." />
  <CommandList>
  
    </CommandList>

</Command>
  )
}
