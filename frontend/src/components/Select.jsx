import React from "react";

const Select = (props) => {
  return (
    <select
      {...props}
      className="w-full h-12 rounded-xl border border-[#ded4cb] bg-[#fbf9f7] px-4 text-[15px] text-[#362d28] outline-none focus:border-[#a61b38] focus:ring-2 focus:ring-[#a61b38]/10"
    />
  );
};

export default Select;