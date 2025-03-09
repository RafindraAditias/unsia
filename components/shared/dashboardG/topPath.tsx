import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Filter from "@/components/shared/dashboardG/table"

const topPath = () => {
  return (
    <div className="">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Top Path</TableHead>
            <TableHead><Filter /></TableHead>
          </TableRow>
        </TableHeader>
        <TableHeader className="bg-[#F3F6F9]">
          <TableRow>
            <TableHead className="w-[100px]">Nama Path</TableHead>
            <TableHead>Users</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default topPath;
