import { useLocation } from "react-router-dom";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useEffect } from "react";

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.log({ loction: location.pathname });
  }, [location]);

  return (
    <div
      className="flex justify-center items-center min-h-[90vh] 
        bg-gradient-to-b from-gray-900 to-black  "
    >
      <div>
        <h1 className="text-4xl font-bold p-3">404! Page Not Found</h1>
        <p>The page <strong>{`**${String(location.pathname).replace("/","")}**`}</strong> that you are looking for, currently does not exist.</p>
        <p>
          Please find a way back through the home page.
          <br />
          <PrimaryBtn
            btnLabel="Go Back to Home-Page"
            btnGradient="from-red-500 to-blue-700 mt-6"
            navigationPath="/"
          >
          </PrimaryBtn>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
