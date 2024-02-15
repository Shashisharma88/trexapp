import Image from "next/image";
import close from "../../assets/close.png";

const FileDetails = ({ file, index ,removeOneFile}) => {

  return (
    <div className=" bg-[#00000080]  py-[13px] px-[15px]  mb-[8px] ">
      <div className="bg-[#FFFFFF1A] ps-[16px] pe-[6px] py-[13px] flex justify-between items-center ">
        <div className="flex gap-[6px] items-center">
          <p className="text-[25px] text-white border w-[26px] h-[26px] flex justify-center items-center ">
            {index + 1}
          </p>
          <p className="text-white text-[25px]">{file.name}</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <p className="text-[#FFFFFFB8] text-[25px]  ">
            {(file.size / 1024).toFixed(3)} kb
          </p>
          <button onClick={removeOneFile}>
            <Image src={close} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default FileDetails;
