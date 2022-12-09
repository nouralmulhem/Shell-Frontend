import { Typography, TextField, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ButtonSign, SignConatiner } from "../styles/Signin";
import { TypographyH3 } from "../styles/SignupOverlay";
import SocialAccounts from "./SocialAccounts";

function Signup({ btn2, condition }) {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    const [first, last] = name.split(" ");
    axios
      .post("https://cuert-backend.herokuapp.com/auth/register/", {
        username: userName ,
        password: password ,
        password2: password ,
        email: email ,
        first_name: first ,
        last_name: last ,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          window.location.href = "./";
        }else {
          alert("username and email must be unique");
        }
      })
      .catch((error) => console.log(error));
  };

function onPost(version) {
    const url = "https://cuert-backend.herokuapp.com/auth/register/";
    var headers = {}
    
    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
}
  return (
    <SignConatiner condition={condition} onSubmit={signUp}>
      {/* Sign up */}
      <TypographyH3 variant="h4" sx={{ color: "black" }}>
        Create Account
      </TypographyH3>
      <SocialAccounts />
      <Typography variant="subtitle">
        or use your email for regrstration
      </Typography>
      <TextField
        label="Name"
        type="text"
        required
        variant="standard"
        size="small"
        sx={{ width: "80%" }}
        onChange={(e) => {
          setName(e.target.value.trim());
        }}
      />
      <TextField
        label="Username"
        type="text"
        required
        variant="standard"
        size="small"
        sx={{ width: "80%" }}
        onChange={(e) => {
          setUserName(e.target.value.trim());
        }}
      />
      <TextField
        label="Email"
        type="email"
        required
        variant="standard"
        size="small"
        sx={{ width: "80%" }}
        onChange={(e) => {
          setEmail(e.target.value.trim());
        }}
      />
      <TextField
        label="Password"
        type="password"
        required
        variant="standard"
        size="small"
        sx={{ width: "80%", marginBottom: 2 }}
        onChange={(e) => {
          setPassword(e.target.value.trim());
        }}
      />
      <ButtonSign variant="outlined" type="submit">Sign up</ButtonSign>
      {btn2}
    </SignConatiner>
  );
}

export default Signup;
