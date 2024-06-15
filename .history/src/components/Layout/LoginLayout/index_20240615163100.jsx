import React, { useState } from "react";
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
import images from "../../../assets";

function LoginLayout() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailErrorMessage("Email is not valid");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordErrorMessage("Password requires at least 6 characters");
    } else {
      setPasswordErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailErrorMessage("Invalid email format");
      valid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!validatePassword(password)) {
      setPasswordErrorMessage("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordErrorMessage("");
    }

    if (!valid) {
      return;
    }

    try {
      setGeneralErrorMessage("");
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
      setIsSigningIn(false);
      setGeneralErrorMessage("Email or password is incorrect");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        setIsSigningIn(false);
      } finally {
        setIsSigningIn(false)
      }
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to="/" replace />}

      <div className="bg-primary-color min-h-screen flex items-center justify-center">
        <div className="bg-emerald-200 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-3">
          <div className="w-1/2">
            <h2 className="font-bold text-2xl text-emerald-800">Sign In</h2>
            <p className="font-sm mt-4 text-emerald-800">
              If you already a member, easily sign in
            </p>

            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <FormControl
                sx={{marginTop: 2, maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Email:</InputLabel>
                <Input
                  onChange={handleEmailChange}
                  type="text"
                  value={email}
                  required
                  autoComplete="email"
                />
                <span className="text-red-600 text-xs font-bold h-4 w-full">
                  {emailErrorMessage}
                </span>
              </FormControl>
              <FormControl
                sx={{marginTop: 2, maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Password:</InputLabel>
                <Input
                  onChange={handlePasswordChange}
                  type="password"
                  value={password}
                  required
                  autoComplete="current-password"
                />
                <span className="text-red-600 text-xs font-bold h-4 w-full">
                  {passwordErrorMessage}
                </span>
              </FormControl>

              <span className="text-red-600 text-xs font-bold h-4">
                {generalErrorMessage}
              </span>

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
              onClick={handleGoogleSignIn}
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

            <span className="block mt-5 text-emerald-800 font-medium text-base">
              Do not have an account{" "}
              <Link className="font-bold text-base" to={routes.register}>
                Sign Up
              </Link>
            </span>
          </div>

          <div className="w-1/2 sm:block flex items-center justify-center">
            <img
              className="rounded-lg object-cover object-top w-full h-auto"
              src="https://t3.ftcdn.net/jpg/02/32/99/12/360_F_232991230_VmtsI1KnnYqIDL5a102cmxVAWaHj6ZRR.jpg"
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
