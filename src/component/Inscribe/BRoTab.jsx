import Image from 'next/image'
import React from 'react'
import check from '../../assets/chec.png';

const BRoTab = ({ onTab, activeTab }) => {

    return (
        <>
            <div className='lg:ps-[100px] ms-[41px] lg:pe-[151px]'>
                <div className='flex lg:flex-nowrap flex-wrap lg:gap-0 gap-5 justify-around mb-[38px]'>
                    <div onClick={() => onTab('Mint')} className='text-[28px] text-white flex gap-[4px] items-center cursor-pointer '>
                        <button
                            className='me-[11px] h-[29px] w-[29px] border relative'
                            type="button"
                        >
                            {activeTab === 'Mint' ? <Image src={check} alt="check" layout="fill" objectFit="contain" /> : ""}
                        </button>
                        <p>Mint</p>
                    </div>
                    <div onClick={() => onTab('Deploy')} className='cursor-pointer text-[28px] text-white flex gap-[4px] items-center'>
                        <button
                            className='me-[11px] h-[29px] border w-[29px] relative'
                            type="button"
                        >
                            {activeTab === 'Deploy' ? <Image src={check} alt="check" layout="fill" objectFit="contain" /> : ""}
                        </button>
                        <p>Deploy</p>
                    </div>
                    <div onClick={() => onTab('Tranfer')} className='cursor-pointer text-[28px] text-white flex gap-[4px] items-center'>
                        <button
                            className={`me-[11px] h-[29px]  ${!activeTab === 'Tranfer' && 'border'} border  w-[29px] relative`}
                            type="button"

                        >
                            {activeTab === 'Tranfer' ? <Image src={check} alt="check" layout="fill" objectFit="contain" /> : ""}
                        </button>
                        <p>Tranfer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BRoTab