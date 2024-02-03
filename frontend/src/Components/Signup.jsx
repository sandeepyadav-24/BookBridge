import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnClick = () => {
    console.log(`Name: ${name}`);
    console.log(`E-mail : ${email}`);
    console.log(`Password : ${password}`);
    const data = {
      name: name,
      email: email,
      password: password,
    };
    const url = "http://localhost:3000/user/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((responseData) => {
        alert(responseData.mes);
      });
  };

  return (
    <div className="bg-[#380067] flex flex-col md:flex-row h-screen">
      <div className="text-white font-bold  text-5xl my-16 md:my-32 mx-10 ">
        <h1>Make your own Book World</h1>
      </div>
      <div className="py-10 px-10  md:mx-10 bg-white  rounded-t-2xl md:rounded-2xl md:w-2/4 md:my-32">
        <Typography variant="h4">Sign Up</Typography>
        <div className="flex flex-col my-5">
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

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
            Sign up
          </button>
          <h3 className="my-7 text-center">
            Already have account?
            <span
              onClick={() => (window.location = "/login")}
              className="text-[#380067] font-extrabold"
            >
              Login
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
