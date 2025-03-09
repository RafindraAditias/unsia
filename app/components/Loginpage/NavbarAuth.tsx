import Image from "next/image"

const NavbarAuth = () => {
    return (
      <nav className="bg-[#FFFFFF] w-full absolute top-0 left-0 z-10 ">
        <div className="">
            <div className="bg-[#10487A] h-[16px]"></div>
          <div className="flex relative items-center justify-between h-[80px] px-[70px] py-[12px] shadow-[0_2px_8px_#1565FF40]">
            <div className="">
              <Image
                src="/logoUnsiaAuth.svg"
                width={182}
                height={56}
                alt="logo-unsia"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavbarAuth;