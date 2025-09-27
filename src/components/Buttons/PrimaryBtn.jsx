import React from "react";

function PrimaryBtn({ btnLabel = "Label" }) {
  return (
    <button className="primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r from-cyan-700 to-cyan-400">
      {`${btnLabel}`}
    </button>
  );
}

export default PrimaryBtn;
