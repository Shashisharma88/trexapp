"use client";

import { useState } from "react";
import t3 from "../../assets/MOON.png";
import t2 from "../../assets/TETRIS.png";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import t1 from "../../assets/trex.png";
import Season from "./Season";

const Seasons = () => {
  const [activeTab, setActiveTab] = useState("Season1");

  const handleTabs = (tab) => {
    console.log("Click the TAB", tab);
    setActiveTab(tab);
  };

  return (
    <>
      <div className="season_wrapper mt-[100px] md:mt-[170px] pb-[176px] overflow-hidden">
        <div className="mb-[138px] flex lg:justify-between justify-evenly lg:mx-[228px]  ">
          <button
            onClick={() => handleTabs("Season1")}
            className={`text-white  text-[24px] lg:text-[38px] font-normal ${
              activeTab === "Season1"
                ? "border-t-[5px] border-[#FFA800]"
                : "text-[#FFFF]"
            } `}>
            Season 1
          </button>
          <div className="relative button_tooltip">
            <button
              className={`text-white   text-[24px] lg:text-[38px] font-normal  ${
                activeTab === "Season2"
                  ? "border-t-[5px] border-[#FFA800]"
                  : "text-[#FFFF]"
              } `}>
              Season 2
            </button>

            <div
              className="absolute w-full px-[10px] z-50 py-[15px] tooltip_msg top-[44px] left-[60px]  "
              style={{
                backgroundColor: "#aeaeac",
                color: "white",
                borderRadius: "0px",
                fontSize: "24px",
              }}>
              Coming Soon
            </div>
          </div>
        </div>

        {activeTab === "Season1" ? (
          <>
            <div className="container">
              <div className=" grid grid-cols-12">
                <Season img={gif1} textImage={t1} m="70px" />
                <Season img={gif2} textImage={t2} m="70px" />
                <Season className="" img={gif3} textImage={t3} m="0px" />
              </div>
            </div>
          </>
        ) : activeTab === "Season2" ? (
          <>
            <h1 className="text-[48px] text-center text-white">comming soon</h1>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Seasons;
