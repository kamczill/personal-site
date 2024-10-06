import React from "react";

const Headline = ({ children }) => {
  return (
    <div className=" lg:py-5">
      <h6 className="text-primary uppercase">{children}</h6>
    </div>
  );
};

export default Headline;
