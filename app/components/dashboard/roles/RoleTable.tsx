"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Eye, RefreshCw, Trash2, X, UserRoundCog } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Menuroles } from "@/app/dashboard/roles/page"; // Import the type from the page
interface roleTableProps {
  data: Menuroles[];
  onPermission: (item: Menuroles) => void;
   onView: (item: Menuroles) => void;
    onEdit: (item: Menuroles) => void;
    onDelete: (item: Menuroles) => void;
    onRestore?: (item: Menuroles) => void;
    onPermanentDelete?: (item: Menuroles) => void;
    isTrashView?: boolean;
}


export default function roleTable({ 
  data,
  onView,
  onEdit,
  onDelete,
  onRestore,
  onPermanentDelete,
  onPermission,
  isTrashView = false,
 }: roleTableProps) {
  const columnHelper = createColumnHelper<Menuroles>();

  const columns = [
    columnHelper.accessor("id", {
      header: "No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("application", {
      header: "Name Application",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => info.getValue(),
    }),
    
    columnHelper.accessor("color", {
        header: "Color",
        cell: (info) => {
            const color = info.getValue();
            return (
                <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                ></div>
            );
        },
      }),
      ...(isTrashView
        ? [
            columnHelper.accessor(
              (row) =>
                row.deletedAt ? new Date(row.deletedAt).toLocaleString() : "",
              {
                id: "deletedAt",
                header: "Deleted At",
                cell: (info) => info.getValue(),
              },
            ),
          ]
        : []),
    columnHelper.accessor("id", {
        id: "actions",
        header: "Action",
        cell: (info) => {
          const row = info.row.original;
          return (
            <div className="flex items-center space-x-2">
               {isTrashView ? (
              // Trash view actions
              <>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-green-600"
                onClick={() => onRestore?.(row)}
                title="Restore"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-red-600"
                onClick={() => onPermanentDelete?.(row)}
                title="Delete Permanently"
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
             // Regular view actions
             <>
             <Button
               variant="outline"
               size="icon"
               className="h-8 w-8"
               onClick={() => onPermission(row)}
               title="View"
             >
               <UserRoundCog className="h-4 w-4" />
             </Button>
             <Button
               variant="outline"
               size="icon"
               className="h-8 w-8 text-blue-600"
               onClick={() => onView(row)}
               title="View"
             >
               <Eye className="h-4 w-4" />
             </Button>
             <Button
               variant="outline"
               size="icon"
               className="h-8 w-8 text-green-600"
               onClick={() => onEdit(row)}
               title="Edit"
             >
               <Edit className="h-4 w-4" />
             </Button>
             <Button
               variant="outline"
               size="icon"
               className="h-8 w-8 text-red-600"
               onClick={() => onDelete(row)}
               title="Move to Trash"
             >
               <Trash2 className="h-4 w-4" />
             </Button>
           </>
         )}
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
            <TableRow key={headerGroup.id} className="bg-[#f3f6f9] text-[#495057] font-medium">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} >
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
              {isTrashView ? "No items in trash." : "No results."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
