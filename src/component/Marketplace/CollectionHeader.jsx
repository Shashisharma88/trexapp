'use client'

import React, { useState } from 'react'

const CollectionHeader = ({ handleCollectionTabs, activeTab }) => {

    const [collectionActiveTab, setCollectionActiveTab] = useState('All')

    const handleCollectionFilterTabs = (tab) => {
        setCollectionActiveTab(tab)
    }


    return (
        <>
            <div className=' lg:pe-[18px] flex lg:flex-nowrap flex-wrap lg:justify-between justify-center items-center '>
                <div className='text-center mb-[15px]'>
                    <button onClick={() => handleCollectionTabs('trexCollection')}
                        className={`${activeTab === "trexCollection" ? "text-[#FBA218] border border-dashed border-[#FBA218]" : "text-white"} px-[24px] lg:text-[35px] text-[30px] `} >TREX Collections</button>

                    <button onClick={() => handleCollectionTabs('collection')}
                        className={`${activeTab === "collection" ? "text-[#FBA218] border border-dashed border-[#FBA218]" : "text-white"} px-[24px] lg:text-[35px] text-[30px] `} >Collections</button>
                </div>

                <div className='flex gap-[21px] items-center lg:justify-start justify-center lg:flex-nowrap flex-wrap '>
                    <div className='bg-[#1A1A1A] text-white  text-[20px] flex  '>
                        <button onClick={() => handleCollectionFilterTabs('6hr')} className={`px-[18px] py-[7px] my-[3px] ms-[3px] ${collectionActiveTab === '6hr' ? 'bg-[#FFFFFF1A] text-[#FFA800] ' : ''}`}>6h</button>

                        <button onClick={() => handleCollectionFilterTabs('24hr')} className={`px-[18px] py-[7px] my-[3px] ${collectionActiveTab === '24hr' ? 'bg-[#FFFFFF1A] text-[#FFA800]' : ''}`}>24h</button>

                        <button onClick={() => handleCollectionFilterTabs('7d')} className={`px-[18px] py-[7px] my-[3px] ${collectionActiveTab === '7d' ? 'bg-[#FFFFFF1A] text-[#FFA800]' : ''}`}>7d</button>

                        <button onClick={() => handleCollectionFilterTabs('All')} className={`px-[18px] py-[7px] my-[3px] me-[3px] ${collectionActiveTab === 'All' ? 'bg-[#FFFFFF1A] text-[#FFA800]' : ''}`}>All</button>

                    </div>
                    <button className='border border-[#FFA800] text-[20px] font-normal text-[#FFA800] py-[10px] px-[26px] transition delay-100 ease-in-out
                 hover:bg-[#FFA800] hover:text-black '>View More</button>
                </div>
            </div>
        </>
    )
}

export default CollectionHeader