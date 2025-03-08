"use client";

import React from "react";
import Schedules from "./Schedules";
import MainMenu from "./MainMenu";
import UniversityInfo from "./UniversityInfo";

const UniversityDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-[868px] mb-[65px]">
      <div className="flex md: gap-[19px]">
        {/* Left panel - Calendar */}
        <Schedules />
        {/* Middle panel - Tagihan and SDM grid */}
        <MainMenu />
        {/* Right panel - Information University */}
        <UniversityInfo />
      </div>
    </div>
  );
};

export default UniversityDashboard;
