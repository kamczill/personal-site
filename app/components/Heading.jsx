import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="px-[10px] py-5 sm:px-5 md:px-[60px] md:py-[60px]">
      <div className="py-2">
        <h1 className="pt-5 pb-[10px] text-[48px] sm:text-[68px]">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
