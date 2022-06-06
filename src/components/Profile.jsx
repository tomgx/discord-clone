import React from "react";
import { MdMic, MdHeadsetMic } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import Logo from "../assets/profile-pic.jpg";

const Profile = () => {
  return (
    <div className="select-none absolute bottom-0 left-[72px] h-[50px] w-[240px] bg-[#222224] z-10">
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
      <div>
        <h1 className="font-semibold text-base absolute top-[13px] left-[52px] text-[#eee]">
          tomgx
        </h1>
        <ul>
          <li className="cursor-pointer absolute bottom-2 right-[70px] p-2 mr-2 rounded hover:bg-[#eeeeee18] duration-200 ease-linear">
            <MdMic style={{ color: "#eee" }} className="cursor-pointer" />
          </li>
          <li className="cursor-pointer absolute bottom-2 right-[40px] p-2 mr-1 rounded hover:bg-[#eeeeee18] duration-200 ease-linear">
            <MdHeadsetMic
              style={{ color: "#eee" }}
              className="cursor-pointer"
            />
          </li>
          <li className="cursor-pointer absolute bottom-2 right-[10px] p-2 -mr-0 rounded  hover:bg-[#eeeeee18] duration-200 ease-linear">
            <FaCog style={{ color: "#eee" }} className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
