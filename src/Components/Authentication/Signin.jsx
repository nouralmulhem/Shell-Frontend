import React, { useState } from "react";

//axios
import axios from '../../services/instance'

//MUI
import { Typography, TextField, Link } from "@mui/material";

//Styles
import { ButtonSign, SignConatiner } from "../../styles/Signin";
import { TypographyH3 } from "../../styles/SignupOverlay";
import SocialAccounts from "./SocialAccounts";

function Signin({ btn, condition }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    axios.post("/auth/login/", {
        'username': { userName },
        'password': { password },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          window.location.href = "./login";
        } else {
          alert("incorrect username or password");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <SignConatiner condition={condition} onSubmit={signIn}>
      {/* Sign in */}
      <TypographyH3 variant="h3" sx={{ color: "black" }}>
        Sign in
      </TypographyH3>
      <SocialAccounts />
      <Typography variant="subtitle">or use your account</Typography>
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
      <Link href="#" variant="body2">
        Forgot your password?
      </Link>
      <ButtonSign variant="outlined" type="submit">Sign in</ButtonSign>
      {btn}
    </SignConatiner>
  );
}

export default Signin;
