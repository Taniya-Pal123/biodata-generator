import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className="w-full min-h-27.5 rounded-xl border border-[#ded4cb] bg-[#fbf9f7] px-4 py-3 text-[15px] text-[#362d28] placeholder:text-[#9a8b81] outline-none focus:border-[#a61b38] focus:ring-2 focus:ring-[#a61b38]/10 resize-none"
    />
  );
};

export default TextArea;