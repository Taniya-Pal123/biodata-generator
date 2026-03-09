import React from "react";

const Input = (props) => {
  return (
      <input
      {...props}
      className="w-full h-12 rounded-xl border border-[#ded4cb] bg-[#fbf9f7] px-4 text-[15px] text-[#362d28] placeholder:text-[#9a8b81] outline-none focus:border-[#a61b38] focus:ring-2 focus:ring-[#a61b38]/10"
    />
  );
};

export default Input;