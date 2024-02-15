import React from 'react'
import gorrow1 from '../../assets/gif1.png'
import gorrow2 from '../../assets/gif2.png'
import gorrow3 from '../../assets/gitf3.png'
import gorrow4 from '../../assets/gif4.png'
import gorrow5 from '../../assets/gif5.png'
import gorrow6 from '../../assets/gif6.png'
import gorrow7 from '../../assets/gif7.png'
import Image from 'next/image';
import { BiBitcoin } from "react-icons/bi";
import BorrowModal from './BorrowModal'

const datas = [
    {
        id: 1,
        imageSrc: gorrow1,
        name: "Trex",
        bestOffer: 0.4,
        floor: " 0.5",
        ratio: 62,
        duration: 16,

        interest: 2.1
    },
    {
        id: 2,
        imageSrc: gorrow2,
        name: "Tetris",
        bestOffer: 0.18,
        floor: "0.2",
        ratio: 59,
        duration: 16,

        interest: 2.2
    },
    {
        id: 3,
        imageSrc: gorrow3,
        name: "To The Moon",
        bestOffer: 0.25,
        floor: "0.31",
        ratio: 65,
        duration: 16,

        interest: 3
    },
    {
        id: 4,
        imageSrc: gorrow4,
        name: "NodeMonkes",
        bestOffer: 0.115,
        floor: "0.167",
        ratio: 68.86,
        duration: 16,

        interest: 2.85
    },
    {
        id: 5,
        imageSrc: gorrow5,
        name: "Bitcoin Frogs",
        bestOffer: 0.101222,
        floor: "0.186",
        ratio: 54.42,
        duration: 16,

        interest: 2.85
    },
    {
        id: 6,
        imageSrc: gorrow6,
        name: "Oridinal Maxi Bis(omb)",
        bestOffer: 0.270421,
        floor: "0.51",
        ratio: 53.02,
        duration: 16,

        interest: 2.85
    },
    {
        id: 7,
        imageSrc: gorrow7,
        name: "Bitsmaps",
        bestOffer: 0.00301,
        floor: "0.004709",
        ratio: 63.92,
        duration: 10,
        interest: 3.24
    }
]

const BorrowTable = () => {

    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-white mt-[41px] w-full">
                <table class="w-full text-sm text-left ">
                    <tbody>
                        {
                            datas.map(data => (
                                <>
                                    <tr key={data.id} class="bg-[#0000003F] lg:text-[24px] text-base border-b border-[#9E6519] text-white hover:bg-[#ff00000F] ">

                                        <td class="ps-[13px] py-[18px] flex gap-[21px] items-center ">
                                            <Image className='w-[58px] h-[58px] rounded-[15px]' src={data.imageSrc} alt="collect1" />
                                            <span>{data.name}</span>
                                        </td>
                                        <td class=" py-[18px]  items-center  ">
                                            <div className='w-[130px]'>
                                                <p className='text-center text-xl'> Best Offer</p>
                                                <p className='flex text-center text-xl text-white gap-[8px] items-center justify-center' style={{ marginTop: "1.15px" }} >
                                                    <span ><BiBitcoin className='border rounded-[50%] text-[18px]' /></span>
                                                    {data.bestOffer}</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='w-[61px]'>
                                                <p className='text-center text-xl'>Floor </p>
                                                <p className='flex text-center text-xl text-white gap-[8px] items-center justify-center' style={{ marginTop: "1.15px" }} >     <span ><BiBitcoin className='border rounded-[50%] text-[18px]' /></span>{data.floor}</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='w-[114px]'>
                                                <p className='text-center text-xl'>LVT Ratio </p>
                                                <p className='text-center text-xl text-white' style={{ marginTop: "1.15px" }} >{data.ratio}%</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='w-[114px]'>
                                                <p className='text-center text-xl'>Duration </p>
                                                <p className='text-center text-xl text-white' style={{ marginTop: "1.15px" }} >  {data.duration} Days</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='w-[114px]'>
                                                <p className='text-center text-xl'>Interest </p>
                                                <p className='text-center text-xl text-white' style={{ marginTop: "1.15px" }} > {data.interest}%</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-end">
                                            <div className='w-[114px]'>
                                                <button className='border text-xl border-[#9E6519] halfBorder bg-[#30200c] px-[21px] h-[40px] ' onClick={() => document.getElementById('borrow_modal').showModal()}>Borrow</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <BorrowModal />
        </>
    )
}

export default BorrowTable