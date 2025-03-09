"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApexOptions } from "apexcharts";

// Menggunakan dynamic import agar bisa dijalankan di Next.js
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Konfigurasi chart
const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 0, // Tidak ada rounded
    },
  },
  colors: ["#F06548", "#405189", "#0AB39C"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["PMB", "SDM", "BAK", "BPPTI", "SIAKAD", "BAA", "CRM", "LPPM", "BPM", "BKKIT"],
    labels: {
      style: {
        colors: "#ADB5BD", // Mengubah warna teks label kategori menjadi #ADB5BD
      },
    },
  },
  yaxis: {
    title: {
      text: "USER",
      style: {
        color: "#ADB5BD", // Mengubah warna teks judul Y-Axis menjadi #ADB5BD
      },
    },
    labels: {
      style: {
        colors: "#ADB5BD", // Mengubah warna label Y-Axis menjadi #ADB5BD
      },
    },
  },
  tooltip: {
    theme: "dark", // Mengubah tema tooltip menjadi gelap
    style: {
      fontSize: "12px",
    },
    y: {
      formatter: (val: number) => `$ ${val} thousands`,
      title: {
        formatter: () => '', // Remove title in tooltip
      },
    },
  },
  grid: {
    borderColor: "#ADB5BD", // Mengubah warna grid chart menjadi #ADB5BD
  },
  fill: {
    opacity: 1,
  },
  legend: {
    labels: {
      // style: {
      //   colors: "#ADB5BD", // Mengubah warna teks legend menjadi #ADB5BD
      // },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
  ],
};

// Data series untuk chart
const series: ApexAxisChartSeries = [
  {
    name: "Administrator",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 50],
  },
  {
    name: "Kaprodi",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 80],
  },
  {
    name: "Dosen",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 70],
  },
];

const BarChart: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-[#495057] font-semibold flex justify-between">
          <p>Traffic User Application ICEMS</p>
          <div className="flex gap-2 font-base">
            <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">DAY</p>
            <p className="text-[11px] bg-[#40518919] p-2 rounded-md text-[#405189]">WEEK</p>
            <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">MONTH</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="bar" height={350} />
      </CardContent>
    </Card>
  );
};

export default BarChart;
