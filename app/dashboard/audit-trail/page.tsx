"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput, Search, Calendar } from "lucide-react";
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
import MenuTable from "@/app/components/dashboard/AuditTable";

// Define the MenuItem type
export type MenuItem = {
  id: number;
  application: string;
  createUser: string;
  timeLogin: string;
  timeLogout: string;
  activity: string;
  action: string;
};

// Sample data

const menuItems: MenuItem[] = [
  {
    id: 1,

    application: "SPPM",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    id: 2,

    application: "SPPM",
    createUser: "Proposal",
    timeLogin: "Proposal",
    timeLogout: "Proposal",
    activity: "Proposal",
    action: "View",
  },
  {
    id: 3,

    application: "SPPM",
    createUser: "Penelitian",
    timeLogin: "Penelitian",
    timeLogout: "Penelitian",
    activity: "Penelitian",
    action: "View",
  },
  {
    id: 4,

    application: "Marketing",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    id: 5,

    application: "Marketing",
    createUser: "Referral",
    timeLogin: "Referral",
    timeLogout: "Referral",
    activity: "Referral",
    action: "View",
  },
  {
    id: 6,

    application: "Tracer Study",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    id: 7,

    application: "Tracer Study",
    createUser: "Quizoner",
    timeLogin: "Quizoner",
    timeLogout: "Quizoner",
    activity: "Quizoner",
    action: "View",
  },
  {
    id: 8,

    application: "Tracer Study",
    createUser: "Report",
    timeLogin: "Report",
    timeLogout: "Report",
    activity: "Report",
    action: "View",
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
  // Filter data based on application and search query
  const filteredData = data.filter((item) => {
    // Apply application filter
    if (applicationFilter !== "all" && item.application !== applicationFilter) {
      return false;
    }

    // Apply search filter
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
          <span className="text-[#878a99]">Audit Trail</span>
          <span>/</span>
          <span className="text-[#878a99]">View</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            <FileInput className="h-4 w-4 mr-2" /> Export
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative w-60">
          <Calendar className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="p-6">
        <Header />
        <div className="px-6 py-4 border-b border-[#e9ebec] flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#495057]">Roles</h1>
          <div className="flex items-center gap-2 text-sm text-[#878a99]">
            <span className="text-[#878a99]">Audit Trail</span>
            <span>/</span>
            <span className="text-[#878a99]">View</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              <FileInput className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative w-60">
              <Calendar className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Date"
                className="border rounded px-10 py-2 w-full text-gray-500 placeholder-gray-400"
              />
            </div>

            <div className="relative w-60">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative w-60">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search..."
                className="border rounded px-10 py-2 w-full text-gray-500 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
