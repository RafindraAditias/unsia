import Image from "next/image";

const NavbarHome = () => {
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
            <div className=" h-full flex items-center gap-[13px]">
              <Image
                src="/User.png"
                width={32}
                height={32}
                alt="profile-user"
              />
              <p className="text-sm text-black">Andre Putra</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
