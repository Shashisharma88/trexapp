import React from 'react'

import border from '../../assets/bannerborder.svg'
import Image from 'next/image'


const Season = ({ img, textImage, m }) => {
    return (

        <>
            <div className=" col-span-12 lg:col-span-4 ">
                {/* pb-[94px] */}
                <div className="relative flex flex-col items-center pb-[94px] md:pb-0">
                    <Image style={{width:"180px" ,height:"180px"}} src={img} alt="gif1" />
                    <div className="absolute top-[-38px] left-[70px] ">
                        <Image width="" height="" src={border} alt="gif1" style={{width:"275px" ,height:"275px"}} />
                    </div>
                    <div className={`mt-[36px]`}>
                        <Image width="" height="" src={textImage} alt="gif1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Season