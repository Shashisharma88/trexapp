"use client";

import React, { useState } from "react";
import BorrowTable from "./BorrowTable";
import LendTable from "./LendTable";

const Borrow = () => {
  const [activeTab, setActiveTab] = useState("Borrow");

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="text-white mt-[80px] mb-[41px]">
        <div className="grid grid-cols-12 border-b border-t border-[#9E6519]">
          <div className="col-span-12 lg:col-span-6">
            <button
              className={`text-[32px] font-normal w-full h-[46px] ${
                activeTab === "Borrow" ? "bg-[#FFA800]" : "bg-[#0000003F]"
              }`}
              onClick={() => handleTabs("Borrow")}>
              Borrow
            </button>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <button
              className={`text-[32px] font-normal w-full h-[46px] ${
                activeTab === "Lend" ? "bg-[#FFA800]" : "bg-[#0000003F]"
              }`}
              onClick={() => handleTabs("Lend")}>
              Lend
            </button>
          </div>
        </div>
        {activeTab == "Borrow" && <BorrowTable />}
        {activeTab == "Lend" && <LendTable />}
      </div>
    </>
  );
};

export default Borrow;
