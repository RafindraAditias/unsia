import NavbarHome from "./components/NavbarHome";
import UniversityDashboard from "./components/UniversityDashboard";
import Footer from "./components/Footer";
import Sidebar from "./components/dashboard/SideBar";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#fafafa]">
      <NavbarHome />
      <div className="pt-[125px] px-[25px] bg-[#fafafa] text-black">
        <UniversityDashboard />
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}
