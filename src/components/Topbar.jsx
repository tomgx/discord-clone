import React from 'react'
import Close from '../assets/close.svg'
import Min from '../assets/minimize.svg'
import Max from '../assets/maximize.svg'

const Topbar = () => {
  return (
    <div className='bg-[#1e2124] w-screen h-[25px]'>
        <div>
            <div>
                <img className='hover:bg-[#FF3333] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Close} alt="Exit" />
                <img className='hover:bg-[#5C5C5C] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Max} alt="Min" />
            <   img className='hover:bg-[#5C5C5C] float-right position-absolute px-[7px] py-[7px] w-[25px] h-[25px]' src={Min} alt="Max" />
            </div>
        <h1 className='font-bold text-[#eeeeee] pl-2 cursor-default'>
            Discord
        </h1>

        <div className=''>

        </div>


        </div>
    </div>
  )
}

export default Topbar