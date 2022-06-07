import React, { useState } from "react";
import { FaCrown, FaRegNewspaper } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import Logo from "../assets/profile-pic.jpg";
import ClickAwayListener from "react-click-away-listener";

const UsersTab = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="select-none bg-[#282b30] fixed top-[74px] right-0 h-full w-[260px] z-20">
      <div>
        <h1 className="text-[#eee] font-bold text-sm absolute top-6 left-5">
          ONLINE - 1
        </h1>
      </div>
      <div className="flex justify-center">
        {toggle ? null : (
          <ClickAwayListener onClickAway={handleClick}>
            <div className="bg-[#1f1f1f] absolute top-[45px] -left-[290px] h-[400px] w-[280px] rounded-2xl userProfileBounce">
              <div className="bg-[#66fda7] absolute top-0 left-0 h-[60px] w-[280px] rounded-t-2xl"></div>
              <div className="bg-[#1f1f1f] absolute top-5 left-4 h-[80px] w-[80px] rounded-full">
                <div className=" bg-[#000000] w-[70px] h-[70px] rounded-full absolute top-[5px] left-[5px]">
                  <div className="w-[70px] h-[70px] rounded-full absolute top-[0px] left-[0px] showOnHover hover:bg-[#0000008a] duration-300 ease-in">
                    <a href="https://avatars.githubusercontent.com/u/25938766?v=4">
                      <div className="hide cursor-pointer flex justify-center items-center text-[10px] font-bold">
                        VIEW PICTURE
                      </div>{" "}
                    </a>
                  </div>
                  <img
                    className="rounded-full shadow-md "
                    src={Logo}
                    alt="profile-pic"
                  />
                  <div className="bg-[#1f1f1f] absolute h-5 w-5 top-[50px] left-[52px] rounded-full"></div>
                  <span class="animate-ping absolute inline-flex h-3 w-3 left-14 bottom-1 rounded-full bg-[#0f9e26] opacity-75"></span>
                  <span class="absolute inline-flex h-3 w-3 left-14 bottom-1 rounded-full bg-[#0f9e26] opacity-100"></span>
                </div>
                <div>
                  <h1 className="text-[#eee] absolute top-[90px] left-[5px] text-2xl font-bold ">
                    tomgx
                  </h1>
                  <h1 className="text-[#b9b9b9] absolute top-[94px] left-[65px] text-xl font-bold">
                    #0000
                  </h1>
                </div>
              </div>
              <div className="bg-[#6b6b6b] absolute top-[150px] left-0 h-[1px] w-[250px] mx-4"></div>
              <div className="absolute top-[160px] left-[18px]">
                <h1 className="text-[#eee] text-sm font-bold">ABOUT ME</h1>
                <p className="text-[#eee] text-sm"> Computer Science Student</p>
                <h1 className="text-[#eee] text-sm font-bold pt-3">
                  PLAYING A GAME
                </h1>
                <div className="bg-[#26262c] mt-2 h-[60px] w-[60px] rounded-2xl flex justify-center items-center tooltip">
                  <span className="tooltiptext">VSCode</span>
                  <SiVisualstudiocode
                    style={{ color: "#0078d7" }}
                    className="h-8 w-8"
                  />
                </div>
                <div className="relative top-[-55px] left-[70px]">
                  <h1 className="text-[#eee] font-normal">Visual Studio</h1>
                  <p className="text-[#d4d4d4] text-sm absolute top-[18px]">
                    Editing App.js
                  </p>
                  <p className="text-[#d4d4d4] text-sm absolute top-[32px]">
                    Workspace: discord-clone
                  </p>
                </div>
                <div>
                  <h1 className="text-[#eee] font-bold text-sm pl-1">NOTE</h1>
                  <input
                    type="text"
                    placeholder="Click to a add note"
                    className="bg-[#333] outline-none placeholder:text-[#a3a3a3] placeholder:text-xs rounded text-sm px-2 py-2 w-[170%] text-[#eee]"
                  />
                </div>
              </div>
            </div>
          </ClickAwayListener>
        )}
        <div
          className="cursor-pointer hover:bg-[#a3a3a31e] duration-200 absolute top-[45px] h-[50px] w-[240px] z-50 rounded"
          onClick={handleClick}
        ></div>
        <div
          className="duration-200 absolute top-[45px] h-[50px] w-[240px] rounded z-10"
          style={{ backgroundColor: toggle ? "#282b30" : "#a3a3a31e" }}
        >
          <div>
            <div className="bg-[#000000] w-[35px] h-[35px] rounded-full absolute top-2 left-2">
              <img
                className="cursor-pointer rounded-full shadow-md hover:opacity-70 duration-200 ease-linear"
                src={Logo}
                alt="profile-pic"
              />
              <span class="animate-ping absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-75"></span>
              <span class="absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-100"></span>
            </div>
            <h1 className="text-[#66fda7] absolute top-[5px] left-14 font-bold text-lg">
              tomgx
              <FaCrown
                style={{ color: "#ffbb00" }}
                className="h-3 w-3 absolute top-[8px] left-[50px]"
              />
            </h1>
            <p className="text-[#b6b6b6] text-xs absolute top-[27px] left-14">
              Playing{" "}
              <b>
                Visual Studio Code
                <FaRegNewspaper className="h-4 w-4 absolute top-[0px] -right-[22px]" />
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTab;
