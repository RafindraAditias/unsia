"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts";

// Gunakan dynamic import untuk ApexCharts agar tidak error di Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart: React.FC = () => {
  const labels = [
    "Administrator", "Head", "Kaprodi", "Sekprodi", "Reviewer",
    "Mahasiswa", "Lead", "Manager", "Supervisor", "Technician",
    "Intern", "Consultant"
  ];

  // Pastikan `series` memiliki nilai yang sesuai dengan jumlah label
  const [series, setSeries] = useState<number[]>([
    140, 60, 80, 120, 0, 0, 0, 0, 0, 0, 0, 0
  ]);

  // Hitung total nilai
  const total = series.reduce((acc, value) => acc + value, 0);

  const [options, setOptions] = useState<ApexCharts.ApexOptions>({
    chart: { type: "donut", width: 380 },
    labels: labels,
    colors: [
      "#FF4560", "#008FFB", "#00E396", "#FEB019", "#775DD0",
      "#546E7A", "#26A69A", "#D10CE8", "#FF8C00", "#1E90FF",
      "#32CD32", "#FF1493"
    ],
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total User",
              formatter: () => `${total}`,
              
            },
          },
        },
      },
    },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { show: false } } }],
    legend: { show: false },
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Chart */}
      <div className="chart-wrap">
        <ReactApexChart options={options} series={series} type="donut" width={280} />
      </div>

      {/* Daftar label dengan nilai dalam 2 kolom */}
      <ul className="mt-4 grid grid-cols-2 gap-x-0 gap-y-2 text-lg text-poppins">
        {series.map((value, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded-fullf5a"
              style={{ backgroundColor: options.colors?.[index % options.colors.length] || "#ccc" }}
            ></span>
            <span className="font-base text-[#495057]">{labels[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApexChart;
