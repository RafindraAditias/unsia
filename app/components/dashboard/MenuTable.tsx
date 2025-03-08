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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/app/dashboard/menu/page"; // Import the type from the page

interface MenuTableProps {
  data: MenuItem[];
}

const getRoleColor = (role: string) => {
  const roleColors: Record<string, string> = {
    Administrator: "bg-red-100 text-red-800",
    "Ketua Yayasan": "bg-green-100 text-green-800",
    Anggota: "bg-blue-100 text-blue-800",
    Tutor: "bg-emerald-100 text-emerald-800",
    Warak: "bg-orange-100 text-orange-800",
    Mahasiswa: "bg-pink-100 text-pink-800",
    Kaprodi: "bg-cyan-100 text-cyan-800",
    LPPM: "bg-purple-100 text-purple-800",
  };

  return roleColors[role] || "bg-gray-100 text-gray-800";
};

export default function MenuTable({ data }: MenuTableProps) {
  const columnHelper = createColumnHelper<MenuItem>();

  const columns = [
    columnHelper.accessor("id", {
      header: "No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name Application",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("menu", {
      header: "Menu",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("parent", {
      header: "Parent",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("path", {
      header: "Path",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("role", {
      header: "Role",
      cell: (info) => {
        const role = info.getValue();
        return (
          <Badge
            variant="outline"
            className={cn("font-normal", getRoleColor(role))}
          >
            {role}
          </Badge>
        );
      },
    }),
    columnHelper.accessor("id", {
      id: "actions",
      header: "Action",
      cell: (info) => {
        return (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-green-600"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-blue-600"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-red-600"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
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
                    header.getContext(),
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
    </div>
  );
}
