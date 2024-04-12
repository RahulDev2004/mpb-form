"use client";

import exp from 'constants';
import Image from 'next/image';
import React from 'react';


const Partners = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around items-center bg-[#f6f6f6] border-black border-b-2 px-8 py-8'>
                <h1 className='text-black text-xl mb-2 md:text-xl sm:text-3xl font-bold mr-4 text-nowrap'>ECOSYSTEM PARTNERS:</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 mt-4">
                    <Image src='/partners/rfd.png' alt='partner1' className='rounded mb-0' width={264} height={100}/>
                    <Image src='/partners/ipr.png' alt='partner2' className='rounded mb-0' width={264} height={100}/>
                    <Image src='/partners/rf.png' alt='partner3' className='rounded mb-0' width={264} height={100}/>
                    <Image src='/partners/sf.png' alt='partner4' className='rounded mb-0' width={264} height={100}/>
                </div>
            </div>
        </div>
    )
}

export default Partners;