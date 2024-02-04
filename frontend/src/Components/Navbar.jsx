import { Link } from "react-router-dom";

//import Button from "@mui/material/Button";
const Navbar = () => {
  const token = localStorage.token;
  if (token && token!=undefined) {
    return (
      <div className="text-xl flex flex-row mb-4 rounded-xl px-5 text-teal-950 space-x-2 bg-white md:mx-20 md:py-5 mx-5 py-2 justify-between ">
        <div className="logo">
          <span
            className=" hover:text-blue-600"
            onClick={() => (window.location = "/")}
          >
            BookBridge
          </span>
        </div>
        <div className="flex flex-row ">
          <span
            className=" hover:text-blue-600 mx-0.5 md:mx-5"
            onClick={() => (window.location = "/about")}
          >
            About
          </span>
          <span
            className=" hover:text-blue-600 mx-0.5 md:mx-5"
            onClick={() => (window.location = "/store")}
          >
            Store
          </span>

          <span
            className=" hover:text-blue-600 mx-0.5 md:mx-5"
            onClick={() => (window.location = "/shelf")}
          >
            Notifications
          </span>
          <span
            className=" hover:text-blue-600 mx-0.5 md:mx-5"
            onClick={() => {
              localStorage.removeItem("token");
              window.location = "/";
            }}
          >
            Log out
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-xl flex flex-row mx-5 rounded-xl px-5 text-teal-950 space-x-6 md:mx-20 md:py-5 justify-between bg-white">
        <div className="logo">
          <span
            className=" hover:text-blue-600"
            onClick={() => (window.location = "/")}
          >
            BookBridge
          </span>
        </div>
        <div className="flex flex-row">
          <span
            className=" hover:text-blue-600 mx-2 md:mx-5"
            onClick={() => (window.location = "/login")}
          >
            LogIn
          </span>
          <span
            className="hover:text-blue-600 mx-2 md:mx-5"
            onClick={() => (window.location = "/signup")}
          >
            Signup
          </span>
        </div>
      </div>
    );
  }
};
export default Navbar;
