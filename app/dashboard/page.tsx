import React from "react";
import Hero from "@/components/shared/dashboardG/hero";
import Grafik from "@/components/ui/piegrafik";
import TopPath from "@/components/shared/dashboardG/topPath";
import BarGrafik from "@/components/shared/dashboardG/barGrafik";
import ColumnGrafik from "@/components/shared/dashboardG/columnGrafik";
import MixedChart from "@/components/shared/dashboardG/mixeeCharts";
import WPM from "@/components/shared/dashboardG/WVM";
import Footer from "../components/Homepage/Footer";
const Page: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-[7fr_3fr] h-[600px] w-full gap-4 container">
        {/* Kolom Kiri (70%) */}
        <div className="flex flex-col rounded-lg">
          <Hero />
          <div className="grid grid-cols-5 ">
            <div className="col-span-2 mt-5">
              <Grafik />
            </div>
            <div className="col-span-3">
              <TopPath />
            </div>
          </div>
        </div>
        <div className="rounded-lg flex items-center justify-center w-full max-w-full overflow-hidden">
          <BarGrafik />
        </div>
      </div>

      <div className="pt-64">
        <ColumnGrafik />
      </div>

      <div className="flex mt-10 gap-5 ">
        <div className="w-1/2">
          <div className="font-poppins text-black text-lg">
            <WPM />
          </div>
        </div>
        <div className="w-1/2">
          <MixedChart />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
