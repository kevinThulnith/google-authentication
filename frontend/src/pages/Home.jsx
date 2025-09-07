import { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });

  // TODO: Refresh the page when the page is loaded for the first time
  if (!localStorage.getItem("refreshed")) {
    localStorage.setItem("refreshed", "true");
    window.location.reload();
  }

  // TODO: Fetch user info and products
  useEffect(() => {
    if (localStorage.getItem("refreshed") === "true") {
      api
        .get("api/user/")
        .then((res) => setUserInfo(res.data))
        .catch((error) => alert(error));
    }
  }, []);

  return (
    <div className="container">
      <div className="w-full bg-[#2a2a2a] rounded-lg shadow-md p-4 flex justify-between items-center">
        <h2 className="text-2xl text-gray-200 ml-4 flex items-center gap-2">
          Welcome Back {userInfo.username} !!{" "}
          <span className="text-3xl">👋</span>
        </h2>
      </div>
    </div>
  );
}

export default Home;
