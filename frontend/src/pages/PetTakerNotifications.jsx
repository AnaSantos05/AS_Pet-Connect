import React from "react";
import { useNavigate } from "react-router-dom";

export const PetTakerNotifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white font-['Londrina_Solid'] flex flex-col items-center pt-24 pb-40 gap-8 overflow-x-hidden">
      {/* Header */}
      <div className="text-[#FFB062] text-[36px] text-center mb-4">Notifications</div>

      {/* Notification Boxes */}
      <div className="w-[90%] max-w-[345px] bg-[#493852] shadow-md rounded-[10px] p-4">
        <p className="text-white text-[20px]">
          João Rodrigues has requested <span className="text-[#FFB062]">Petsitting</span><br />
          <span className="underline">on 15/04/2025 at 21:00h.</span><br />
          <span className="text-[#FFB062] underline cursor-pointer">See details</span>
        </p>
      </div>

      <div className="w-[90%] max-w-[345px] bg-[#493852] shadow-md rounded-[10px] p-4">
        <p className="text-white text-[20px]">
          Pedro Fernandes’s <span className="text-[#FFB062]">Petsitting</span> service has been closed.<br />
          You will receive your payment now.<br />
          <span className="text-[#FFB062] underline cursor-pointer">See details</span>
        </p>
      </div>

      <div className="w-[90%] max-w-[345px] bg-[#493852] shadow-md rounded-[10px] p-4">
        <p className="text-white text-[20px]">
          Maria José has left you a <span className="text-[#FFB062]">review</span>. Check it out!<br />
          <span className="text-[#FFB062] underline cursor-pointer">See details</span>
        </p>
      </div>

      <div className="w-[90%] max-w-[345px] bg-[#493852] shadow-md rounded-[10px] p-4">
        <p className="text-white text-[20px]">
          The Pet-Care admins have concluded the dispute.<br />
          You have lost and won’t receive any money for it.<br />
          <span className="text-[#FFB062] underline cursor-pointer">See details</span>
        </p>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 w-full h-[60px] bg-[#2D2432] flex justify-around items-center z-10 rounded-t-2xl">
        <div
          className="w-[48px] h-[48px] rounded-full overflow-hidden cursor-pointer"
          onClick={() => navigate('/PetSitterTakerHomeInterface')}
        >
          <img src="./images/home.svg" alt="Home" className="w-full h-full object-cover" />
        </div>
        <div
          className="w-[48px] h-[48px] rounded-full overflow-hidden cursor-pointer"
          onClick={() => navigate('/PetTakerMap')}
        >
          <img src="./images/map.svg" alt="Map" className="w-full h-full object-cover" />
        </div>
        <div
          className="w-[48px] h-[48px] rounded-full overflow-hidden cursor-pointer"
          onClick={() => navigate('/PetTakerSettings')}
        >
          <img src="./images/settings-on.svg" alt="Settings" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
