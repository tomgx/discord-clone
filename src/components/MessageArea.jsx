import React, { useState } from "react";
import Logo from "../assets/profile-pic.jpg";
import Car from "../assets/car.jpg";
import Video from "../assets/cat.mp4";
import ClickAwayListener from "react-click-away-listener";

const MessageArea = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  var opacity = 0;
  function MyFadeFunction() {
    if (opacity < 0.6) {
      opacity += 0.075;
      setTimeout(function () {
        MyFadeFunction();
      }, 100);
    }
    document.getElementById("bigBG").style.opacity = opacity;
  }

  return (
    <div className="fixed top-[74px] left-[312px] h-full w-screen z-0 overflow-y-scroll">
      <div className="absolute top-6 left-6">
        <ul className="">
          <li className="hover:bg-[#23263033] h-[60px] w-screen pl-8 -ml-[24px] py-[4.5px]">
            <div className="absolute rounded-full h-[50px] w-[50px] hover:bg-[#00000048] duration-300 ease-in"></div>
            <img
              className="select-none cursor-default rounded-full shadow-md h-[50px] w-[50px]"
              src={Logo}
              alt="profile-pic"
            />
            <h1 className="select-none absolute top-[3px] left-[70px] font-bold text-lg text-[#66fda7]">
              tomgx
            </h1>
            <p className="relative -top-[45px] left-28 text-xs text-[#949494]">
              Today at 14:44
            </p>
            <p className="relative -top-[45px] left-16 text-[#eee] text-lg tracking-wide">
              Hello
            </p>
          </li>
          <li className="hover:bg-[#23263033] h-[60px] w-screen pl-8 -ml-[24px] py-[4.5px]">
            <div className="absolute rounded-full h-[50px] w-[50px] hover:bg-[#00000048] duration-300 ease-in"></div>
            <img
              className="select-none cursor-default rounded-full shadow-md h-[50px] w-[50px]"
              src={Logo}
              alt="profile-pic"
            />
            <h1 className="select-none absolute top-[63px] left-[70px] font-bold text-lg text-[#66fda7]">
              tomgx
            </h1>
            <p className="relative -top-[45px] left-28 text-xs text-[#949494]">
              Today at 14:45
            </p>
            <p className="relative -top-[45px] left-16 text-[#eee] text-lg tracking-wide">
              This is a simple Discord Clone made using ReactJS and TailwindCSS
            </p>
          </li>
          <li className="hover:bg-[#23263033] h-[350px] w-screen pl-8 -ml-[24px] py-[4.5px]">
            <div className="absolute rounded-full h-[50px] w-[50px] hover:bg-[#00000048] duration-300 ease-in"></div>
            <img
              className="select-none cursor-default rounded-full shadow-md h-[50px] w-[50px]"
              src={Logo}
              alt="profile-pic"
            />
            <h1 className="select-none absolute top-[123px] left-[70px] font-bold text-lg text-[#66fda7]">
              tomgx
            </h1>
            <p className="relative -top-[45px] left-28 text-xs text-[#949494]">
              Today at 14:45
            </p>
            <div className="relative -top-[35px] left-16">
              <video width="350" height="350" controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </li>
          <li
            className="hover:bg-[#23263033] h-[260px] w-screen pl-8 -ml-[24px] py-[4.5px]"
            onClick={MyFadeFunction}
          >
            <div
              className="cursor-pointer absolute bottom-[24px] left-[72px] rounded-sm h-[200px] w-[200px] z-20"
              onClick={handleClick}
            ></div>
            <div className="absolute rounded-full h-[50px] w-[50px] hover:bg-[#00000048] duration-300 ease-in"></div>
            <img
              className="select-none cursor-default rounded-full shadow-md h-[50px] w-[50px]"
              src={Logo}
              alt="profile-pic"
            />
            <h1 className="select-none absolute top-[473px] left-[70px] font-bold text-lg text-[#66fda7]">
              tomgx
            </h1>
            <p className="relative -top-[45px] left-28 text-xs text-[#949494]">
              Today at 14:45
            </p>
            <div className="relative -top-[35px] left-16">
              <img
                className="select-none cursor-pointer h-[200px] w-[200px] rounded-md"
                src={Car}
                alt="car-pic"
              />
            </div>
          </li>
        </ul>
      </div>
      {toggle ? null : (
        <div>
          <div id="bigBG" className="fixed h-full w-screen bgOpacity"></div>
          <div className="relative top-[160px] left-[400px] bigImgTransition">
            <ClickAwayListener onClickAway={handleClick}>
              <img
                className="select-none cursor-pointer h-[450px] w-[450px] rounded-md"
                src={Car}
                alt="car-pic"
              />
            </ClickAwayListener>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageArea;
