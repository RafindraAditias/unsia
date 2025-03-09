"use client";

import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { name: "PMB", value: 50, color: "#299CDBD8" },
  { name: "BPPTI", value: 90, color: "#299CDBD8" },
  { name: "BAK", value: 50, color: "#299CDBD8" },
  { name: "BKKIT", value: 100, color: "#299CDBD8" },
  { name: "SDM", value: 100, color: "#299CDBD8" },
  { name: "BPM", value: 90, color: "#F06548D8" },
  { name: "LPPM", value: 60, color: "#299CDBD8" },
  { name: "Library", value: 70, color: "#299CDBD8" },
  { name: "Laboratory", value: 30, color: "#299CDBD8" },
  { name: "BAU", value: 100, color: "#299CDBD8" },
  { name: "CRM", value: 20, color: "#299CDBD8" },
  { name: "BAA", value: 100, color: "#299CDBD8" },
  { name: "Siakad", value: 100, color: "#299CDBD8" },
  { name: "iMedia", value: 50, color: "#299CDBD8" },
];

const chartConfig: ChartConfig = {
  value: {
    label: "Jumlah Pengguna",
    color: "hsl(var(--chart-1))",
  },
};

export function BarGrafik() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm flex justify-between">
          <p>Traffic ICEMS</p>
          <div className="flex gap-2 font-base">
            <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">DAY</p>
            <p className="text-[11px] bg-[#40518919] p-2 rounded-md text-[#405189]">WEEK</p>
            <p className="text-[11px] bg-[#3577F119] p-2 rounded-md text-[#3577F1]">MONTH</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full overflow-hidden">
        <ChartContainer
          config={chartConfig}
          className="h-[700px] w-full overflow-hidden"
        >
          <BarChart
            data={chartData}
            layout="vertical"
            width={250}
            height={950}
            margin={{ left: 5, right: 0 }}
            barSize={20} // Ukuran batang tetap kecil
          >
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" radius={5}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BarGrafik;
