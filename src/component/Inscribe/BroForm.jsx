'use client'
import React, { useState } from 'react';

import Deploy from './Deploy';
import Transfer from './Transfer';
import Mint from './Mint';
import BRoTab from './BRoTab';

export const BroForm = () => {


    const [activeTab, setActiveTab] = useState('Mint');

    const handleTabs = (tab) => {
        console.log("Click the TAB", tab)
        setActiveTab(tab);
    };

    return (
        <>
            <BRoTab onTab={handleTabs} activeTab={activeTab} />
            {
                activeTab === 'Mint' &&
                <>

                    <Mint />

                </>
            }
            {
                activeTab === 'Deploy' &&
                <>
                    <Deploy />
                </>
            }
            {
                activeTab === 'Tranfer' &&
                <>
                    <Transfer />
                </>
            }
        </>
    );
};
