import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../Firebase/Firebase";
import { ClipLoader } from "react-spinners";
import { doPasswordChange, doSignOut } from "../../Firebase/auth";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import routes from "../../config/route";

function Profile() {
  const { currentUser, userLoggedIn } = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;

  console.log("====================================");
  console.log(currentUser);
  console.log("====================================");

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    phoneError: "",
    passwordError: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[0-9]{10,15}$/; // Adjust the pattern as needed
    return phonePattern.test(number);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({ ...formErrors, phoneError: "", passwordError: "" });

    let valid = true;

    if (!validatePhoneNumber(formState.phoneNumber)) {
      setFormErrors({ ...formErrors, phoneError: "Invalid phone number" });
      valid = false;
    }

    if (valid) {
      try {
        setIsLoading(true);
        const dataProfile = {
          displayName: `${formState.firstName} ${formState.lastName}`,
        };

        await update
        await updateDoc(doc(firebaseDB, "users", currentUser.uid), {
          username: `${formState.firstName} ${formState.lastName}`,
          phone: formState.phoneNumber,
          address: formState.address,
        });

        alert("Updated your information.");

        setFormState({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          address: "",
          newPassword: "",
          confirmPassword: "",
        });

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert("There were some errors.");
        setIsLoading(false);
      }
    }
  };

  const handleChangePassword = async () => {
    const { newPassword, confirmPassword } = formState;

    if (newPassword !== confirmPassword) {
      setFormErrors({ ...formErrors, passwordError: "Passwords do not match" });
      return;
    }

    try {
      setIsLoading(true);
      await doPasswordChange(user, newPassword);
      alert("Updated your password. You will be logged out from your account.");
      await doSignOut();
    } catch (error) {
      console.error(error);
      alert("There were some errors while changing the password.");
    } finally {
      setIsLoading(false);
      setFormState({
        ...formState,
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  if (!userLoggedIn) {
    return <Navigate to={routes.home} replace />;
  }

  return (
    <div className="mt-[102px] w-full space-y-10">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Account Settings
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-5">
        <h3 className="font-semibold">Profile Information</h3>

        <div className="w-full flex items-center gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="firstName">
              <span className="text-base font-normal text-[#3d3d3d]">
                First name
              </span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formState.firstName}
              onChange={handleChange}
              placeholder="Peter"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="lastName">
              <span className="text-base font-normal text-[#3d3d3d]">
                Last name
              </span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formState.lastName}
              onChange={handleChange}
              placeholder="Ducker"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-2">
          <label htmlFor="phoneNumber">
            <span className="text-base font-normal text-[#3d3d3d]">
              Phone Number
            </span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleChange}
            placeholder="📱+84964 819 465"
            className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
          />
          {formErrors.phoneError && (
            <span className="text-red-500">{formErrors.phoneError}</span>
          )}
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="address">
            <span className="text-base font-normal text-[#3d3d3d]">
              Address
            </span>
          </label>
          <input
            type="text"
            id="address"
            value={formState.address}
            onChange={handleChange}
            placeholder="🌏Hoang Mai Ha Noi"
            className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
          />
        </div>
        <button
          type={isLoading ? null : "submit"}
          className={`p-4 rounded-3xl hover:opacity-70 transition-opacity duration-300 w-1/4 text-white flex items-center justify-center gap-2 ${
            isLoading ? "bg-slate-400" : "bg-primary"
          }`}
        >
          {isLoading && (
            <ClipLoader
              color={"#000"}
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
          Save Changes
        </button>
        <h3 className="font-medium">Change Password</h3>

        <div className="w-full flex items-center gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="newPassword">
              <span className="text-base font-normal text-[#3d3d3d]">
                New Password
              </span>
            </label>
            <input
              type="password"
              id="newPassword"
              value={formState.newPassword}
              onChange={handleChange}
              placeholder="******"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="confirmPassword">
              <span className="text-base font-normal text-[#3d3d3d]">
                Confirm New Password
              </span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              placeholder="******"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
        </div>
        {formErrors.passwordError && (
          <span className="text-red-500">{formErrors.passwordError}</span>
        )}
        <button
          type="button"
          onClick={handleChangePassword}
          className={`p-4 rounded-3xl hover:opacity-70 transition-opacity duration-300 w-1/4 text-white flex items-center justify-center gap-2 ${
            isLoading ? "bg-slate-400" : "bg-primary"
          }`}
        >
          {isLoading && (
            <ClipLoader
              color={"#000"}
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
          Change Password
        </button>
      </form>
    </div>
  );
}

export default Profile;
