import React from "react";
import { MdMic, MdHeadsetMic } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import Logo from "../assets/profile-pic.jpg";

const Profile = () => {
  return (
    <div className="select-none absolute bottom-0 left-[60px] h-[50px] w-[220px] bg-[#222224] z-10">
      <div className="bg-[#000000] w-[35px] h-[35px] rounded-full absolute top-2 left-2">
        <img className="rounded-full shadow-md" src={Logo} alt="profile-pic" />
        <span class="animate-ping absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-75"></span>
        <span class="absolute inline-flex h-2 w-2 left-7 bottom-1 rounded-full bg-[#0f9e26] opacity-100"></span>
      </div>
      <div>
        <h1 className="font-semibold text-sm absolute top-[15px] left-[50px] text-[#eee]">
          tomgx
        </h1>
        <MdMic
          style={{ color: "#eee" }}
          className="cursor-pointer absolute bottom-4 right-[60px] "
        />
        <MdHeadsetMic
          style={{ color: "#eee" }}
          className="cursor-pointer absolute bottom-4 right-[40px]"
        />
        <FaCog
          style={{ color: "#eee" }}
          className="cursor-pointer absolute bottom-4 right-[18px] hover:animate-spin "
        />
      </div>
    </div>
  );
};

export default Profile;
