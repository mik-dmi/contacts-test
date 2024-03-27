import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function ContactsTable() {
  return (
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Country</TableHead>
      <TableHead>Last Update</TableHead>
      <TableHead className="">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {[...Array(10)].map((_, index) => (
    <TableRow key={index} className="h-[4rem] ">
      <TableCell className="font-medium">Name {index + 1}</TableCell>
      <TableCell>+1 555 555 555{index}</TableCell>
      <TableCell>Country {index + 1}</TableCell>
      <TableCell className="">Month {index + 1} 2024</TableCell>
      <TableCell className="flex flex-col   ">
        <div className="flex-col  items-end justify-end">
        <div className="w-fit self-end">Twitter</div>
        <div className="w-fit">Email</div>
        </div>
      </TableCell>
    </TableRow>
  ))}

  </TableBody>
</Table>

  )
}
