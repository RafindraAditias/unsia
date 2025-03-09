// app/components/dashboard/DeleteConfirmModal.tsx
"use client";

import { MenuItem } from "@/app/dashboard/menu/page";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteConfirmModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isPermanent?: boolean;
}

export default function DeleteConfirmModal({
  item,
  isOpen,
  onClose,
  onConfirm,
  isPermanent = false,
}: DeleteConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isPermanent ? "Permanently Delete Menu Item" : "Move to Trash?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isPermanent
              ? `Are you sure you want to permanently delete "${item.application} - ${item.menu}"? This action cannot be undone.`
              : `Are you sure you want to move "${item.application} - ${item.menu}" to trash? You can restore it later if needed.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className={isPermanent ? "bg-red-500 hover:bg-red-600" : ""}
          >
            {isPermanent ? "Delete Permanently" : "Move to Trash"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
