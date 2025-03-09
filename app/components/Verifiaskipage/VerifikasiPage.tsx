
import Image from "next/image";
import NavbarAuth from "../Loginpage/NavbarAuth";
import SliderSwiper from "../Loginpage/SliderSwiper"

function VerifikasiPage() {

    return (
        <>
            <NavbarAuth />
            <SliderSwiper>
                <div className="flex">
                    <div className="  mt-[345px] ml-[286px] w-[420px] h-[390px] px-[48px] py-[32px] justify-center items-center rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)]">
                        <div className=" text-[#666666] text-center" >

                            {/* Judul */}
                            <div className="font-medium text-[24px] leading-[140%] tracking-[0.5%] mb-[16px]">
                                Verifikasi Akun
                            </div>

                            {/* username */}
                            <div className="mb-[16px] relative"> {/* Added margin bottom */}
                                <label className=" block text-left text-[#666666] font-medium text-[14px] leading-[140%] tracking-[0%] mb-[2px] ">Akun Pengguna<span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Unsia@mail.com" className="font-normal text-[14px] leading-[140%] tracking-[0%] border border-[#CCCCCC] rounded-[8px] px-[38px] py-[8px] w-full" />
                                <div className="absolute inset-y-0 left-3 top-4 flex items-center pointer-events-none ">
                                    <Image src="/icons/iconUser.svg" alt="User Icon" width={14} height={16} /> {/* Sesuaikan width dan height */}
                                </div>

                            </div>

                            {/* password */}
                            <div className="mb-[2px] relative"> {/* Added margin bottom */}
                                <label className=" block text-left text-[#666666] font-medium text-[14px] leading-[140%] tracking-[0%] mb-[2px] ">Password</label>
                                <input type="password" placeholder="Unsia@mail.com" className="font-normal text-[14px] leading-[140%] tracking-[0%] border border-[#CCCCCC] rounded-[8px] px-[38px] py-[8px] w-full" />
                                <div className="absolute inset-y-0 left-3 top-5 flex items-center pointer-events-none ">
                                    <Image src="/icons/iconKey.svg" alt="User Icon" width={14} height={16} /> {/* Sesuaikan width dan height */}
                                </div>

                                <div className="absolute inset-y-0 right-3 top-5 flex items-center ">
                                    <Image src="/icons/iconEyeSlash.svg" alt="Show Password" width={24} height={24} /> {/* Sesuaikan ukuran ikon */}
                                </div>
                            </div>

                            <div className="flex mt-[6px] mb-[16px] items-start">
                                <input type="checkbox" id="robot" className="mr-2 mt-[3px] h-[12px] w-[12px] border-[2px] border-[#666666]  " />
                                <p className="text-left font-normal text-[12px] leading-[140%] tracking-[0%]">Saya menyetujui Syarat & ketentuan  Saya menyetujui Syarat & ketentuan </p>
                            </div>


                            {/* Verifikasi*/}
                            <button className="font-normal text-[#FFFFFF] text-[14px] leading-[140%] tracking-[0%] border rounded-[4px] bg-[#10487A] hover:bg-[#003366] py-[8px] px-[16px] w-full mb-[8px] ">
                                Verifikasi
                            </button>

                        </div>

                    </div>
                </div>
            </SliderSwiper>

        </>
    )
}

export default VerifikasiPage