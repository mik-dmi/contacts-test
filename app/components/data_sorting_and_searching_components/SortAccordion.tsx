import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function SortAccordion() {
  const countries = ["Date(asc)", "Date(desc)", "Name(asc)", "Name(desc)"];
  return (
    <Select  >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sorting" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country, index) => (
          <div key={`div${index}`} className="flex">
         
          <SelectItem key={`selection${index}`} value="light">
            
            {country}
          </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  )
}
