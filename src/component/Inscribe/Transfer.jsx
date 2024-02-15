import React from 'react'

const Transfer = () => {
    return (
        <>
            <div className='lg:ps-[100px] p-0 lg:pe-[151px]'>

                <div className='mb-[37px]'>
                    <div className='flex gap-[28px] mb-[26px] '>
                        <label className='text-[28px] w-[200px]  text-right text-white'>Tick
                        </label>
                        <input value="ttt" type="text" className='ps-[19px] text-[28px] h-[43px] max-w-[428px] w-full  bg-gray-300 bg-opacity-0 border text-white border-white border-solid' />
                    </div>
                    <div className='flex gap-[28px]'>
                        <label className='text-[28px] w-[200px] text-right  text-white'>Total Supply</label>
                        <input defaultValue={21000000} type="text" className='ps-[19px]  text-[28px] h-[43px] bg-gray-300 max-w-[428px] w-full bg-opacity-0 border text-white border-white border-solid' />
                    </div>

                    <div className='flex justify-end'>
                        <button className='bg-[#FFA800] text-white hover:text-[#FFA800] mt-[31px] max-w-[428px] w-full h-[51px]  text-[28px] hover:bg-transparent border border-[#FFA800] '>Next</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Transfer