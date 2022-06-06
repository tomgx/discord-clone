import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

const Channelbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="select-none rounded-l relative left-[60px] w-[220px] h-screen bg-[#282b30]">
      <div
        className="cursor-pointer h-[40px] w-[220px] shadow rounded-l"
        onClick={handleClick}
        style={{ backgroundColor: toggle ? "#282b30" : "#6d6d6d2d" }}
      >
        <h1 className="font-bold text-[#eee] py-2 pl-4 hover:bg-[#6d6d6d2d] duration-300 rounded-l">
          More Information
          {toggle ? (
            <IoIosArrowDown
              className="absolute top-3 right-5"
              style={{ color: "#eee" }}
            />
          ) : (
            <IoMdClose
              className="absolute top-3 right-5"
              style={{ color: "#eee" }}
            />
          )}
        </h1>

        {toggle ? null : (
          <div className="z-50 bg-[#111111] h-[230px] w-[200px] absolute top-[48px] left-[10px] rounded-lg">
            <ul className="flex justify-center py-2">
              <a href="https://github.com/tomgx">
                <li className="text-[#eee] w-[180px] px-3 py-2 hover:bg-[#5865F2] duration-300 rounded-lg">
                  Github Profile
                  <FaGithub className="absolute top-5 right-6" />
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Channelbar;
