import React from 'react';

const FilesHeader = ({ activeTab, onTabHandler }) => {
  return (
    <>
      <div className='flex flex-wrap gap-[20px] lg:gap-[54px] justify-center  '>
        <button
          onClick={() => onTabHandler('files')} 
          className={`text-[28px] ${
            activeTab === 'files' ? 'text-[#FFA800]' : 'text-[#FFFF]'
          } font-normal bg-[#00000050] border border-dashed ${
            activeTab === 'files' ? 'border-[#FFA800]' : 'border-[#FFF]'
          } px-[36px]`}
        >
          Files
        </button>
        <button
          onClick={() => onTabHandler('brc20')}
          className={`text-[28px] ${
            activeTab === 'brc20' ? 'text-[#FFA800]' : 'text-[#FFFF]'
          } font-normal bg-[#00000050] border border-dashed ${
            activeTab === 'brc20' ? 'border-[#FFA800]' : 'border-[#FFF]'
          } px-[36px]`}
        >
          brc-20
        </button>
      </div>
    </>
  );
};

export default FilesHeader;
