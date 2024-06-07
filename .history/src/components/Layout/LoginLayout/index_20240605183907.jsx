import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
} from "@mui/material";
import { useAuth } from "../../../contexts/authContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../Firebase/auth.js";
import routes from "../../../config/route.jsx";
import images from '../../../assets';

function LoginLayout() {
  const userLoggedIn = useAuth();
  console.log('====================================');
  console.log(userLoggedIn.currentUser);
  console.log('====================================');

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      try {
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(inputEmail, inputPassword);
      } catch (error) {
        
      }
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn.userLoggedIn && <Navigate to={"/"} replace={true} />}

      <div className="bg-primary-color min-h-screen flex items-center justify-center">
        <div className="bg-emerald-200 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-3">
          <div className="w-1/2">
            <>
              <h2 className="font-bold text-2xl  text-emerald-800">Sign In</h2>
              <p className="font-sm mt-4 text-emerald-800">
                If you already a member, easily sign in
              </p>
            </>

            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "col",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <FormControl
                sx={{ marginTop: "20px", maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Email:</InputLabel>
                <Input
                  onChange={handleChangeEmail}
                  type="text"
                  value={inputEmail}
                  required
                  autoComplete="email"
                />
              </FormControl>
              <FormControl
                sx={{ marginTop: "20px", maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Password:</InputLabel>
                <Input
                  onChange={handleChangePassword}
                  type="password"
                  value={inputPassword}
                  required
                  autoComplete="password"
                />
              </FormControl>

              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}

              <Button
                color="success"
                variant="contained"
                disabled={isSigningIn}
                onClick={handleSubmit}
                sx={{
                  maxWidth: "350px",
                  width: "100%",
                  paddingTop: "12px",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </Button>
            </FormGroup>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-400" />
              <p className="text-center">OR</p>
              <hr className="border-gray-400" />
            </div>

            <Button
              variant="contained"
              disabled={isSigningIn}
              sx={{
                maxWidth: "350px",
                width: "100%",
                paddingTop: "12px",
                marginTop: "20px",
                borderRadius: "8px",
              }}
            >
              <FcGoogle className="text-lg pr-1 " />
              {isSigningIn ? "Signing In..." : "Continue with Google"}
            </Button>

            <>
              <span className="block mt-5  text-emerald-800 font-medium text-base ">
                Do not have an account{" "}
                <Link className="font-bold text-base" to={routes.register}>
                  Sign Up
                </Link>
              </span>
            </>
          </div>

          <div className="w-1/2 sm:block flex items-center justify-center">
            <img
              className="rounded-lg object-cover object-top w-full h-auto"
              // src={images.slide1}
              src='https://t3.ftcdn.net/jpg/02/32/99/12/360_F_232991230_VmtsI1KnnYqIDL5a102cmxVAWaHj6ZRR.jpg'
              alt="background"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
