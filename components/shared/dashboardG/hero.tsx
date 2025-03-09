import Card from "@/components/ui/cardOption";
import React from "react";

// icon
import allUser from "@/public/assets/dashboard graphic/all user.png";
import allAplication from "@/public/assets/dashboard graphic/allAplication.png";
import allRole from "@/public/assets/dashboard graphic/allRole.png";
import profil from "@/public/assets/dashboard graphic/profil.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="font-poppins"> {/* Pastikan semua teks menggunakan Poppins */}
      <div className="flex text-black">
        <div className="w-full">
          <div className="flex items-center gap-5 rounded-md bg-gradient-to-r from-[#838FB9] to-[#3EC9D6] h-36 p-5">
            <div>
              <Image src={profil} alt="profil" width={100} height={100} />
            </div>
            <div className="text-white text-2xl">
              Selamat Pagi, <br /> Alberd Flores
            </div>
          </div>
          <div className="flex gap-5 justify-between py-5">
            <Card title="All User" value={30} change={-10} icon={allUser} />
            <Card title="All Application" value={30} change={-10} icon={allAplication} />
            <Card title="All Role" value={30} change={10} icon={allRole} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
