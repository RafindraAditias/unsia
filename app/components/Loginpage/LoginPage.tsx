import Image from "next/image";
import NavbarAuth from "./NavbarAuth";
import SliderSwiper from "./SliderSwiper";

const LoginPage = () => {
  return (
    <>
      <NavbarAuth />
      <SliderSwiper>
        <div className="flex">
          <div className="  mt-[256px] ml-[286px] w-[388px] h-[482px] px-[48px] py-[32px] justify-center items-center rounded-[8px] shadow-[0px_4px_4px_-4px_#0C0C0D1A,_0px_16px_32px_-4px_#0C0C0D1A] ">
            <div className=" text-[#666666] text-center" >

              {/* Judul */}
              <div className="font-medium text-[24px] leading-[140%] tracking-[0.5%] mb-[16px]">
                Masuk
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
              <div className="mb-[16px] relative"> {/* Added margin bottom */}
                <label className=" block text-left text-[#666666] font-medium text-[14px] leading-[140%] tracking-[0%] mb-[2px] ">Password</label>
                <input type="password" placeholder="Unsia@mail.com" className="font-normal text-[14px] leading-[140%] tracking-[0%] border border-[#CCCCCC] rounded-[8px] px-[38px] py-[8px] w-full" />
                <div className="absolute inset-y-0 left-3 top-1 flex items-center pointer-events-none ">
                  <Image src="/icons/iconKey.svg" alt="User Icon" width={14} height={16} /> {/* Sesuaikan width dan height */}
                </div>
                
                <div className="absolute inset-y-0 right-3 top-2 flex items-center">
                  <Image src="/icons/iconEyeSlash.svg" alt="Show Password" width={24} height={24} /> {/* Sesuaikan ukuran ikon */}
                </div>
                <a href="#" className="block text-right text-[#10487A] font-medium text-[11px] leading-[140%] tracking-[0%]">Lupa Password?</a>
              </div>

              {/* captcha*/}
              <div className=" border border-[#CCCCCC] rounded-[8px] p-[10px] w-full mb-[8px] flex items-center justify-between">
                <div className="flex items-center m-[6px]">
                  <input type="checkbox" id="robot" className="mr-2 h-[24px] w-[24px] border-[2px] border-[#999999] appearance-none  checked:before:content-['✔'] " />
                  <label htmlFor="robot" className="font-normal text-[#999999] text-[14px] leading-[140%] tracking-[0%] mb-[2px]">Saya bukan robot</label>
                </div>
                <div className="flex items-center mr-[6px]">
                  <Image src="/icons/iconRecaptcha.svg" alt="reCAPTCHA" width={64} height={64} />
                </div>
              </div>

              {/* Masuk */}
              <button className="font-normal text-[#FFFFFF] text-[14px] leading-[140%] tracking-[0%] border rounded-[4px] bg-[#10487A] hover:bg-[#003366] py-[8px] px-[16px] w-full mb-[8px] ">
                Masuk
              </button>

              <div className="font-normal text-[#000000] text-[14px] leading-[140%] tracking-[0%] mb-[8px] ">
                atau
              </div>

              {/* Google */}
              <button className="flex items-center justify-center border border-[#CCCCCC] rounded-[4px] p-[8px] w-full text-[14px] font-normal text-[#999999] leading-[140%] tracking-[0%]">
                <Image src="/icons/iconGoogle.svg" alt="Google Logo" width={24} height={24} className="mr-1" />
                Masuk Dengan Google
              </button>

            </div>

          </div>
        </div>
      </SliderSwiper>
    </>

  )
}

export default LoginPage