import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";

function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        console.log("Refresh token to blacklist:", refreshToken);

        // Always clean up localStorage and redirect regardless of blacklisting success
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        setIsAuthenticated(false);

        // !Chech and try to blacklist the refresh token if it exists
        if (refreshToken && refreshToken.length > 0) {
          api
            .post("/api/token/blacklist/", { refresh: refreshToken })
            .then(() => console.log("Token blacklisted successfully"))
            .catch((innerError) =>
              console.error(
                "Could not blacklist token:",
                innerError.response ? innerError.response.data : innerError
              )
            );
        } else console.log("No refresh token found to blacklist");
      } catch (error) {
        console.error("Logout process error:", error);
      } finally {
        // Always navigate to login page
        navigate("/login");
      }
    };

    logout();
  }, [navigate, setIsAuthenticated]);

  return null;
}

Logout.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Logout;
