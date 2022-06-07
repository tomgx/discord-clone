import React from "react";
import Logo from "../assets/profile-pic.jpg";

const MessageArea = () => {
  return (
    <div className="fixed top-[74px] left-[312px] h-full w-screen bg-[#36393e] z-0">
      <div className="overflow-y-scroll">
        <div className="absolute top-6 left-6">
          <ul className="">
            <li>
              <div className="absolute rounded-full h-[50px] w-[50px] hover:bg-[#00000048] duration-300 ease-in"></div>
              <img
                className="select-none cursor-default rounded-full shadow-md h-[50px] w-[50px]"
                src={Logo}
                alt="profile-pic"
              />
              <h1 className="select-none absolute top-0 left-16 font-bold text-[#66fda7]">
                tomgx
              </h1>
              <p className="relative -top-[45px] left-28 text-xs text-[#949494]">
                Today at 14:44
              </p>
              <p className="relative -top-[45px] left-16 text-[#eee] text-base tracking-wide">
                Hello
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
