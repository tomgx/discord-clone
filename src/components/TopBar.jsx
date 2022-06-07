import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { HiHashtag } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="bg-[#1e2124] w-screen h-[24px] select-none">
      <div>
        <div>
          <div className="cursor-pointer hover:bg-[#FF3333] float-right position-absolute px-[4px] py-[4px] w-[25px] h-[25px]">
            <VscChromeClose style={{ color: "#eee" }} />
          </div>
          <div className="cursor-pointer hover:bg-[#5C5C5C] float-right position-absolute px-[4px] py-[4px] w-[25px] h-[25px]">
            <VscChromeMaximize style={{ color: "#eee" }} />
          </div>
          <div className="cursor-pointer hover:bg-[#5C5C5C] float-right position-absolute px-[4px] py-[4px] w-[25px] h-[25px]">
            <VscChromeMinimize style={{ color: "#eee" }} />
          </div>
        </div>
        <h1 className="select-none font-bold text-[#eeeeee] pl-4 cursor-default">
          tomgx
        </h1>
      </div>

      <div className="bg-[#1e2124] w-[75px] h-screen display-block m-0 px-2 py-2">
        <ul>
          <li className="pb-1">
            <div className="cursor-pointer bg-[#424549] h-14 w-14 rounded-full hoverIcon hover:bg-[#5865F2] flex justify-center items-center">
              <FaDiscord
                style={{ color: "#F6F6F6", fontSize: "32px" }}
                className=""
              />
            </div>
          </li>

          <li className="pb-1">
            <div className="cursor-pointer bg-[#424549] h-14 w-14 rounded-full hoverIcon hover:bg-[#5865F2] flex justify-center items-center">
              <IoIosAdd style={{ color: "#F6F6F6", fontSize: "32px" }} />
            </div>
          </li>
        </ul>
        <div className="h-[50px] w-screen mt-[-128px] ml-[200px] shadow-md">
          <div className="absolute top-[36px] left-[330px]  z-50">
            <HiHashtag style={{ color: "#eee" }} className="h-6 w-6" />
            <h1 className="absolute -top-1 left-8 font-semibold text-xl text-[#eee]">
              general
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
