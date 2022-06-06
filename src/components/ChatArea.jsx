import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatArea = () => {
  return (
    <div className="fixed top-[65px] left-[320px] h-full w-screen]">
      <div className="absolute bottom-[85px] w-[1300px]">
        <TextareaAutosize
          minRows={1}
          maxRows={12}
          wrap="soft"
          name="chatbox"
          placeholder="Message in #general"
          className="overflow-y-scroll resize-none placeholder:text-lg placeholder:text-[#7c7c7c] overflow-hidden outline-none py-2 pl-14 pr-14 w-[1300px] mx-4 rounded bg-[#484b52] text-[#eee] text-lg"
        />
      </div>
    </div>
  );
};

export default ChatArea;
