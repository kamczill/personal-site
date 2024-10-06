"use client";
const InfiniteAnimation = ({ text }) => {
  return (
    <div className="flex w-max pb-10">
      <div className="animate-marquee flex lg:animate-marquee-desktop text-[120px] lg:text-[192px]">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index}>{text}- </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteAnimation;
