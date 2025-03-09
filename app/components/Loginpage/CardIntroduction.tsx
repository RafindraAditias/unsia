import Image from "next/image";

const CardIntroduction = () => {
  return (
    // <div className="relative  h-[513px] w-[860px] mt-[259px] ml-[166px] border">
      <div className="absolute mt-[94px] mx-[60px]  text-[#10487A] ">
        
        <div className="font-medium text-[60px] leading-[120%] tracking-[0.5%]">
          Perkenalkan
        </div>

        <div className="font-medium text-[60px] leading-[120%] tracking-[0.5%]">
          Wajah Baru
        </div>

        <div className="font-bold text-[60px] leading-[120%] tracking-[0.5%]">
          SIAKAD
        </div>

        <p className="font-medium text-[18px] leading-[140%] tracking-[0.5%]">
          SIAKAD Universitas Siber Asia hadir dengan tampilan modern,
          fungsionalitas lebih baik, dan akses yang mudah bagi mahasiswa, dosen,
          dan staf, meningkatkan efisiensi dan efektivitas dalam mengelola
          informasi akademik dan administrasi.
        </p>

      {/* </div> */}
    </div>
  );
};

export default CardIntroduction;