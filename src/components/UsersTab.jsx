import React from "react";
import { FaCrown, FaRegNewspaper } from "react-icons/fa";
import Logo from "../assets/profile-pic.jpg";

const UsersTab = () => {
  return (
    <div className="select-none bg-[#282b30] fixed top-[74px] right-0 h-full w-[260px] z-10">
      <div>
        <h1 className="text-[#eee] font-bold text-sm absolute top-6 left-5">
          ONLINE - 1
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="cursor-pointer hover:bg-[#a3a3a31e] duration-200 absolute top-[45px] h-[50px] w-[240px] rounded">
          <div>
            <div className="bg-[#000000] w-[35px] h-[35px] rounded-full absolute top-2 left-2">
              <a href="https://avatars.githubusercontent.com/u/25938766?v=4">
                <img
                  className="cursor-pointer rounded-full shadow-md hover:opacity-70 duration-200 ease-linear"
                  src={Logo}
                  alt="profile-pic"
                />
              </a>
              <span class="animate-ping absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-75"></span>
              <span class="absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-100"></span>
            </div>
            <h1 className="text-[#66fda7] absolute top-[5px] left-14 font-medium text-lg">
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
