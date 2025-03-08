import Image from "next/image";
import { Bell } from "lucide-react";
// SDM item interface
interface SDMItem {
  id: number;
  title: string;
  hasNotification: boolean;
}

const MainMenu = () => {
  // Sample SDM data
  const sdmItems: SDMItem[] = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: "SDM (Sumber Daya Manusia)",
      hasNotification: [0, 1, 2, 3, 4, 7].includes(i),
    }));
  return (
    <>
      <div className="gap-[20px] flex flex-col w-[1002px] h-full p-[16px] bg-white rounded-lg">
        {/* Tagihan card */}
        <div className="bg-white rounded-lg p-4 border border-slate-100">
          <h2 className="text-lg font-semibold">Total Tagihan</h2>
          <h3 className="text-2xl font-bold mb-2">Rp15.000.0000</h3>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>

          <p className="text-sm text-gray-600">
            Anda sudah membayar sebesar{" "}
            <span className="font-medium">Rp3.100.000</span> dari{" "}
            <span className="font-medium">Rp18.100.000</span>.
          </p>

          <div className="flex justify-end mt-2">
            <button className="text-blue-500 text-sm">Lihat Rincian</button>
          </div>
        </div>

        {/* SDM Grid */}
        <div className="flex flex-wrap gap-[20px] w-[970px]">
          {sdmItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex flex-row items-center justify-center gap-[28px] relative w-[310px] h-[144px]"
            >
              {item.hasNotification && (
                <div className="absolute right-4 top-4">
                  <div className="relative">
                    <Bell size={18} />
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                      3
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-2">
                <div className="h-12 w-12  rounded flex items-center justify-center">
                  <Image
                    src="/Layer 1.png"
                    width={56}
                    height={56}
                    alt="icons"
                  />
                </div>
              </div>

              <div className="text-xs text-center text-gray-600">
                <div>SDM</div>
                <div>(Sumber Daya Manusia)</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainMenu;
