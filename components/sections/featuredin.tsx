"use client";

import React from 'react';


const Featuredin = () => {
    return (
        <div>
            <div className="text-black py-8">
                <h2 className="text-[#5F248E] text-2xl font-bold text-center pb-4">FEATURED IN</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <img src="/featuredin/forbes.png" alt="forbes" className="h-[120px] w-[170px] mb-0"/>
                    <img src="/featuredin/yourstory.png" alt="yourstory" className="h-[120px] w-[170px] mb-0"/>
                    <img src="/featuredin/innsurge.png" alt="inc42" className="h-[120px] w-[170px] mb-0"/>
                    <img src="/featuredin/indianachiever.png" alt="techinasia" className="h-[120px] w-[170px] mb-0"/>
                    <img src="/featuredin/passionvista.png" alt="entrepreneur" className="h-[120px] w-[170px] mb-0"/>
                    <img src="/featuredin/internet2.png" alt="techinasia" className="h-[120px] w-[170px] mb-0"/>
                </div>
            </div>
        </div>
    )
}

export default Featuredin;