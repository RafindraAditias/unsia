"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, FileInput, FileOutput } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Header } from "@/app/components/dashboard/Header";
import Footer from "@/app/components/Homepage/Footer";
import MenuTable from "@/app/components/dashboard/RoleTable";
import Link from "next/link";

// Define the MenuItem type
export type MenuItem = {
  id: number;
  name: string;
  application: string;
  description: string;
  color: string;
};

// Sample data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Administrator",
    description: "Lorem Ipsum",
    application: "Administrator",
    color: "#185b24",
  },
  {
    id: 2,
    name: "Perguruan Tinggi",
    description: "Lorem Ipsum",
    application: "Perguruan Tinggi",
    color: "#a14835",
  },
  {
    id: 3,
    name: "Ketua Yayasan",
    description: "Lorem Ipsum",
    application: "Ketua Yayasan",
    color: "#ff2f8c",
  },
  {
    id: 4,
    name: "Rektor",
    description: "Lorem Ipsum",
    application: "Rektor",
    color: "#27dbff",
  },
  {
    id: 5,
    name: "Kepala",
    description: "Lorem Ipsum",
    application: "Kepala",
    color: "#6f372b",
  },
  {
    id: 6,
    name: "Anggota",
    description: "Lorem Ipsum",
    application: "Anggota",
    color: "#489cf0",
  },
  {
    id: 7,
    name: "Dekan",
    description: "Lorem Ipsum",
    application: "Dekan",
    color: "#92ff57",
  },
  {
    id: 8,
    name: "Dosen",
    description: "Lorem Ipsum",
    application: "Dosen",
    color: "#f06548",
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
          value.toLowerCase().includes(searchQuery.toLowerCase())
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
      <Header />
      <div className="px-6 py-4 border-b border-[#e9ebec] flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#495057]">Roles</h1>
        <div className="flex items-center gap-2 text-sm text-[#878a99]">
          <Link href="#" className="text-[#495057]">
            Roles
          </Link>
          <span>/</span>
          <span className="text-[#878a99]">View</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            <span className="mr-2">+</span> Add Menu
          </Button>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            <FileInput className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            <FileOutput className="h-4 w-4 mr-2 " /> Import
          </Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" /> Trash
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="name">
            <SelectTrigger className="w-[220px] text-sm text-[#495057] border-[#ced4da]">
              <SelectValue placeholder="Short By Name Apling" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Short By Name Application</SelectItem>
              <SelectItem value="Administrator">Administrator</SelectItem>
              <SelectItem value="Perguruan Tinggi">Perguruan Tinggi</SelectItem>
              <SelectItem value="Ketua Yayasan">Ketua Yayasan</SelectItem>
              <SelectItem value="Rektor">Rektor</SelectItem>
              <SelectItem value="Kepala">Kepala</SelectItem>
              <SelectItem value="Anggota">Anggota</SelectItem>
              <SelectItem value="Dekan">Dekan</SelectItem>
              <SelectItem value="Dosen">Dosen</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="border-[#ced4da] text-sm text-[#495057] w-56 pr-8"
            />
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#878a99]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
      <Footer />
    </div>
  );
}
