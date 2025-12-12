import { useNavigate } from "react-router-dom";

function SimpleBtn({ btnLabel, btnStyle = "", navigationPath, onClickFunc }) {
  const navigate = useNavigate();

  const hasBgOverride = btnStyle.includes("bg-");
  const hasTextOverride = btnStyle.includes("text-");
  const hasHoverOverride = btnStyle.includes("hover:");

  const clickHandler = () => {
    // handle two of my props
    if (onClickFunc) {
      console.log("Going to exec click func");
      onClickFunc();
      return;
    }

    if (navigationPath) {
      navigate(navigationPath);
      return;
    }

    console.error(
      `navigationPath attribute is not set for ${btnLabel} "Simple" Button`
    );
  };

  return (
    <button
      // onClick={() =>
      //   navigationPath
      //     ? navigate(navigationPath)
      //     : console.error(
      //         `navigationPath attribute is not set for ${btnLabel} "Simple" Button`
      //       )
      // }
      onClick={clickHandler}
      className={`
        primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl 
        ${hasBgOverride ? "" : "bg-white"}
        ${hasTextOverride ? "" : "text-black"} 
        ${hasHoverOverride ? "" : "hover:bg-gray-500 hover:text-white"} 
        ${btnStyle}
        `}
    >
      {btnLabel}
    </button>
  );
}

export default SimpleBtn;
