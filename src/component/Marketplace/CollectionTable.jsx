import React from 'react'
import collectionhead from '../../assets/collectionbg.png'
import collection1 from '../../assets/collection1.webp'
import collection2 from '../../assets/collection2.png'
import collection3 from '../../assets/collection3.png'
import collection4 from '../../assets/collection4.png'
import collection5 from '../../assets/collection5.png'
import Image from 'next/image';

const datas = [
    {
        id: 1,
        imageSrc: collection1,
        name: "Bitcoin Frogs",
        btcAmount: 29.133037,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.21,
        usdValue: 8356.53,
        count1: 65,
        count2: 10000
    },
    {
        id: 2,
        imageSrc: collection2,
        name: "UniSat OG PASS",
        btcAmount: 22.1655049,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.4,
        usdValue: 15917.20,
        count1: 37,
        count2: 189
    },
    {
        id: 3,
        imageSrc: collection3,
        name: "Bitcoin Apes",
        btcAmount: 13.41218549,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.012,
        usdValue: 477.52,
        count1: 583,
        count2: 1000
    },
    {
        id: 4,
        imageSrc: collection4,
        name: "Goosinals",
        btcAmount: 7.72704769,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.033,
        usdValue: 1313.17,
        count1: 130,
        count2: 1000
    },
    {
        id: 5,
        imageSrc: collection5,
        name: "Bitcoin Punks",
        btcAmount: 7.47197394,
        btcUnit: "BTC",
        btcPercentage: 100.00,
        usdAmount: 0.046,
        usdValue: 1830.48,
        count1: 82,
        count2: 1000
    }
];

const CollectionTable = () => {
    return (
        <>
            <div class="relative overflow-x-auto text-white ">
                <table class="w-full text-sm text-left ">
                    <thead class=" text-white  font-normal  lg:text-[24px] text-[16px] h-[90px]  bg-transparent" style={{ backgroundImage: `url(${collectionhead.src})` }}  >
                        <tr>
                            <th scope="col" class=" lg:ps-[52px] ps-[20px]">
                                #
                            </th>
                            <th scope="col">
                                Collection
                            </th>
                            <th scope="col">
                                Volume(all)
                            </th>
                            <th scope="col">
                                Floor Price
                            </th>
                            <th scope="col">
                                Listed
                            </th>
                            <th scope="col">
                                Items
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => (
                                <>
                                    <tr key={data.id} class="bg-transparent text-[16px] lg:text-[24px] border-b border-[#9E6519] text-white hover:bg-[#ff00000F] ">
                                        <th scope="row" class="text-[25px] lg:ps-[52px] ps-[10px] ">
                                            {data.id}
                                        </th>
                                        <td class=" py-[18px] flex flex-wrap gap-[21px] items-center ">
                                            <Image className='w-[90px] h-[90px] rounded-[15px]' src={data.imageSrc} alt="collect1" />
                                            <span>{data.name}</span>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='lg:w-[188px] w-full'>
                                                <p className='text-right'> {data.btcAmount} <span className='text-[#FFFFFF8C]  ps-[9px]'>BTC</span></p>
                                                <p className='text-[#52FF00] text-right' style={{ marginTop: "1.15px" }} >{data.btcPercentage}%</p>
                                            </div>
                                        </td>
                                        <td class=" py-[18px]  items-center">
                                            <div className='lg:w-[114px] w-full text-right'>
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

export default CollectionTable