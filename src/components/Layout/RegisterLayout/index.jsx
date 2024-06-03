import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Container,
  FormGroup,
} from "@mui/material";
import {doCreateUserWithEmailAndPassword} from '../../../Firebase/auth';
import {useAuth} from '../../../contexts/authContext';
import routes from "../../../config/route";

function RegisterLayout() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!isRegistering) {
        setIsRegistering(true)
        await doCreateUserWithEmailAndPassword(inputEmail, inputPassword)
    }

  };

  return (
    <>
       {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

      <div className="bg-primary-color min-h-screen flex items-center justify-center">
        <div className="bg-emerald-200 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-3">
          <div className="w-1/2">
            <>
              <h2 className="font-bold text-2xl  text-emerald-800">Sign Up</h2>
              <p className="font-sm mt-4 text-emerald-800">
                Welcome, please leave your information below
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
                  autoComplete="new-password"
                />
              </FormControl>
  
              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}
  
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
              sx={{
                maxWidth: "350px",
                width: "100%",
                paddingTop: "12px",
                marginTop: "20px",
                borderRadius: "8px",
              }}
            >
              <FcGoogle className="text-lg pr-1 " />
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </Button>
  
            <>
              <span className="block mt-5  text-emerald-800 font-medium text-base ">
                You already have an accout{" "}
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
