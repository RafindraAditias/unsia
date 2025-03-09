"use client";

import Image from "next/image";
import {
  MapPin,
  Mail,
  X,
  Text,
  User,
  ArrowRightCircle,
  Globe,
  IdCard,
} from "lucide-react";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserProfileModal({
  isOpen,
  onClose,
}: UserProfileModalProps) {
  if (!isOpen) return null;

  const formData = {
    fullName: "Putra Agen",
    unitKerja: "BPPTI",
    userAgent: "mozilla firefox",
    ipAddress: "1.1.1.1",
    timeLogin: "08:00:00",
    timeLogout: "08:30:00",
    application: "BPPTI",
    dataBefore: "Update data issue",
    dataAfter: "andre@gmail.com",
    location: "Palestine",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl overflow-hidden relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="relative">
          <Image
            src=""
            alt="Header Image"
            width={800}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <Image
              src=""
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-16">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries({
              "Full Name": formData.fullName,
              "Unit Kerja": formData.unitKerja,
              "User Agent": formData.userAgent,
              "IP Address": formData.ipAddress,
              "Time Login": formData.timeLogin,
              "Time Logout": formData.timeLogout,
            }).map(([label, value]) => (
              <div key={label}>
                <label className="text-gray-600 text-sm font-semibold">
                  {label}
                </label>
                <input
                  type="text"
                  value={value}
                  className="w-full p-2 border rounded bg-gray-100 mt-1 text-gray-700"
                  readOnly
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-gray-600 text-sm font-semibold">
              Aplication
            </label>
            <div className="flex items-center space-x-2 border p-2 rounded bg-gray-100 text-gray-700">
              <User size={16} className="text-gray-500" />
              <span>{formData.application}</span>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-600 text-sm font-semibold">
              Data Before
            </label>
            <div className="flex items-center space-x-2 border p-2 rounded bg-gray-100 text-gray-700">
              <Text size={16} className="text-gray-500" />
              <span>{formData.dataBefore}</span>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-600 text-sm font-semibold">
              Data After
            </label>
            <div className="flex items-center space-x-2 border p-2 rounded bg-gray-100 text-gray-700">
              <Mail size={16} className="text-gray-500" />
              <span>{formData.dataAfter}</span>
            </div>
          </div>

          {/* Location */}
          <div className="mt-6">
            <label className="text-gray-600 text-sm font-semibold">
              Location Access
            </label>
            <div className="flex items-center space-x-2 border p-2 rounded bg-gray-100 text-gray-700">
              <MapPin size={16} className="text-gray-500" />
              <span>{formData.location}</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
