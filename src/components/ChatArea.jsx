import React from "react";

const ChatArea = () => {
  return (
    <div className="fixed top-[65px] left-[280px] h-full w-screen]">
      <div className="absolute bottom-[80px] h-[50px] w-[1030px]  flex items-center">
        <textarea
          rows="1" 
          wrap='soft'
          name="chatbox"
          placeholder="Message in #general"
          className="resize-none placeholder:text-sm placeholder:text-[#7c7c7c] overflow-hidden outline-none h-[30px] pb-[20px] pt-[5px]  pl-11 pr-11 w-[1050px] mx-3 rounded bg-[#484b52] text-[#eee] text-sm"
        />
      </div>
    </div>
  );
};

export default ChatArea;
