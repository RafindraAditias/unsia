// app/components/dashboard/AddMenuModal.tsx
"use client";

import { useState } from "react";
import { MenuItem } from "@/app/dashboard/menu/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface AddMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newItem: Omit<MenuItem, "id">) => void;
}

export default function AddMenuModal({
  isOpen,
  onClose,
  onSave,
}: AddMenuModalProps) {
  const [formData, setFormData] = useState<Omit<MenuItem, "id">>({
    name: "",
    application: "SIPPM",
    menu: "",
    parent: "",
    path: "",
    role: "Administrator",
  });

  const handleChange = (field: keyof Omit<MenuItem, "id">, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      name: "",
      application: "SIPPM",
      menu: "",
      parent: "",
      path: "",
      role: "Administrator",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Menu</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <div className="col-span-3">
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="application" className="text-right">
                Application
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.application}
                  onValueChange={(value) => handleChange("application", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select application" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SIPPM">SIPPM</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Tracer Study">Tracer Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="menu" className="text-right">
                Menu
              </Label>
              <div className="col-span-3">
                <Input
                  id="menu"
                  value={formData.menu}
                  onChange={(e) => handleChange("menu", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="parent" className="text-right">
                Parent
              </Label>
              <div className="col-span-3">
                <Input
                  id="parent"
                  value={formData.parent}
                  onChange={(e) => handleChange("parent", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="path" className="text-right">
                Path
              </Label>
              <div className="col-span-3">
                <Input
                  id="path"
                  value={formData.path}
                  onChange={(e) => handleChange("path", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleChange("role", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Administrator">Administrator</SelectItem>
                    <SelectItem value="Ketua Yayasan">Ketua Yayasan</SelectItem>
                    <SelectItem value="Anggota">Anggota</SelectItem>
                    <SelectItem value="Tutor">Tutor</SelectItem>
                    <SelectItem value="Warak">Warak</SelectItem>
                    <SelectItem value="Mahasiswa">Mahasiswa</SelectItem>
                    <SelectItem value="Kaprodi">Kaprodi</SelectItem>
                    <SelectItem value="LPPM">LPPM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              Create Menu
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
