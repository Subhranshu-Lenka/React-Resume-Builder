import React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryBtn({ btnLabel = "Label", btnGradient = "", btnStyle = "",navigationPath }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (navigationPath ? navigate(navigationPath) : console.error(`navigationPath attribute is not set for ${btnLabel} "Primary" Button`))}
      className={`primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r 
        ${btnGradient ? btnGradient : "from-cyan-700 to-cyan-400"} 
        ${btnStyle}
        `}
    >
      {`${btnLabel}`}
    </button>
  );
}

export default PrimaryBtn;
