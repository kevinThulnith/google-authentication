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
        await api.post("/api/token/blacklist/", {
          refresh: localStorage.getItem(REFRESH_TOKEN),
        });
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        setIsAuthenticated(false);
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
