import Image from "next/image";
import { useState } from "react";
import { BiBitcoin } from "react-icons/bi";
import gif1 from "../../assets/gif1.png";
import i_icon from "../../assets/i_icon.png";

const LendModal = () => {
  const [index, setIndex] = useState(1);

  const handlePlus = () => {
    setIndex(index + 1);
  };

  const handleMinus = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const handleChange = (event) => {
    const newIndex = parseInt(event.target.value);
    if (!isNaN(newIndex)) {
      setIndex(newIndex);
    }
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className=" bg-[#00000080] text-white border-t border-[#FFA800] max-w-[550px] w-full px-[27px] pt-[21px] modal-box rounded-none">
          <div className="flex gap-[29px] items-center mb-[20px]  ">
            <Image className="w-[100px]" src={gif1} />
            <div>
              <h1 className="text-[36px] font-semibold">Trex</h1>
              <p className="text-[16px] font-normal text-[#FFFFFFBF] ">
                Total Volume: 3.1 BTC
              </p>
            </div>
          </div>
          <div className="flex justify-evenly gap-[22px] text-[20px]  font-normal mb-[10px] ">
            <div className="border text-[14px] border-[#FFA800] p-[8px] bg-[#FFA80026] w-full">
              <p className="text-[#FFFFFFBF]">Floor</p>
              <p className="flex items-center gap-[4px]">
                <span>
                  {" "}
                  <BiBitcoin className="border rounded-[50%] text-[16px]" />
                </span>{" "}
                0.5
              </p>
            </div>
            <div className="border border-[#FFA800] text-[14px] p-[8px] bg-[#FFA80026] w-full">
              <p className="text-[#FFFFFFBF]">Duration</p>
              <p>16 Days</p>
            </div>
            <div className="border border-[#FFA800] p-[8px] text-[14px] bg-[#FFA80026] w-full">
              <p className="text-[#FFFFFFBF]">APY</p>
              <p>90%</p>
            </div>
          </div>
          {/* load inbfo */}
          <div className="font-normal ">
            <h2 className="text-[20px] mb-[4px]">Loan Info</h2>
            <div className="py-[10px] px-[12px] border border-[#FFA800] halfBorder bg-[#714d0b] flex items-center gap-[5px] mb-[10px] ">
              <Image src={i_icon} />
              <p className="text-[16px]">
                If the borrower fails to repay, you get this inscription.
              </p>
            </div>
            <div className="flex gap-[7px]">
              <div className="py-[10px] px-[12px] border w-full border-[#FFA800] halfBorder bg-[#714d0b] mb-[10px] ">
                <p className="text-[16px]  text-[#dbd1c0] ">
                  Enter Offer Amount
                </p>
                <p className="text-[#FFFFFFBF] text-[16px] flex items-center gap-[4px]">
                  <BiBitcoin /> 0.105
                </p>
              </div>

              <div className="py-[10px] px-[12px] border w-full border-[#FFA800] halfBorder bg-[#493108] mb-[10px] ">
                <p className="text-[16px]  text-[#dbd1c0] ">
                  Total Interest Amount
                </p>
                <p className="text-white text-[16px] flex items-center gap-[4px]">
                  <BiBitcoin /> 0
                </p>
              </div>
            </div>

            <div className="bg-[#784e04] w-full p-[6px] flex justify-between items-center border border-[#FFA800] halfBorder ">
              <div
                onClick={handleMinus}
                className="w-[30px] bg-[#FFA800] flex justify-center items-center ">
                <button className="text-[20px] font-bold "> - </button>
              </div>
              <input
                type="text"
                className="bg-transparent text-[25px] text-center border-0 focus:outline-none"
                value={index}
                onChange={handleChange}
              />

              <div
                onClick={handlePlus}
                className="w-[30px] bg-[#FFA800] flex justify-center items-center ">
                <button className="text-[20px] font-bold "> + </button>
              </div>
            </div>
          </div>

          <div className="items-center justify-center modal-action">
            <form method="dialog" className="flex flex-wrap gap-5">
              <button className="px-[69px] text-[26px] border-[#FFA800] halfBorder bg-[#2c1f05] ">
                Cancel
              </button>
              <button className="px-[38px] text-[26px] border-[#FFA800] bg-[#FFA800] halfBorder  ">
                Connect
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LendModal;
