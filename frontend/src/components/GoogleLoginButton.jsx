import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import api from "../api";

function GoogleLoginButton({ sent }) {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      // --- START OF DEBUGGING ---
      console.log("✅ Received success response from Google:", codeResponse);
      const code = codeResponse.code;
      console.log("🔑 Extracted Authorization Code:", code);

      if (!code) {
        alert("Error: Authorization code not found in Google's response.");
        return;
      }

      console.log("🚀 Sending this payload to backend:", { code: code });
      // --- END OF DEBUGGING ---

      try {
        const res = await api.post("/api/auth/google/", {
          code: code, // Make sure you are sending the code correctly
        });

        // --- ADDED SUCCESS LOG ---
        console.log("✅ Received success response from backend:", res.data);

        // Note: dj-rest-auth returns `access` and `refresh`
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        navigate("/");
        window.location.reload();
      } catch (error) {
        // --- ADDED ERROR LOG ---
        console.error("❌ Error response from backend:", error.response);
        alert(
          "An error occurred during Google login. Check the console for details."
        );
      }
    },
    onError: (errorResponse) => {
      console.error("❌ Google login flow failed:", errorResponse);
      alert("Google login failed. Please try again.");
    },
  });

  return (
    <div className="mt-5 text-center">
      <p className="text-gray-600">Or</p>
      <button
        onClick={() => googleLogin()}
        className="text-white w-full bg-[#3a3a3a] hover:bg-[#4a4a4a] outline-0 border-0 ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mt-2"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        {sent}
      </button>
    </div>
  );
}

export default GoogleLoginButton;
