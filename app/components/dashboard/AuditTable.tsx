"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Eye, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/app/dashboard/audit-trail/page"; // Import the type from the page
import UserProfileModal from "@/app/components/dashboard/UserProfileModal";

interface MenuTableProps {
  data: MenuItem[];
}

export default function MenuTable({ data }: MenuTableProps) {
  const columnHelper = createColumnHelper<MenuItem>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    columnHelper.accessor("id", {
      header: "No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("application", {
      header: "Application",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createUser", {
      header: "Create User",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("timeLogin", {
      header: "Time Login",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("timeLogout", {
      header: "Time Logout",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("activity", {
      header: "Activity",
      cell: (info) => {
        const role = info.getValue();
        return (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className="h-4 w-4" />
          </Button>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
