import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function FilterByCountryAccordion() {
  const countries = ["Portugal", "Spain", "Italy", "Sweden"];

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select By Country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country, index) => (
          <div key={`div${index}`} className="flex">
          <Checkbox key={`checkbox${index}`} />
          <SelectItem key={`selection${index}`} value="light">
            
            {country}
          </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
  
}
     
