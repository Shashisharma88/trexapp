import React from 'react'
import collectionhead from '../../assets/collectionbg.png'
import collection1 from '../../assets/gif1.png'
import collection2 from '../../assets/trex2.png'
import collection3 from '../../assets/trex3.png'

import Image from 'next/image';

const datas = [
    {
        id: 1,
        imageSrc: collection1,
        name: "Trex",
        btcAmount: 30.1,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.5,
        usdValue: "21481.00",
        count1: 231,
        count2: 2009
    },
    {
        id: 2,
        imageSrc: collection2,
        name: "Tetris",
        btcAmount: 12.1,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.2,
        usdValue: "8592.40",
        count1: 125,
        count2: 2009
    },
    {
        id: 3,
        imageSrc: collection3,
        name: "To The Moon",
        btcAmount: 33,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.31,
        usdValue: "13318.22",
        count1: 665,
        count2: 2009
    },

];

const TrexCollectionTable = () => {

    return (
        <>
            <div class="relative overflow-x-auto h-[700px] text-white ">
                <table class="w-full text-sm text-left  lg:text-[24px] text-[16px]">
                    <thead class="  text-white  font-normal  h-[90px]  bg-transparent" style={{ backgroundImage: `url(${collectionhead.src})` }}  >
                        <tr>
                            <th  class=" lg:ps-[52px] ps-[20px]">
                                #
                            </th>
                            <th className='lg:ps-0 ps-[30px]'>
                                Collection
                            </th>
                            <th className='lg:ps-0 ps-[30px]'>
                                Volume(all)
                            </th>
                            <th className='lg:ps-0 ps-[30px]'>
                                Floor Price
                            </th>
                            <th className='lg:ps-0 ps-[30px]'>
                                Listed
                            </th>
                            <th className='lg:ps-0 ps-[30px]'>
                                Items
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => (
                                <>
                                    <tr key={data.id} class="bg-transparent border-b border-[#9E6519] text-white hover:bg-[#ff00000F] ">
                                        <th scope="row" class=" lg:ps-[52px] ps-[10px] ">
                                            {data.id}
                                        </th>
                                        <td class=" py-[18px] flex flex-wrap gap-[21px] items-center ">
                                            <Image className='w-[90px] h-[90px] rounded-[15px]' src={data.imageSrc} alt="collect1" />
                                            <span>{data.name}</span>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='lg:w-[128px] w-full'>
                                                <p className='text-right'> {data.btcAmount} <span className='text-[#FFFFFF8C]  ps-[9px]'>BTC</span></p>
                                                <p className='text-[#52FF00] text-right' style={{ marginTop: "1.15px" }} >100.00%</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='lg:w-[130px] w-full text-right'>
                                                <p  >{data.usdAmount}  <span className='text-[#FFFFFF8C]  text-right '>BTC</span></p>
                                                <p className='text-[#FFFFFFCC] text-right' style={{ marginTop: "1.15px" }} >$ {data.usdValue}</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px] text-right">
                                            <div className='lg:w-[81px] w-full'>

                                                <p  >{data.count1} </p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px] text-right">
                                            <div className='lg:w-[75px] w-full'>
                                                <p>{data.count2} </p>
                                            </div>
                                        </td>
                                    </tr>

                                </>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TrexCollectionTable