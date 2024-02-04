import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const btnClick = () => {
    
    const data = {
      username: username,
      password: password,
    };
    const url = "http://localhost:3000/auth/login";
    const authToken = localStorage.getItem("token");
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.msg) {
        alert(data.msg);
      } else {
        alert("Login successful!");
        navigate('/')
      }
      localStorage.setItem("token", data.authToken); // Corrected storage key to "token"
      // Handle routing using React Router or any other suitable method
    })
    .catch((error) => {
      console.error("Error occurred during login:", error);
      alert("An error occurred during login. Please try again.");
    });
  
  };

  return (
    <div className="bg-[#380067] flex flex-col md:flex-row h-screen">
      <div className="text-white font-bold  text-5xl my-16 md:my-32 mx-10 ">
        <h1 className="py-5">Wanna Save the Environment?</h1>
        <h2>Lend your books for someone else to read it ;)</h2>
      </div>
      <div className="py-10 px-10  md:mx-10 bg-white  rounded-t-2xl md:rounded-2xl md:w-2/4 md:my-32">
        <Typography variant="h4">Sign Up</Typography>
        <div className="flex flex-col my-5">
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="Username"
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
          <Typography variant="h6" className="my-5" style={{ color: '#fff' }}>
          Don't have have account?
          <span style={{color: '#fff'}}
              className="text-[#380067] font-extrabold"
            >
              <Link to="/signup">Sign up</Link>
            </span>
</Typography>
            
           
          
        </div>
      </div>
    </div>
  );
};

export default Login;