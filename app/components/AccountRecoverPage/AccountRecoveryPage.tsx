import Image from "next/image";
import NavbarAuth from "../Loginpage/NavbarAuth";
import SliderSwiper from "../Loginpage/SliderSwiper";

function AccountRecoveryPage() {
    return (
        <>
            <NavbarAuth />
            <SliderSwiper>
                <div className="flex">
                    <div className="  mt-[371px] ml-[286px] w-[420px] h-[338px] px-[48px] py-[32px] justify-center items-center rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)]">
                        <div className=" text-[#666666] text-center" >

                            {/* Judul */}
                            <div className="font-medium text-[24px] leading-[140%] tracking-[0.5%] mb-[16px]">
                                Pemulihan Akun
                            </div>

                            {/* Deskripsi*/}
                            <p className="font-normal text-[#666666] text-[14px] leading-[140%] tracking-[0%] mb-[8px] ">
                                Masukkan email akun Anda yang sudah terdaftar kemudian ikuti langkah pada email yang Kami kirimkan.
                            </p>

                            {/* Email */}
                            <div className="mb-[16px] relative"> {/* Added margin bottom */}
                                <label className=" block text-left text-[#666666] font-medium text-[14px] leading-[140%] tracking-[0%] mb-[2px] ">Email</label>
                                <input type="text" placeholder="Unsia@mail.com" className="font-normal text-[14px] leading-[140%] tracking-[0%] border border-[#CCCCCC] rounded-[8px] px-[38px] py-[8px] w-full" />
                                <div className="absolute inset-y-0 left-3 top-6 flex items-center pointer-events-none ">
                                    <Image src="/icons/iconMailBulk.svg" alt="User Icon" width={18} height={16} /> {/* Sesuaikan width dan height */}
                                </div>
                            </div>

                            {/* Kirim*/}
                            <button className="font-normal text-[#FFFFFF] text-[14px] leading-[140%] tracking-[0%] border rounded-[4px] bg-[#10487A] hover:bg-[#003366] py-[8px] px-[16px] w-full mb-[8px] ">
                                Kirim
                            </button>
                        </div>

                    </div>
                </div>
            </SliderSwiper>
        </>
    )
}

export default AccountRecoveryPage