"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApexOptions } from "apexcharts";

// Menggunakan dynamic import agar bisa berjalan di Next.js (tanpa SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart: React.FC = () => {
  const [series] = useState([
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      width: [0, 3], // Kolom tanpa garis, garis dengan ketebalan 3px
      colors: ["#0AB39CD9"], // Warna garis merah
    },
    fill: {
      opacity: [0.9, 1], // Opasitas untuk kolom dan garis
      colors: ["#405189D9", "#405189D9"], // Kolom hijau, garis merah
    },
    colors: ["405189D9", "#405189D9"], // Warna utama: biru untuk kolom, merah untuk garis
    title: {
      text: "Traffic Sources",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#ADB5BD", // Warna teks judul chart
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1], // Data label hanya untuk garis
    },
    labels: ["01 Jan", "03 Jan", "07 Jan", "09 Jan", "11 Jan", "12 Jan", "13 Jan", "15 Jan", "17 Jan", "19 Jan", "21 Jan", "23 Jan"],
    yaxis: [
      {
        title: {
          text: "Website Blog",
          style: { color: "#ADB5BD" }, // Warna teks sumbu Y (biru)
        },
        labels: {
          style: { colors: "#ADB5BD" }, // Warna angka sumbu Y (biru)
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
          style: { color: "#ADB5BD" }, // Warna teks sumbu Y (merah)
        },
        labels: {
          style: { colors: "#ADB5BD" }, // Warna angka sumbu Y (merah)
        },
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
      },
    },
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-[#495057] font-semibold">
          Line and Column Charts
        </CardTitle>
        <CardTitle className="text-sm text-[#ADB5BD]">Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="line" height={350} />
      </CardContent>
    </Card>
  );
};

export default ApexChart;
