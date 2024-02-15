"use client"

import React, { useState } from 'react'
import FilesHeader from './FilesHeader'
import FilesUpload from './FilesUpload'
import Brotwenty from './Brotwenty'

const Inscribe = () => {

    const [activeTab, setActiveTab] = useState('files');

    const handleTabs = (tab) => {
        console.log("Click the TAB", tab)
        setActiveTab(tab);
    };

    return (
        <>
            <div className='lg:mt-[90px] mt-[116px] overflow-x-hidden'>
                
                <FilesHeader activeTab={activeTab} onTabHandler={handleTabs} />

                {activeTab === 'files' ? (
                    <>
                        <FilesUpload />
                        <div className="text-center">
                            <button className='text-white bg-[#FFB800] shadow-[#00000059] text-[27px] h-[50px] px-[20px] mt-[10px] ' >Sumbit & Pay Invoice</button>
                        </div>
                    </>
                ) : activeTab === 'brc20' ? (
                    <>
                        <Brotwenty />
                    </>
                ) : null}

            </div>

        </>
    )
}

export default Inscribe