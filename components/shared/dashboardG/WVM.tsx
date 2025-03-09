import Image from "next/image";
import React from "react";
import wpm from "@/public/assets/dashboard graphic/WPM.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WVM = () => {
  return (
    <Card>
      <CardTitle className="text-xl text-[#495057] font-semibold p-5 flex justify-between">
        <p>Traffic ICEMS</p>
        <div className="flex gap-2 font-base">
          <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">
            DAY
          </p>
          <p className="text-[11px] bg-[#40518919] p-2 rounded-md text-[#405189]">
            WEEK
          </p>
          <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">
            MONTH
          </p>
        </div>
      </CardTitle>
      <Image src={wpm} alt="wpm"></Image>
    </Card>
  );
};

export default WVM;
