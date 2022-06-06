import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiHashtag } from "react-icons/hi";

const Textchannels = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="select-none absolute top-[65px] left-[57px] z-10 py-[22px] pl-12">
      <h1
        className="cursor-pointer text-sm font-bold text-[#eee] hover:text-[#fff]"
        onClick={handleClick}
      >
        TEXT CHANNELS
        {toggle ? (
          <IoIosArrowDown className="duration-300 absolute top-[25px] left-[25px]" />
        ) : (
          <IoIosArrowDown className="-rotate-90 duration-300 absolute top-[25px] left-[25px]" />
        )}
      </h1>
      <div className="py-2">
        {toggle ? (
          <div>
            <div className="cursor-pointer absolute top-[50px] left-[25px] h-[30px] w-[220px] bg-[#a3a3a352] rounded-sm">
              <HiHashtag
                style={{ color: "#eee" }}
                className="absolute top-[4.5px] left-[15px]"
              />
              <h1 className="absolute left-[40px] font-medium text-[#eee] text-lg">
                general
              </h1>
              <div className="absolute top-[32px] hover:bg-[#a3a3a31e] duration-300 h-[30px] w-[220px] rounded-sm">
                <HiHashtag
                  style={{ color: "#eee" }}
                  className="absolute top-[4.5px] left-[15px]"
                />
                <h1 className="absolute left-[40px] top-0 font-medium text-[#eee] text-lg">
                  media
                </h1>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Textchannels;
