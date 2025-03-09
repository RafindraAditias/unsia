// app/components/dashboard/ViewMenuModal.tsx
"use client";

import { MenuItem } from "@/app/dashboard/menu/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ViewMenuModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
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

export default function ViewMenuModal({
  item,
  isOpen,
  onClose,
}: ViewMenuModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Menu Item Details</DialogTitle>
          <DialogDescription>
            Viewing details for menu item #{item.id}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">ID:</div>
            <div className="col-span-2">{item.id}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Name:</div>
            <div className="col-span-2">{item.name}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Application:</div>
            <div className="col-span-2">{item.application}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Menu:</div>
            <div className="col-span-2">{item.menu}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Parent:</div>
            <div className="col-span-2">{item.parent || "-"}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Path:</div>
            <div className="col-span-2">{item.path}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-medium">Role:</div>
            <div className="col-span-2">
              <Badge
                variant="outline"
                className={cn("font-normal", getRoleColor(item.role))}
              >
                {item.role}
              </Badge>
            </div>
          </div>

          {item.deleted && (
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="font-medium">Deleted At:</div>
              <div className="col-span-2">
                {item.deletedAt
                  ? new Date(item.deletedAt).toLocaleString()
                  : "-"}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
