import Image from "next/image";

const UniversityInfo = () => {
  return (
    <div>
      <div className="bg-white rounded-lg w-[432px]">
        <div className="p-4 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Information University</h2>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm flex items-center">
            <span className="mr-1">+</span> Post
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search for information"
              className="w-full px-4 py-2  rounded-md pl-10 border-0 focus:outline-none"
            />
            <svg
              className="h-5 w-5 text-gray-400 absolute left-3 top-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Info blocks */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="mb-[4px] border border-slate-100 p-[16px] h-[230px]"
            >
              <div className="border border-slate-100 p-[16px]">
                <div className="flex mb-2 ">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mr-3">
                    <Image
                      src="/Ellipse 8.png"
                      height={48}
                      width={48}
                      alt="logoIcon"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold">Biro Akademik</h3>
                    <div className="text-sm text-gray-500">
                      Senin 26 Juni 2024 08:00 WIB
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's{" "}
                  <span className="text-purple-500">read more</span>
                </div>

                <button className="bg-[#44A7FF] text-blue-100 px-4 py-1 rounded text-sm flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Lampiran
                </button>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="text-sm text-blue-500 hover:underline">
              View all information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityInfo;
