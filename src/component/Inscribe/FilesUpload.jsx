import React, { useState } from "react";
import DragDrop from "./DragDrop";
import { useDropzone } from "react-dropzone";

const FilesUpload = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleRemoveFile = (index) => {
    const updatedFiles = [...droppedFiles];
    updatedFiles.splice(index, 1);
    setDroppedFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      setDroppedFiles(files);
    },
  });

  const clearDroppedFiles = () => {
    setDroppedFiles([]);
  };

  return (
    <>
      <div className="max-w-[923px] file_wrapper py-[9px] px-[11px] mx-auto  ">
        <div className="flex gap-[35px] justify-center mt-[32px] mb-[23px]">
          <button className="text-[#FFA800]  text-[25px] font-normal border-t-[2px] border-[#FFA800] ">
            To single address
          </button>
          <button className="text-[#FFFFFFBF]  text-[25px] font-normal ">
            To multiple addresses
          </button>
        </div>

        <div>
          <input
            type="text"
            className="text-[25px] font-normal text-[#6b6c6d] py-[8px] w-full  px-[12px] bg-[#00000080] border-[#FFFAFA]
            halfBorder "
            placeholder="Provide the address to receive The inscription"
          />
          <div className="flex justify-between items-center mt-[11px] mb-[30px]">
            <p className="text-white text-[25px] font-normal">
              {droppedFiles.length} Files
            </p>
            {droppedFiles.length !== 0 && (
              <button
                className="halfBorder bg-[#00000080] text-[25px] font-normal text-[#FFFFFFBF] px-[16px] "
                onClick={clearDroppedFiles}>
                remove all
              </button>
            )}
          </div>
        </div>
        {/* drag drop */}
        <DragDrop
          acceptedFiles={droppedFiles}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          clearDroppedFiles={clearDroppedFiles}
          removeOneFile={handleRemoveFile}
        />
      </div>
    </>
  );
};

export default FilesUpload;
