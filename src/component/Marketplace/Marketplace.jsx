'use client'

import React, { useState } from 'react'
import CollectionHeader from './CollectionHeader'
import CollectionTable from './CollectionTable'
import TrexCollectionTable from './TrexCollectionTable'

const Marketplace = () => {

    const [activeTab, setActiveTab] = useState('trexCollection');

    const handleTabs = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='marketplace_wrapper'>
                <CollectionHeader activeTab={activeTab} handleCollectionTabs={handleTabs} />

                {activeTab === 'trexCollection' && <>
                    <TrexCollectionTable />
                </>}
                {activeTab === 'collection' && <>
                    <CollectionTable />
                </>}
            </div>

        </>
    )
}

export default Marketplace