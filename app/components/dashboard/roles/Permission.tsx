// app/components/dashboard/Editrole.tsx
"use client";

import { useState } from "react";
import { Grid } from "lucide-react"; 
import { Menuroles } from "@/app/dashboard/roles/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
  

interface PermissionProps {
  item: Menuroles;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: Menuroles) => void;
}

export default function Permission({
  item,
  isOpen,
  onClose,
  onSave,
}: PermissionProps) {
  const [formState, setFormState] = useState<Menuroles>({ ...item });

  const [permissions, setPermissions] = useState({
    create: false,
    update: false,
    edit: false,
  });

  const togglePermission = (permission: keyof typeof permissions) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const handleChange = (field: keyof Menuroles, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Permission Role</DialogTitle>
          <DialogDescription>
          Details Permission role for item #{item.id}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="application" >
                Name
              </Label>
              <Select
               value={formState.application}
               onValueChange={(value) => handleChange("application", value)}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <Grid className="h-4 w-4" />
                    <SelectValue placeholder="Select application"
                     />
                  </div>
                </SelectTrigger >
                <SelectContent>
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
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" >
                List Permission
              </Label>
              <Select
               value={formState.description}
               onValueChange={(value) => handleChange("description", value)}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <SelectValue placeholder="Select application"
                     />
                  </div>
                </SelectTrigger >
                <SelectContent>
                  <SelectItem value="Lead">Lead</SelectItem>
                  <SelectItem value="Anggota">Anggota</SelectItem>
                  <SelectItem value="Wakil Ketua">Wakil Ketua</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" >
                Refferal
              </Label>
              <div className="border rounded-md">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="bg-[#f3f6f9] text-[#495057] font-medium">
                  <TableHead className="px-4 py-2 text-center border">Create</TableHead>
                  <TableHead className="px-4 py-2 text-center border">Update</TableHead>
                  <TableHead className="px-4 py-2 text-center border">Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="px-4 py-2 text-center border">
                    <input
                      type="checkbox"
                      checked={permissions.create}
                      onChange={() => togglePermission("create")}
                      className="w-5 h-5 accent-blue-500"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-2 text-center border">
                    <input
                      type="checkbox"
                      checked={permissions.update}
                      onChange={() => togglePermission("update")}
                      className="w-5 h-5 accent-blue-500"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-2 text-center border">
                    <input
                      type="checkbox"
                      checked={permissions.edit}
                      onChange={() => togglePermission("edit")}
                      className="w-5 h-5 accent-blue-500"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
            </div>
        </div>
          <DialogFooter>
            <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">Ok</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
