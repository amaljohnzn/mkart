import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = ({ setIsAuthenticated, setUser }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post("https://mkart-amaljohnzns-projects.vercel.app/ath/logout", {}, { withCredentials: true });

        setIsAuthenticated(false);
        setUser(null);
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        setLoading(false);
        navigate("/login", { replace: true });
      }
    };

    logoutUser();
  }, [navigate, setIsAuthenticated, setUser]);

  if (loading) {
    return <div>Logging out...</div>;
  }

  return null;
};

export default Logout; 