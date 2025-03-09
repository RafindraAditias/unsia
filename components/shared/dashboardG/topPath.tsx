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
import Filter from "@/components/shared/dashboardG/table";

const Paths = [
  { label: "/dashboard", value: 10 },
  { label: "/tautan", value: 10 },
  { label: "/data-leads", value: 10 },
  { label: "/history-data-lead", value: 10 },
  { label: "/report", value: 10 },
  { label: "/user", value: 10 },
];

const topPath = () => {
  return (
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-full h-20 pl-10 text-base ">Top Path</TableHead>
            <TableHead>
              <Filter />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableHeader className="bg-[#F3F6F9] h-16 text-[#9599AD]">
          <TableRow>
            <TableHead className="pl-10 text-sm">Nama Path</TableHead>
            <TableHead className="text-center text-sm">Users</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Paths.map((path, index) => (
            <TableRow key={index} className="h-16 text-[#405189] text-sm">
              <TableCell className="font-medium pl-10">
                {path.label}
              </TableCell>
              <TableCell className="text-center text-[#212529]">{path.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default topPath;
