'use client'

import React, { useState } from 'react'
import Range from '../Range/Range'

const Mint = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);

    };

    return (
        <>
            <div className='lg:ps-[100px] p-0 lg:pe-[151px]'>

                <div className='mb-[37px]'>
                    <div className='flex gap-[28px] mb-[26px] '>
                        <label className='text-[28px] w-[168px]  text-right text-white'>Tick</label>
                        <input defaultValue="ttt" type="text" className='ps-[19px] text-[28px] h-[43px] max-w-[428px] w-full  bg-gray-300 bg-opacity-0 border text-white border-white border-solid' />
                    </div>
                    <div className='flex gap-[28px]'>
                        <label className='text-[28px] w-[168px] text-right  text-white'>Amount</label>
                        <input defaultValue="1000" type="text" className='ps-[19px] text-[28px] h-[43px] bg-gray-300 max-w-[428px] w-full bg-opacity-0 border text-white border-white border-solid' />
                    </div>
                </div>
            </div>

            <div className="bg-white h-[0.5px]">
            </div>

            <div className='lg:ps-[100px] p-0 lg:pe-[151px]'>
                <div className='lg:ps-[0] mt-[17px] flex lg:flex-nowrap flex-wrap items-center  mb-[17px] '>
                    <label className='text-[28px] w-[168px] text-white whitespace-normal text-right '>Repeat Min</label>
                    <input type="text" value={sliderValue} className='ps-[19px] text-[28px] h-[43px] ms-[28px] bg-gray-300 max-w-[112px] w-full bg-opacity-0 border text-white border-white border-solid  ' />
                    <div className='ms-[28px]'>
                        <Range value={sliderValue} onChange={handleSliderChange} />
                    </div>
                </div>
                <div className="flex justify-end me-[20px] ">
                    <button className='bg-[#FFA800] text-white hover:text-[#FFA800] max-w-[428px] w-full h-[51px]  text-[28px] hover:bg-transparent border border-[#FFA800] '>Next</button>
                </div>

            </div>


        </>
    )
}

export default Mint