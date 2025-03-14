//app/dashboard/menu/page.tsx
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import MenuTable from "@/app/components/dashboard/MenuTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DeleteConfirmModal from "@/app/components/dashboard/DeleteConfirmModal";
import EditMenuModal from "@/app/components/dashboard/EditMenuModal";
import ViewMenuModal from "@/app/components/dashboard/ViewMenuModal";
import AddMenuModal from "@/app/components/dashboard/AddMenuModal"; // New import for AddMenuModal
import menuData from "@/app/constants/dashboard/menu-data.json"; // Import JSON

export type MenuItem = {
  id: number;
  name: string;
  application: string;
  menu: string;
  parent: string;
  path: string;
  role: string;
  deleted?: boolean;
  deletedAt?: string; // Changed to string for JSON compatibility
};

export default function MenuPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("menuItems");
      return saved ? JSON.parse(saved) : menuData.data; // Notice .data here
    }
    return menuData.data;
  });
  const [trashItems, setTrashItems] = useState<MenuItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("trashItems");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [viewItem, setViewItem] = useState<MenuItem | null>(null);
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<MenuItem | null>(null);
  const [isTrashPage, setIsTrashPage] = useState(false);
  // State for filtering, searching and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [applicationFilter, setApplicationFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<MenuItem[]>(menuItems);
  const pageSize = 10;

  const activeData = isTrashPage ? trashItems : menuItems;

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
    localStorage.setItem("trashItems", JSON.stringify(trashItems));
  }, [menuItems, trashItems]);

  // Filter data based on application and search query
  const filteredData = activeData.filter((item) => {
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
          value.toLowerCase().includes(searchQuery.toLowerCase()),
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
  const handleAdd = (newItem: Omit<MenuItem, "id">) => {
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
  const handleView = (item: MenuItem) => {
    setViewItem(item);
  };

  // Handle editing an item
  const handleEdit = (item: MenuItem) => {
    setEditItem(item);
  };

  // Handle saving edited item
  const handleSaveEdit = (updatedItem: MenuItem) => {
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
  const handleDelete = (item: MenuItem) => {
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
  const handleRestore = (item: MenuItem) => {
    const restoredItem = {
      ...item,
      deleted: false,
      deletedAt: undefined,
    };
    setTrashItems((prev) => prev.filter((i) => i.id !== item.id));
    setMenuItems((prev) => [...prev, restoredItem]);
  };

  // Handle permanent deletion
  const handlePermanentDelete = (item: MenuItem) => {
    setDeleteItem(item);
  };

  // Confirm permanent deletion
  const confirmPermanentDelete = () => {
    if (deleteItem) {
      setTrashItems(trashItems.filter((item) => item.id !== deleteItem.id));
      setDeleteItem(null);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6 justify-between">
        <h1 className="text-2xl font-semibold">
          {isTrashPage ? "Trash" : "Menu"}
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/menu">Menu</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{isTrashPage ? "trash" : "view"}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center justify-between mb-6">
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
                onClick={() => setIsAddModalOpen(true)} // Open AddMenuModal on click
              >
                <span className="mr-2">+</span> Add Menu
              </Button>
              <Button variant="destructive" onClick={toggleTrashPage}>
                <Trash2 className="h-4 w-4 mr-2" /> Trash
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Select
            value={applicationFilter}
            onValueChange={setApplicationFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Application" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="SIPPM">SIPPM</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Tracer Study">Tracer Study</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="search"
            placeholder="Search..."
            className="w-[200px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Menu Table with action handlers */}
      <MenuTable
        data={paginatedData}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onRestore={isTrashPage ? handleRestore : undefined}
        onPermanentDelete={isTrashPage ? handlePermanentDelete : undefined}
        isTrashView={isTrashPage}
      />

      {/* Pagination */}
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
      {viewItem && (
        <ViewMenuModal
          item={viewItem}
          isOpen={!!viewItem}
          onClose={() => setViewItem(null)}
        />
      )}

      {editItem && (
        <EditMenuModal
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

      {isAddModalOpen && (
        <AddMenuModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={(newItem: Omit<MenuItem, "id">) => {
            handleAdd(newItem);
            setIsAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
