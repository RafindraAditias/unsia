"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
  handleCloseModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleCloseModal }) => {
  return (
    <section className="flex w-full h-full fixed top-0 left-0 bg-black/50 z-30 justify-center items-center">
      <div className="overflow-y-scroll bg-white w-[911px] h-[912px] flex flex-col relative rounded-lg">
        <Image
          src="/images/bg top image.png"
          width={911}
          height={330}
          alt="bg-top-images"
        />

        <div className="absolute w-[226px] h-[226px] rounded-full bg-[#fafafa] p-1 left-1/2 transform -translate-x-1/2 top-52">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/Ellipse 2.png"
              alt="Profile"
              width={226}
              height={226}
            />
            <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <form action="" className="w-full pt-[116px] px-[44px]">
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-col text-left w-1/2">
              <label className="mb-[8px]" htmlFor="">
                Nik
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
            <div className="flex flex-col text-left w-1/2">
              <label className="mb-[8px]" htmlFor="">
                Full Name
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Username
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Phone Number
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Email Campus
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Email Personal
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Password
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
            <div className="flex flex-col text-left w-1/2 pt-[8px]">
              <label className="mb-[8px]" htmlFor="">
                Confirm Password
              </label>
              <input
                type="text"
                className="border rounded-[1px] border-slate-600 h-[37px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-[8px] pt-[8px]" htmlFor="">
              Role
            </label>
            <input
              type="text"
              className="border rounded-[1px] border-slate-600 h-[37px]"
            />
          </div>
          <div className="w-full flex justify-end pt-[16px] gap-[16px]">
            <button
              onClick={handleCloseModal}
              className="cursor-pointer py-[8px] px-[15px] bg-[#F3F6F9] rounded-[4px]"
            >
              Close
            </button>
            <button className="py-[11px] px-[15px] bg-[#0AB39C] rounded-[4px]">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
