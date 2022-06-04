import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiHashtag } from "react-icons/hi";

const Textchannels = () => {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className='select-none absolute top-[65px] left-[60px] z-10 py-5 pl-6'>
            <h1 className='cursor-pointer text-xs font-bold text-[#eee] hover:text-[#fff]' onClick={handleClick}>
                TEXT CHANNELS
                {toggle ?
                    <IoIosArrowDown className='rotateArrow absolute top-[21px] left-[8px]' /> :
                    <IoIosArrowForward className='absolute top-[21px] left-[8px]' />
                }
            </h1>
            <div className='py-1'>
                {toggle ?
                    <div className='cursor-pointer absolute left-2 h-[26px] w-[205px] bg-[#a3a3a352] rounded-sm'>
                        <HiHashtag style={{ color: '#eee' }} className='absolute top-[4.5px] left-[4px]' />
                        <h1 className='absolute left-[20px] font-medium text-[#eee]'>
                            general
                        </h1>
                    </div> : null}
            </div>
        </div>
    )
}

export default Textchannels