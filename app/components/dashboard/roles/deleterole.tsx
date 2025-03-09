"use client";

import { Menuroles } from "@/app/dashboard/roles/page";
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
import { Meh } from "lucide-react"; 

interface DeleterolesProps {
  item: Menuroles;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isPermanent?: boolean;
}

export default function Deleteroles({
  item,
  isOpen,
  onClose,
  onConfirm,
  isPermanent = false,
}: DeleterolesProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>

      <AlertDialogContent className="w-[350px] flex flex-col items-center text-center py-6 rounded-lg shadow-lg">
        

        <div className="flex justify-center">
          <Meh className="w-30 h-30 text-red-500 drop-shadow-lg" /> 

        </div>


        <AlertDialogHeader className="mt-4 w-full">
          <AlertDialogTitle className="text-2xl font-bold text-center">
          {isPermanent ? "Delete Menu?" : "Move to Trash?"}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-500 mt-2 text-center">
          {isPermanent
              ? `Are you sure you want to permanently delete "${item.application} - ${item.application}"? This action cannot be undone.`
              : `Are you sure you want to move "${item.application} - ${item.application}" to trash? You can restore it later if needed.`}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex justify-center gap-4 mt-4">
          <AlertDialogCancel className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-6 py-2 rounded-md">
            No, cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className={isPermanent ? "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md" : ""}
          >
            {isPermanent ? "Delete Permanently" : "Move to Trash"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
