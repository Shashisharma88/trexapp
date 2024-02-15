import React from 'react'
import { BroForm } from './BroForm'

const Brotwenty = () => {
  return (
    <>
      <div className='mt-[34px] file_wrapper border-t  max-w-[923px] file_wrapper   pb-[30px] px-[11px] mx-auto font-normal ' >
        <div className=' px-0 flex justify-center items-center mb-[38px] '>
         
          <p className='text-[28px] text-[#FFA800] border-t-[2px] border-[#FFA800] '>brc-20</p>
        </div>
        <div className='flex justify-center mb-[53px]'>
          <h5 className='text-[25px] text-[#FFFFFF99]  border-b border-[#FFFFFF99] w-fit '>Read more details about brc-20</h5>
        </div>

        <BroForm />
      </div>

    </>
  )
}

export default Brotwenty