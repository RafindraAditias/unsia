import React from "react";
import Hero from "@/components/shared/dashboardG/hero";
import Grafik from "@/components/ui/grafik";
import TopPath from "@/components/shared/dashboardG/topPath";

const page = () => {
  return (
    <div>
      <div className="">
        <div>
          <Hero />
        </div>
        <div className="">
          <Grafik />
        </div>
        <div>
          <TopPath />
        </div>
      </div>
    </div>
  );
};

export default page;
