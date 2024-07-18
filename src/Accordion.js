import React, { useState } from "react";

const Accordion = ({ question }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white relative">
      <div
        className="absolute bg-slate-300 right-5 top-[15px] text-xl p-1 w-6 h-6 grid place-items-center leading-[0] rounded-lg box-border border-2 border-gray-400 hover:bg-slate-400 hover:cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div className="absolute transform -translate-y-[3px]">
          {toggle ? "-" : "+"}
        </div>
      </div>
      <p
        onClick={() => setToggle((prev) => !prev)}
        className="font-semibold p-4 cursor-pointer"
      >
        {question}
      </p>
      <div
        className={`transition-height duration-[400ms] ease-in-out ${
          toggle ? "max-h-60" : "max-h-[0]"
        } overflow-hidden`}
      >
        <p className="px-4 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          perferendis vero consequuntur? Tenetur odit explicabo nihil cum atque
          blanditiis! Assumenda quae consequatur minus alias in doloremque
          delectus soluta corporis numquam.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
