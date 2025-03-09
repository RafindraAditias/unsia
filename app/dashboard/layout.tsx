import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/app/components/dashboard/SideBar";
import { Header } from "@/app/components/dashboard/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
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
      <body className={`antialiased ${poppins.className}`}>
        {" "}
        {/* Menggunakan Poppins */}
        <div className="flex h-screen font-poppins">
          <Sidebar />
          <div className="flex-1 overflow-auto flex flex-col">
            <Header />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
