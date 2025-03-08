"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarHomeProps {
  handleOpenModal?: () => void;
}

const NavbarHome: React.FC<NavbarHomeProps> = ({ handleOpenModal }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="bg-[#ffff] w-full absolute top-0 left-0 z-10">
      <div className="">
        <div className="flex items-center justify-between h-[70px]">
          <div className="pl-[25px]">
            <Image
              src="/logoUnsia.png"
              width={120}
              height={37}
              alt="logo-unsia"
            />
          </div>
          <div className="w-[243px] h-full  flex items-center gap-[20px] mr-[70px]">
            <div className=" flex gap-[23px] flex-row">
              <Image src="/Flag.png" width={20} height={20} alt="flag-icon" />
              <Image
                src="/bx-fullscreen.png"
                width={22}
                height={22}
                alt="full-screen"
              />
            </div>
            <a
              onClick={() => setIsClicked((prevState) => !prevState)}
              className="absolute right-[70px] w-[161px] h-full flex-col flex items-center cursor-pointer top-5"
            >
              <div className="flex items-center flex-row gap-[13px]">
                <Image
                  src="/User.png"
                  width={32}
                  height={32}
                  alt="profile-user"
                />
                <p className="text-sm text-black">Andre Putra</p>
              </div>
              {isClicked ? (
                <div className="relative top-6 w-full bg-[#ffff] flex flex-col  justify-between p-2 rounded-[2px] text-right">
                  <button className="flex flex-row gap-[5px] items-center h-[32px] px-[12px] py-[5px]">
                    <Image
                      src="/icons/iconDashboard.png"
                      width={12}
                      height={12}
                      alt="dashboard-icon"
                    />
                    <p>Dashboard</p>
                  </button>
                  <button
                    onClick={handleOpenModal}
                    className="cursor-pointer flex flex-row gap-[5px] items-center h-[32px] px-[12px] py-[5px]"
                  >
                    <Image
                      src="/icons/iconSettings.png"
                      width={12}
                      height={12}
                      alt="dashboard-icon"
                    />
                    <p>Settings</p>
                  </button>
                  <button className="flex flex-row gap-[5px] items-center h-[32px] px-[12px] py-[5px]">
                    <Image
                      src="/icons/iconLogout.png"
                      width={12}
                      height={12}
                      alt="dashboard-icon"
                    />
                    <p>Logout</p>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
