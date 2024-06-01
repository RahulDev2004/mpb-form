'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import pricingImg from '@/static/pricing.png'
import { Contact } from 'lucide-react'
import ContactForm from './form'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

interface PricingCardProps {
    recommended: boolean
    title: string
    price: string
    description: string
    color: string
}

export function PricingCard({
    recommended,
    title,
    price,
    description,
    color,
}: PricingCardProps) {
    const createMarkup = () => {
        return { __html: description.replace(/\n/g, '<br>') }
    }

    
    return (
        <div
            className='bg-white rounded-2xl w-72 text-black font-semibold pt-8 flex flex-col items-center px-4 gap-4'
            style={{ height: '420px' }}
        >
            <h1
                className='text-center text-4xl font-bold'
                style={{ color: color }}
            >
                {price}
            </h1>
            <div
                className='text-white py-2 rounded-md w-full'
                style={{ background: color }}
            >
                <h2 className='text-center'>{title}</h2>
            </div>
            <div className='flex-grow flex items-center'>
                <p
                    className='text-center h-fit'
                    dangerouslySetInnerHTML={createMarkup()}
                ></p>
            </div>
            <div className='flex justify-center mb-6'>
                <button className='mr-auto ml-auto py-2 px-8 rounded-full bg-[#EC3D28] w-fit text-white text-xl font-semibold uppercase'>
                    Select
                </button>
            </div>
        </div>
    )
}

export default function NewPricing() {
    const [Purchase, setPurchase] = useState(false)

    return (

<section className='flex flex-col items-center bg-[#F47217] justify-center relative'>
     <header id="home" className="flex flex-col md:flex-row w-full max-w-6xl py-16 items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-black text-[#fff] md:text-8xl'>Lets Connect!</h1>
          <h2 className='text-md text-[#fff] md:text-2xl'>Fast track your Funding Journey</h2>
        </div>
        <p className='max-w-md text-sm md:text-base text-[#fff]'>Schedule a FREE Introductory call with our experts, Today!</p>
        <div className='w-full flex items-center justify-center md:justify-start gap-4'>
         <a href='http://calendly.com/amrish-kcw'> <button className='w-48 h-12 text-sm sm:text-base rounded bg-[#5F248E] text-[#fff] font-bold hover:bg-fuchsia-700 hover:text-white transition-colors'>Schedule Now !</button> </a>
          
        </div>
      </div>

      <div className='price w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-end relative '>
      <div className='table premium bg-[#fff] p-6'>
                  <div className='price-section'>
                      <div className='price-area'>
                          <div className='inner-area'>
                              <span className='price'>₹2,199</span>
                          </div>
                      </div>
                  </div>
                  <div className='package-name' />
                  <ul className='features'>
                      <li>
                          <span className='list-name'>
                              Grant Proposal Template
                          </span>
                          <span className='icon check'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                      <li>
                          <span className='list-name'>Consultation Call</span>
                          <span className='icon check'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                      <li>
                          <span className='list-name'>
                              Top 5 Eligible Grants
                          </span>
                          <span className='icon cross'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                      <li>
                          <span className='list-name'>
                              Competitor Analysis
                          </span>
                          <span className='icon cross'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                      <li>
                          <span className='list-name'>Grant Roadmap</span>
                          <span className='icon cross'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                      <li>
                          <span className='list-name'>
                              Application best Practices
                          </span>
                          <span className='icon cross'>
                              <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='#00ff11'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='lucide lucide-check'
                              >
                                  <path d='M20 6 9 17l-5-5' />
                              </svg>
                          </span>
                      </li>
                  </ul>
                  <a href='#hero'> <div className='btn'>
                  <button>Purchase</button>
                  </div></a>
              </div>     
      </div>

    </header>
    </section>
    )
}