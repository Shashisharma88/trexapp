/* eslint-disable @next/next/no-img-element */

import upload from "../../assets/upload.png";
import UploadDetails from "./UploadDetails";

const DragDrop = ({
  acceptedFiles,
  getRootProps,
  getInputProps,
  removeOneFile,
}) => {
  return (
    <>
      <div
        {...getRootProps()}
        className="ps-[26px] pt-[23px] pb-[40px] border border-dashed lg:h-[170px] h-auto bg-[#D9D9D900] mb-[17px]">
        <input {...getInputProps()} />
        <div className="flex gap-[18px] items-center cursor-pointer">
          <img src={upload.src} alt="upload" />
          <div>
            <p className="text-white text-[25px]">
              drag and drop your files here, or click to select files
            </p>
            <p className="text-[#FFFFFFBF] text-[23px]">
              .jpeg, .webp, .png, .gif, .txt, .mp3, .mp4(h264) + more!
            </p>
          </div>
        </div>
      </div>
      {/* Upload details */}
      <UploadDetails removeOneFile={removeOneFile} files={acceptedFiles} />
    </>
  );
};

export default DragDrop;
