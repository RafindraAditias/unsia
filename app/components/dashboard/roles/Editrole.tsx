// app/components/dashboard/Editrole.tsx
"use client";

import { useState } from "react";
import { Grid, Minus, Plus } from "lucide-react"; 
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { HexColorPicker } from "react-colorful";

interface EditroleProps {
  item: Menuroles;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: Menuroles) => void;
}

export default function Editrole({
  item,
  isOpen,
  onClose,
  onSave,
}: EditroleProps) {
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

  const [level, setLevel] = useState(1);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [tempColor, setTempColor] = useState(formState.color); // 
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Menu Item</DialogTitle>
          <DialogDescription>
            Make changes to menu item #{item.id}
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

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={formState.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
                placeholder="Placeholder"
              />
            </div>

            {/* Level & Color */}
                        <div className="grid grid-cols-2 gap-6">
                          {/* Level */}
                          <div className="grid gap-2">
                            <Label htmlFor="level">Level</Label>
                            <div className="flex h-10 w-full overflow-hidden rounded-md border border-input">
                              <button
                                type="button"
                                className="flex items-center justify-center bg-muted px-3 text-muted-foreground transition-colors hover:bg-muted/80"
                                onClick={() => setLevel((prev) => Math.max(1, prev - 1))}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <Input
                                id="level"
                                type="number"
                                value={level}
                                onChange={(e) => setLevel(Number.parseInt(e.target.value) || 1)}
                                className="h-full w-full border-0 text-center focus-visible:ring-0 focus-visible:ring-offset-0"
                              />
                              <button
                                type="button"
                                className="flex items-center justify-center bg-muted px-3 text-muted-foreground transition-colors hover:bg-muted/80"
                                onClick={() => setLevel((prev) => prev + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
            
                          {/* Color Picker */}
                          <div className="grid gap-2 relative">
                            <Label htmlFor="color">Color</Label>
                            <div
                              className="h-10 w-full rounded-md border border-input flex items-center cursor-pointer"
                              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                              style={{ backgroundColor: formState.color }}
                            >
                              <span className="m-auto text-gray-600">
                                {formState.color.toUpperCase()}
                              </span>
                            </div>
            
                            {isColorPickerOpen && (
                              <div className="absolute z-10 mt-2 p-3 bg-white shadow-lg rounded-md">
                                <HexColorPicker
                                  color={tempColor}
                                  onChange={setTempColor} // Menyimpan warna sementara
                                />
                                <div className="flex justify-between mt-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => setIsColorPickerOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    className="bg-emerald-500 hover:bg-emerald-600"
                                    onClick={() => {
                                      handleChange("color", tempColor);
                                      setIsColorPickerOpen(false);
                                    }}
                                  >
                                    Pilih Warna
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
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
