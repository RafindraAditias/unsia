import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/app/components/dashboard/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universitas Siber Asia",
  description: "University Administration Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
