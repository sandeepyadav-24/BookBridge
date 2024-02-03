//import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnClick = () => {
    console.log(`email: ${email} , password: ${password}`);
    const url = "http://localhost:3000/user/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email: email,
        password: password,
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        alert(data.mes + " ");
        localStorage.setItem("token", data.token);
        window.location = "/";
      });
  };

  return (
    <div className="bg-[#380067] flex flex-col md:flex-row h-screen">
      <div className="text-white font-bold  text-5xl my-16 md:my-32 mx-10 ">
        <h1>Create a personal library</h1>
        <h2>You can create your own web shelfs where your books will store</h2>
      </div>
      <div className="py-10 px-10  md:mx-10 bg-white  rounded-t-2xl md:rounded-2xl md:w-2/4 md:my-32">
        <Typography variant="h4">Sign Up</Typography>
        <div className="flex flex-col my-5">
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="my-5 bg-[#380067] text-white py-3 rounded-lg"
            onClick={btnClick}
          >
            Login
          </button>
          <h3 className="my-5">
            Don't have have account?
            <span
              onClick={() => (window.location = "/signup")}
              className="text-[#380067] font-extrabold"
            >
              Sign up
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
