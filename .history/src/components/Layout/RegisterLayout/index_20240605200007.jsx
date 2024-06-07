import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
} from "@mui/material";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../../Firebase/auth';
import routes from "../../../config/route";
import { useAuth } from "../../../hooks/useAuth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { firebaseDB } from "../../../Firebase/Firebase";

function RegisterLayout() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");

  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setInputUsername(value);
    if (!validateUsername(value)) {
      setUsernameErrorMessage("Username requires at least 3 characters");
    } else {
      setUsernameErrorMessage("");
    }
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setInputEmail(value);
    if (!validateEmail(value)) {
      setEmailErrorMessage("Email is not valid");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setInputPassword(value);
    if (!validatePassword(value)) {
      setPasswordErrorMessage("Password requires at least 6 characters");
    } else {
      setPasswordErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateUsername(inputUsername)) {
      setUsernameErrorMessage("Username requires at least 3 characters");
      valid = false;
    } else {
      setUsernameErrorMessage("");
    }

    if (!validateEmail(inputEmail)) {
      setEmailErrorMessage("Invalid email format");
      valid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!validatePassword(inputPassword)) {
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
      setIsRegistering(true);
      const userCredential = await doCreateUserWithEmailAndPassword(inputEmail, inputPassword);
      const user = userCredential.user;
      await setDoc(doc(firebaseDB, "users", user.uid), {
        username: inputUsername,
        email: inputEmail,
        createdAt: new Date()
      });
      setIsRegistering(false);
      navigate('/');
    } catch (e) {
      console.log(e);
      setIsRegistering(false);
      setGeneralErrorMessage("Failed to create account");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doSignInWithGoogle();
        navigate('/');
      } catch (err) {
        setIsRegistering(false);
        setGeneralErrorMessage("Failed to sign in with Google");
      }
    }
  };

  return (
    <>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

      <div className="bg-primary-color min-h-screen flex items-center justify-center">
        <div className="bg-emerald-200 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-3">
          <div className="w-1/2">
            <>
              <h2 className="font-bold text-2xl text-emerald-800">Sign Up</h2>
              <p className="font-sm mt-4 text-emerald-800">
                Welcome, please leave your information below
              </p>
            </>

            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <FormControl
                sx={{ marginTop: "8px", maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Username:</InputLabel>
                <Input
                  onChange={handleChangeUsername}
                  type="text"
                  value={inputUsername}
                  required
                  autoComplete="username"
                />
                <span className="text-red-600 font-bold h-4 w-full">
                  {usernameErrorMessage}
                </span>
              </FormControl>
              <FormControl
                sx={{ marginTop: "8px", maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Email:</InputLabel>
                <Input
                  onChange={handleChangeEmail}
                  type="text"
                  value={inputEmail}
                  required
                  autoComplete="email"
                />
                <span className="text-red-600 font-bold h-4 w-full">
                  {emailErrorMessage}
                </span>
              </FormControl>
              <FormControl
                sx={{ marginTop: "8px", maxWidth: "300px", width: "100%" }}
              >
                <InputLabel sx={{ fontWeight: "600" }}>Password:</InputLabel>
                <Input
                  onChange={handleChangePassword}
                  type="password"
                  value={inputPassword}
                  required
                  autoComplete="new-password"
                />
                <span className="text-red-600 font-bold h-4 w-full">
                  {passwordErrorMessage}
                </span>
              </FormControl>

              <span className="text-red-600 font-bold h-4">
                {generalErrorMessage}
              </span>

              <Button
                color="success"
                variant="contained"
                disabled={isRegistering}
                onClick={handleSubmit}
                sx={{
                  maxWidth: "350px",
                  width: "100%",
                  paddingTop: "12px",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              >
                {isRegistering ? "Signing Up..." : "Sign Up"}
              </Button>
            </FormGroup>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-400" />
              <p className="text-center">OR</p>
              <hr className="border-gray-400" />
            </div>

            <Button
              variant="contained"
              disabled={isRegistering}
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
              {isRegistering ? "Signing Up..." : "Sign Up with Google"}
            </Button>

            <>
              <span className="block mt-5 text-emerald-800 font-medium text-base ">
                You already have an account{" "}
                <Link className="font-bold text-base" to={routes.login}>
                  Sign In
                </Link>
              </span>
            </>
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
    </>
  );
}

export default RegisterLayout;
