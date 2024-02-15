import React, { useEffect, useState } from "react";
import gif1 from "../../assets/gif1.png";
import list from "../../assets/list_icon.png";
import Image from "next/image";
import { BiBitcoin } from "react-icons/bi";

const BorrowModal = () => {
  useEffect(() => {
    const handleCloseModal = (event) => {
      if (event.target.className === "modal-backdrop") {
        document.getElementById("borrow_modal_toggle").checked = false;
      }
    };
    document.addEventListener("click", handleCloseModal);
    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, []);

  return (
    <div>
      <dialog id="borrow_modal" className="modal">
        <input
          type="checkbox"
          id="borrow_modal_toggle"
          className="modal-toggle"
        />

        <div className=" bg-[#00000080] border-t border-[#FFA800] text-white max-w-[550px] w-full px-[27px] pt-[21px] modal-box rounded-none">
          <div className="flex gap-[29px] items-center mb-[25px]  ">
            <Image className="w-[100px]" src={gif1} />
            <div>
              <h1 className="text-[36px] font-semibold  ">Trex</h1>
              <p className="text-[16px] font-normal text-[#FFFFFFBF] ">
                Total Volume: 3.1 BTC
              </p>
            </div>
          </div>
          <div className="flex justify-evenly gap-[22px] text-[20px]  font-normal mb-[18px] ">
            <div className="text-[14px] font-normal border-[0.5px] border-[#FFA800] p-[8px] bg-[#FFA80026] w-full">
              <p className="text-[#FFFFFFBF]">Loan Amount</p>
              {/* <p ><span>t</span>0.105</p> */}
              <p className="flex items-center gap-[4px]">
                <span>
                  <BiBitcoin className="border rounded-[50%] text-[18px]" />
                </span>{" "}
                0.105
              </p>
            </div>
            <div className="text-[14px] font-normal border-[0.5px] border-[#FFA800] p-[8px] bg-[#FFA80026] w-full ">
              <p className="text-[#FFFFFFBF]">Floor</p>
              <p className="flex items-center gap-[4px]">
                <span>
                  <BiBitcoin className="border rounded-[50%] text-[18px]" />
                </span>{" "}
                0.5
              </p>
            </div>
            <div className="text-[14px] font-normal border-[0.5px] border-[#FFA800] p-[8px]  bg-[#FFA80026] w-full ">
              <p className="text-[#FFFFFFBF]">Duration</p>
              <p>16 Days</p>
            </div>
            <div className="text-[14px] font-normal border-[0.5px] border-[#FFA800]  p-[8px] bg-[#FFA80026] w-full ">
              <p className="text-[#FFFFFFBF]">Interest</p>
              <p>2.1%</p>
            </div>
          </div>

          <div>
            <h2 className="text-[26px] mb-[4px]">Collateral</h2>
            <div className="flex flex-col items-center gap-[23px] justify-center text-center">
              <Image src={list} />
              <p className="text-[20px]">No “Trex” Available</p>
            </div>
          </div>

          <div className="items-center justify-center modal-action">
            <form
              method="dialog"
              className="flex flex-wrap gap-5">
              <button className="px-[69px] text-[26px] border-[#FFA800] halfBorder bg-[#2c1f05]">
                Cancel
              </button>
              <button className="px-[38px] text-[26px] border-[#FFA800] bg-[#FFA800] halfBorder">
                Connect
              </button>
            </form>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="borrow_modal_toggle"></label>
      </dialog>
    </div>
  );
};

export default BorrowModal;
