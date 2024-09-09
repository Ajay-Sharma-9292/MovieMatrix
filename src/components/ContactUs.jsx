import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  document.title = "MovieMatrix | Contact Us";
  return (
    <>
      <div className="w-full h-screen p-5 flex flex-col">

            {/* Navigation */}     
        <div className="w-full   px-5 flex items-center  ">
          <h1 className="text-4xl flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-4xl ri-arrow-left-line"
            ></i>
            Contact Us
          </h1>
        </div>
        {/* Details */}
        <div className="w-full"></div>
        
      </div>
    </>
  );
};

export default ContactUs;
