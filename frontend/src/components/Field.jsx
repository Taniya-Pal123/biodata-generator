import React from "react";

const Field = ({ label, children, full }) => {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-[14px] md:text-[15px] font-medium text-[#2f2723] mb-2">
        {label}
      </label>
      {children}
    </div>
  );
};

export default Field;