import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-8 mb-4 border-b border-[#ddd3ca] pb-2">
      <h3
        className="text-[18px] md:text-[20px] font-semibold text-[#a61b38]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {children}
      </h3>
    </div>
  );
};

export default SectionTitle;