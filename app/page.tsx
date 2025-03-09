"use client";

import NavbarHome from "./components/Homepage/NavbarHome";
import UniversityDashboard from "./components/Homepage/UniversityDashboard";
import Footer from "./components/Homepage/Footer";
import Modal from "./components/Homepage/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="h-full w-full bg-[#fafafa] bg-no-repeat bg-cover bg-center bg-[url(/images/unsiaBgHome.png)] ">
      <NavbarHome handleOpenModal={handleOpenModal} />
      {isModalOpen ? <Modal handleCloseModal={handleCloseModal} /> : <></>}
      <div className="pt-[125px] px-[25px]  text-black ">
        <UniversityDashboard />
      </div>
      <Footer />
    </div>
  );
}
