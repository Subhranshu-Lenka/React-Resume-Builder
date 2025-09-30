import React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryBtn({ btnLabel = "Label", btnGradient = "", navigationPath }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(navigationPath)}
      className={`primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r ${
        btnGradient ? btnGradient : "from-cyan-700 to-cyan-400"
      } `}
    >
      {`${btnLabel}`}
    </button>
  );
}

export default PrimaryBtn;
