import React from 'react'
import Close from '../assets/close.svg'
import Min from '../assets/minimize.svg'
import Max from '../assets/maximize.svg'
import { FaDiscord } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='bg-[#1e2124] w-screen h-[25px]'>
        <div>
            <div>
                <img className='cursor-pointer hover:bg-[#FF3333] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Close} alt="Exit" />
                <img className='cursor-pointer hover:bg-[#5C5C5C] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Max} alt="Min" />
                <img className=' hover:bg-[#5C5C5C] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Min} alt="Max" />
            </div>
        <h1 className='font-bold text-[#eeeeee] pl-2 cursor-default'>
            Discord
        </h1>
        </div>
        <div className='bg-[#1e2124] w-[65px] h-screen display-block m-0 px-2 py-2'>
          <div className='cursor-pointer bg-[#424549] h-12 w-12 rounded-full hoverIcon hover:bg-[#5865F2] flex justify-center items-center'>
            <FaDiscord style={{color: '#F6F6F6', fontSize: '32px'}} />
          </div>
        </div>
    </div>
  )
}

export default Topbar