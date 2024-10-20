import React from "react";

const Pill = ({ children }) => {
  return (
    <div className="px-[20px] py-[10px] text-sm uppercase border border-primary rounded-[80px] w-fit flex justify-center items-center text-center">
      {children}
    </div>
  );
};

export default Pill;
