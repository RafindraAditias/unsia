"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import MenuTable from "@/app/components/dashboard/MenuTable";

// Define the MenuItem type
export type MenuItem = {
  id: number;
  name: string;
  application: string;
  menu: string;
  parent: string;
  path: string;
  role: string;
};

// Sample data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "SIPPM",
    application: "SIPPM",
    menu: "Dashboard",
    parent: "-",
    path: "/dashboard",
    role: "Administrator",
  },
  {
    id: 2,
    name: "SIPPM",
    application: "SIPPM",
    menu: "Proposal",
    parent: "-",
    path: "/dashboard",
    role: "Ketua Yayasan",
  },
  {
    id: 3,
    name: "SIPPM",
    application: "SIPPM",
    menu: "Penelitian",
    parent: "-",
    path: "/dashboard",
    role: "Anggota",
  },
  {
    id: 4,
    name: "Marketing",
    application: "Marketing",
    menu: "Dashboard",
    parent: "Proposal_id",
    path: "/dashboard",
    role: "Tutor",
  },
  {
    id: 5,
    name: "Marketing",
    application: "Marketing",
    menu: "Refferai",
    parent: "Proposal_id",
    path: "/dashboard",
    role: "Warak",
  },
  {
    id: 6,
    name: "Tracer Study",
    application: "Tracer Study",
    menu: "Dashboard",
    parent: "Proposal_id",
    path: "/dashboard",
    role: "Mahasiswa",
  },
  {
    id: 7,
    name: "Tracer Study",
    application: "Tracer Study",
    menu: "Quisoner",
    parent: "Proposal_id",
    path: "/dashboard",
    role: "Kaprodi",
  },
  {
    id: 8,
    name: "Tracer Study",
    application: "Tracer Study",
    menu: "Report",
    parent: "-",
    path: "/dashboard",
    role: "LPPM",
  },
];

export default function MenuPage() {
  // State for filtering, searching and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [applicationFilter, setApplicationFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<MenuItem[]>(menuItems);
  const pageSize = 5;

  // Filter data based on application and search query
  const filteredData = data.filter((item) => {
    // Apply application filter
    if (applicationFilter !== "all" && item.application !== applicationFilter) {
      return false;
    }

    // Apply search filter
    if (
      searchQuery &&
      !Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    ) {
      return false;
    }

    return true;
  });

  // Calculate pagination info
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Create array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-semibold">Menu</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            <span className="mr-2">+</span> Add Menu
          </Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" /> Trash
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select
            value={applicationFilter}
            onValueChange={setApplicationFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Application" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="SIPPM">SIPPM</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Tracer Study">Tracer Study</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="search"
            placeholder="Search..."
            className="w-[200px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <MenuTable data={paginatedData} />
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-sm text-gray-500">
            {totalItems > 0
              ? `${startIndex + 1}-${endIndex} of ${totalItems}`
              : "0 of 0"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          {pageNumbers.map((pageNum) => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              className={currentPage === pageNum ? "bg-blue-600" : ""}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage >= totalPages - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
