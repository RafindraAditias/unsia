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

interface ViewrolesProps {
  item: Menuroles;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: Menuroles) => void;
}

export default function Viewroles({
  item,
  isOpen,
  onClose,
  onSave,
}: ViewrolesProps) {
  const [formState, setFormState] = useState<Menuroles>({ ...item });

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
          <DialogTitle>Details Role</DialogTitle>
          <DialogDescription>
          Details Role for item #{item.id}
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
        </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
