import Image, { StaticImageData } from "next/image";
import React from "react";
import { Triangle } from "lucide-react";

type CardProps = {
  icon: StaticImageData;
  title: string;
  value: number;
  change: number;
};

const Card: React.FC<CardProps> = ({ icon, title, value, change }) => {
  return (
    <div className="flex shadow-md justify-between items-center p-4 w-[300px]">
      <div className="flex shrink-0 gap-[20px]">
        <div className="bg-[#F3F6F9] rounded-full p-2 flex items-center justify-center">
          <Image src={icon} alt={title} width={30} height={30} />
        </div>
        <div className="font-geismono">
          <p className="text-[12px] font-medium text-[#9599AD] uppercase">
            {title}
          </p>
          <h1 className="text-[20px] font-medium text-[#495057]">{value}</h1>
        </div>
      </div>
      <div className="flex flex-col items-end self-end bg">
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium ${
          change < 0 ? "bg-[#F0654819] text-[#F06548]" : "bg-[#0AB39C19] text-[#0AB39C]"
        }`}
      >
        <Triangle
          size={10}
          className={change < 0 ? "rotate-180 text-[#F06548]" : "rotate-0 text-[#0AB39C]"}
        />
        <p>{change}</p>
      </div>
      </div>
    </div>
  );
};

export default Card;
