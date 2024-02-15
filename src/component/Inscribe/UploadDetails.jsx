import Image from "next/image";
import i_icon from "../../assets/i.png";
import question from "../../assets/question.png";
import FileDetails from "./FileDetails";

const UploadDetails = ({ files, removeOneFile }) => {
  return (
    <>
      {files.length !== 0 ? (
        <>
          {files.map((file, index) => (
            <FileDetails
              key={index}
              file={file}
              index={index}
              removeOneFile={removeOneFile}
            />
          ))}
        </>
      ) : null}
      <div>
        <div className="flex flex-wrap items-center justify-between font-normal border-t halfBorder lg:flex-nowrap">
          <div className="flex items-center lg:flex-nowrap flex-wrap gap-[9px]  mt-[8px]">
            <p className=" text-[#FFFFFFBF] text-[25px] ">
              Sats In Inscription:
            </p>
            <p className="text-[20px] bg-[#00000026] w-fit px-[7px] border ">
              <span className="text-white ">Customize</span>
              {files.length !== 0 && (
                <span className="text-[#FF7A00]">(Min Is Min 330)</span>
              )}
            </p>
            <Image className="h-[30px]" src={question} alt="question" />
          </div>
          <div>
            <p className="text-[25px]">
              <span className="text-white">
                {files.length !== 0 && 546} sats
              </span>
              <span className="text-[#FFFFFFBF]  ">
                ~${files.length !== 0 && 0.22}
              </span>
            </p>
          </div>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center  mt-[8px]">
          <p className=" text-[#FFFFFFBF] text-[25px] ">Network Fee:</p>
          <p className="text-[25px]">
            <span className="text-white">
              ~{files.length !== 0 && 366881} sats
            </span>
            <span className="text-[#FFFFFFBF]  ">
              ~${files.length !== 0 && 146.48}
            </span>
          </p>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center  mt-[8px] border-t border-b ">
          <p className=" text-[#FFFFFFBF] text-[25px] flex  items-center">
            Servise Base fee:{" "}
            <Image className="ms-[3px] " src={i_icon} alt="question" />
          </p>
          <p className="text-[25px]">
            <span className="text-white">
              ~{files.length !== 0 && 1999} sats
            </span>
            <span className="text-[#FFFFFFBF]  ">
              ~${files.length !== 0 && 0.8}
            </span>
          </p>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center  mt-[8px]">
          <p className=" text-white text-[25px] flex   items-center">
            Total: <Image className="ms-[3px]" src={i_icon} alt="question" />
          </p>
          <p className="text-[25px]">
            <del className="text-white">
              {" "}
              <span className="text-white">
                ~{files.length !== 0 && 314258} sats
              </span>
            </del>
            <span className="text-[#FFFFFFBF]  ">
              ~${files.length !== 0 && 124.9}
            </span>
          </p>
        </div>
        <div>
          <p className="text-[25px] text-[#FFB800] text-right">
            ~{files.length !== 0 && 314000} sats ~${files.length !== 0 && 124.8}
          </p>
        </div>
      </div>
    </>
  );
};

export default UploadDetails;
