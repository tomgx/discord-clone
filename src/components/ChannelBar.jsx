import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

const Channelbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="select-none relative left-[72px] w-[240px] h-screen bg-[#282b30]">
      <div
        className="cursor-pointer h-[50px] w-[240px] shadow rounded-tl-lg"
        onClick={handleClick}
        style={{ backgroundColor: toggle ? "#282b30" : "#6d6d6d2d" }}
      >
        <h1 className="font-bold text-[#eee] py-[11px] pl-4 hover:bg-[#6d6d6d2d] duration-300 rounded-tl-lg text-lg">
          More Information
          {toggle ? (
            <IoIosArrowDown
              className="absolute top-4 right-5"
              style={{ color: "#eee" }}
            />
          ) : (
            <IoMdClose
              className="absolute top-4 right-5"
              style={{ color: "#eee" }}
            />
          )}
        </h1>

        {toggle ? null : (
          <div className="z-50 bg-[#111111] h-[260px] w-[220px] absolute top-[58px] left-[10px] rounded-lg">
            <ul className="flex justify-center py-2">
              <a href="https://github.com/tomgx">
                <li className="text-[#eee] w-[200px] px-3 py-2 hover:bg-[#5865F2] duration-300 rounded-lg text-lg">
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