import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState(""); // Change state variable to 'username'
  const [password, setPassword] = useState("");
  
  const btnClick = () => {
    console.log(`username: ${username}, password: ${password}`); // Log username
    
    const data = {
      username: username, // Change field to 'username'
      password: password,
    };
    
    const url = "http://localhost:3000/auth/login";
    const authToken = localStorage.getItem("token");
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${authToken}`, // Include auth token in the header
      },
      body: JSON.stringify(data),
    };
    
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.mes) {
        alert(data.mes);
      } else {
        alert("Login successful!");
      }
      localStorage.setItem("token", data.token);
      window.location = "/";
    })
    .catch((error) => {
      console.error("Error occurred during login:", error);
      alert("An error occurred during login. Please try again.");
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
              label="Username" // Change label to 'Username'
              variant="outlined"
              onChange={(e) => {
                setUsername(e.target.value);
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
