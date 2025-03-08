"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, icons, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Sidebar from "@/app/components/dashboard/SideBar";
import Footer from "@/app/components/Homepage/Footer";

// Define the Role type
export type Role = {
  no: number;
  application: string;
  createUser: string;
  timeLogin: string;
  timeLogout: string;
  activity: string;
  action: string;
};

// Sample data
const rolesData: Role[] = [
  {
    no: 1,
    application: "SPPM",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    no: 2,
    application: "SPPM",
    createUser: "Proposal",
    timeLogin: "Proposal",
    timeLogout: "Proposal",
    activity: "Proposal",
    action: "View",
  },
  {
    no: 3,
    application: "SPPM",
    createUser: "Penelitian",
    timeLogin: "Penelitian",
    timeLogout: "Penelitian",
    activity: "Penelitian",
    action: "View",
  },
  {
    no: 4,
    application: "Marketing",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    no: 5,
    application: "Marketing",
    createUser: "Referral",
    timeLogin: "Referral",
    timeLogout: "Referral",
    activity: "Referral",
    action: "View",
  },
  {
    no: 6,
    application: "Tracer Study",
    createUser: "Dashboard",
    timeLogin: "Dashboard",
    timeLogout: "Dashboard",
    activity: "Dashboard",
    action: "View",
  },
  {
    no: 7,
    application: "Tracer Study",
    createUser: "Quizoner",
    timeLogin: "Quizoner",
    timeLogout: "Quizoner",
    activity: "Quizoner",
    action: "View",
  },
  {
    no: 8,
    application: "Tracer Study",
    createUser: "Report",
    timeLogin: "Report",
    timeLogout: "Report",
    activity: "Report",
    action: "View",
  },
];

export default function RolesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<Role[]>(rolesData);
  const pageSize = 5;

  // Filter data based on search query
  const filteredData = data.filter((item) => {
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

  const pageNumbers = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-semibold">Roles</h1>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded">
              <FileText /> Export
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Date"
              className="border rounded px-4 py-2"
            />
            <Input
              type="search"
              placeholder="Search..."
              className="border rounded px-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">No</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Application</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Create User</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Time Login</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Time Logout</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Activity</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((role) => (
                <tr key={role.no}>
                  <td className="py-2 px-4 border-b">{role.no}</td>
                  <td className="py-2 px-4 border-b">{role.application}</td>
                  <td className="py-2 px-4 border-b">{role.createUser}</td>
                  <td className="py-2 px-4 border-b">{role.timeLogin}</td>
                  <td className="py-2 px-4 border-b">{role.timeLogout}</td>
                  <td className="py-2 px-4 border-b">{role.activity}</td>
                  <td className="py-2 px-4 border-b text-center text-blue-600 cursor-pointer">
                    {role.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center">
            <span>
              {totalItems > 0
                ? `${startIndex + 1}-${endIndex} of ${totalItems}`
                : "0 of 0"}
            </span>
            <div className="flex space-x-2">
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
        <Footer />
      </div>
    </div>
  );
}
