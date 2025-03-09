import Card from "@/components/ui/card";
import React from "react";

// icon
import allUser from "@/public/assets/dashboard graphic/all user.png";
import allAplication from "@/public/assets/dashboard graphic/allAplication.png";
import allRole from "@/public/assets/dashboard graphic/allRole.png";
import profil from "@/public/assets/dashboard graphic/profil.png";
import Grafik from "@/components/ui/grafik";
import Image from "next/image";
import TopPath from "./topPath";
import Table from "@/components/shared/dashboardG/table";
const hero = () => {
  return (
    <div>
      <div className="flex text-black m-4">
        <div className="">
          <div className="flex items-center gap-[20px] rounded-md bg-gradient-to-r from-[#838FB9] to-[#3EC9D6] h-36 p-5">
            <div>
              <Image src={profil} alt="profil" width={100} height={100}></Image>
            </div>
            <div className="text-white text-[28px]">
              Selamat Pagi, <br /> Alberd Flores
            </div>
          </div>
          <div className="flex gap-[20px] my-">
            <Card title="All User" value={30} change={-10} icon={allUser} />
            <Card
              title="All Aplication"
              value={30}
              change={-10}
              icon={allAplication}
            />
            <Card title="All Role" value={30} change={10} icon={allRole} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
