import Image from "next/image";
import DataSortingAndSearchComponents from "./components/data_sorting_and_searching_components/DataSortingAndSearchComponents";
import { Table } from "lucide-react";
import ContactsTable from "./components/ContactsTable";

export default function Home() {
  return (
    <main className="flex-col  max-w-[1200px] mx-auto my-4">
      <DataSortingAndSearchComponents />
      <ContactsTable/>


      
    </main>
  );
}
