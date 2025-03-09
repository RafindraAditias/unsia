"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, FileInput, FileOutput, ArrowLeft} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Footer from "@/app/components/Homepage/Footer";
import RoleTable from "@/app/components/dashboard/roles/RoleTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DeleteConfirmModal from "@/app/components/dashboard/roles/deleterole";
import Editrole from "@/app/components/dashboard/roles/Editrole";
import Addrole from "@/app/components/dashboard/roles/Addrole"; 
import Datarole from "@/app/constants/dashboard/datarole.json";
import Viewroles from "@/app/components/dashboard/roles/viewrole";
import Permission from "@/app/components/dashboard/roles/Permission";

// Define the MenuItem type
export type Menuroles = {
  id: number;
  application: string;
  description: string;
  level: string;
  color: string;
  deleted?: boolean;
  deletedAt?: string;
};


export default function MenuPage() {
  const [isAddroleOpen, setIsAddroleOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<Menuroles[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("menuItems");
      return saved ? JSON.parse(saved) : Datarole.data; 
    }
    return Datarole.data;
  });
  const [trashItems, setTrashItems] = useState<Menuroles[]>(() => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("trashItems");
        return saved ? JSON.parse(saved) : [];
      }
      return [];
    });
    const [viewItem, setViewItem] = useState<Menuroles | null>(null);
    const [PermissionItem, setPermissionItem] = useState<Menuroles | null>(null);
    const [editItem, setEditItem] = useState<Menuroles | null>(null);
    const [deleteItem, setDeleteItem] = useState<Menuroles | null>(null);
    const [isTrashPage, setIsTrashPage] = useState(false);
  // State for filtering, searching and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [applicationFilter, setApplicationFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<Menuroles[]>(menuItems);
  const pageSize = 8;

  const activeData = isTrashPage ? trashItems : menuItems;

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
    localStorage.setItem("trashItems", JSON.stringify(trashItems));
  }, [menuItems, trashItems]);
  // Filter data based on application and search query
  const filteredData = data.filter((item) => {
    // Apply application filter
    if (applicationFilter !== "all" && item.application !== applicationFilter) {
      return false;
    }

    // Apply search filter
    if (
      searchQuery &&
      !Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  // Calculate pagination info
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Create array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

    // Handle adding new menu item
    const handleAdd = (newItem: Omit<Menuroles, "id">) => {
      const newId = Math.max(...menuItems.map((item) => item.id)) + 1;
      const updatedItems = [...menuItems, { ...newItem, id: newId }];
      setMenuItems(updatedItems);
    };
  
    // Toggle between trash and menu pages
    const toggleTrashPage = () => {
      setIsTrashPage(!isTrashPage);
      setCurrentPage(0); // Reset pagination when switching views
    };
  
    // Handle viewing an item
    const handleView = (item: Menuroles) => {
      setViewItem(item);
    };

    // Handle viewing an item
    const handlePermission = (item: Menuroles) => {
      setPermissionItem(item);
    };
  
    // Handle editing an item
    const handleEdit = (item: Menuroles) => {
      setEditItem(item);
    };
  
    // Handle saving edited item
    const handleSaveEdit = (updatedItem: Menuroles) => {
      if (isTrashPage) {
        setTrashItems(
          trashItems.map((item) =>
            item.id === updatedItem.id ? updatedItem : item,
          ),
        );
      } else {
        setMenuItems(
          menuItems.map((item) =>
            item.id === updatedItem.id ? updatedItem : item,
          ),
        );
      }
      setEditItem(null);
    };
  
    // Handle moving an item to trash
    const handleDelete = (item: Menuroles) => {
      setDeleteItem(item);
    };
  
    // Confirm moving to trash
    const confirmDelete = () => {
      if (deleteItem) {
        const updatedItem = {
          ...deleteItem,
          deleted: true,
          deletedAt: new Date().toISOString(),
        };
        setMenuItems((prev) => prev.filter((item) => item.id !== deleteItem.id));
        setTrashItems((prev) => [...prev, updatedItem]);
        setDeleteItem(null);
      }
    };
  
    // Handle restoring an item from trash
    const handleRestore = (item: Menuroles) => {
      const restoredItem = {
        ...item,
        deleted: false,
        deletedAt: undefined,
      };
      setTrashItems((prev) => prev.filter((i) => i.id !== item.id));
      setMenuItems((prev) => [...prev, restoredItem]);
    };
  
    // Handle permanent deletion
    const handlePermanentDelete = (item: Menuroles) => {
      setDeleteItem(item);
    };
  
    // Confirm permanent deletion
    const confirmPermanentDelete = () => {
      if (deleteItem) {
        setTrashItems(trashItems.filter((item) => item.id !== deleteItem.id));
        setDeleteItem(null);
      }
    };
    const fileInputRef = useRef<HTMLInputElement | null>(null);

  
    const handleImportClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const newData: Menuroles[] = JSON.parse(e.target?.result as string);
            setMenuItems(newData);
            localStorage.setItem("menuItems", JSON.stringify(newData));
            alert("Import berhasil!");
          } catch (error) {
            alert("Gagal mengimpor file. Pastikan format JSON sesuai.");
          }
        };
        reader.readAsText(file);
      }
    };
    

  const handleExportClick = () => {
    const dataStr = JSON.stringify(menuItems, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "menu_roles_export.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <div className="px-6 py-4 border-b border-[#e9ebec] flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#495057]">{isTrashPage ? "Trash" : "Role"}</h1>
        <div className="flex items-center gap-2 text-sm text-[#878a99]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/roles">Roles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{isTrashPage ? "trash" : "view"}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
        {isTrashPage ? (
            <Button variant="outline" onClick={toggleTrashPage}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Menu
            </Button>
          ) : (
          <>
          <Button
            variant="default"
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={() => setIsAddroleOpen(true)}
          >
            <span className="mr-2">+</span> Add Menu
          </Button>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600" onClick={handleExportClick}>
            <FileInput className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600" onClick={handleImportClick}>
            <FileOutput className="h-4 w-4 mr-2 " /> Import
          </Button>
          <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".json"
          onChange={handleFileChange}
        />
          <Button variant="destructive" onClick={toggleTrashPage}>
            <Trash2 className="h-4 w-4 mr-2" /> Trash
          </Button>
          </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="name"
          value={applicationFilter}
          onValueChange={setApplicationFilter}
          >
            <SelectTrigger className="w-[220px] text-sm text-[#495057] border-[#ced4da]">
              <SelectValue placeholder="Short By Name Application" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Short By Name Application</SelectItem>
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

          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="border-[#ced4da] text-sm text-[#495057] w-56 pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#878a99]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <RoleTable data={paginatedData} 
      onPermission={handlePermission}
       onView={handleView}
       onEdit={handleEdit}
       onDelete={handleDelete}
       onRestore={isTrashPage ? handleRestore : undefined}
       onPermanentDelete={isTrashPage ? handlePermanentDelete : undefined}
       isTrashView={isTrashPage}/>
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-sm text-gray-500">
            {totalItems > 0
              ? `${startIndex + 1}-${endIndex} of ${totalItems}`
              : "0 of 0"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          {pageNumbers.map((pageNum) => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              className={currentPage === pageNum ? "bg-blue-600" : ""}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage >= totalPages - 1}
          >
            Next
          </Button>
        </div>
      </div>
            {/* Modals */}
        {/* Modals */}
              {viewItem && (
                <Viewroles
                  item={viewItem}
                  isOpen={!!viewItem}
                  onClose={() => setViewItem(null)}
                  onSave={handleSaveEdit}
                />
              )}

               {PermissionItem && (
                <Permission
                  item={PermissionItem}
                  isOpen={!!PermissionItem}
                  onClose={() => setPermissionItem(null)}
                  onSave={handleSaveEdit}
                />
              )}
        
              {editItem && (
                <Editrole
                  item={editItem}
                  isOpen={!!editItem}
                  onClose={() => setEditItem(null)}
                  onSave={handleSaveEdit}
                />
              )}
        
              {deleteItem && (
                <DeleteConfirmModal
                  item={deleteItem}
                  isOpen={!!deleteItem}
                  onClose={() => setDeleteItem(null)}
                  onConfirm={isTrashPage ? confirmPermanentDelete : confirmDelete}
                  isPermanent={isTrashPage}
                />
              )}
            {isAddroleOpen && (
              <Addrole
                isOpen={isAddroleOpen}
                onClose={() => setIsAddroleOpen(false)}
                onSave={(newItem: Omit<Menuroles, "id">) => {
                  handleAdd(newItem);
                  setIsAddroleOpen(false);
                }}
              />
            )}
      <Footer />
    </div>
  );
}
