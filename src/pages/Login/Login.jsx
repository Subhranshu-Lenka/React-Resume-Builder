import { GoogleLogin, googleLogout } from "@react-oauth/google";
function Login() {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-[90vh] 
        bg-gradient-to-b from-gray-900 to-black  "
      >
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Login Successful");
              console.log("credentialResponse ", credentialResponse);
            }}
            onError={(error) =>
              console.log("Error while Google Logging", error)
            }
          />
        </div>
      </div>
    </>
  );
}

export default Login;
