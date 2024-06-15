import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../Firebase/Firebase";

function Profile() {
  const { currentUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[0-9]{10,15}$/; // Adjust the pattern as needed
    return phonePattern.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneError("");
    setPasswordError("");

    let valid = true;

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError("Invalid phone number");
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      valid = false;
    }

    if (valid) {
      try {
        await updateDoc(doc(firebaseDB, "users", currentUser.uid), {
          username: firstName + " " + lastName,
          phone: phoneNumber,
          address: address,
        });
        alert("Updated your information ");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAddress("");
      } catch (error) {
        console.error(error);
        alert("Have some errors");
      }
    }
  };

  return (
    <div className="mt-[102px] w-full space-y-10">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Account Settings
      </h1>
      <div className="w-full space-y-5">
        <h3 className="font-semibold">Profile Information</h3>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-5"
        >
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="📱+84964 819 465"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
            {phoneError && <span className="text-red-500">{phoneError}</span>}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="🌏Hoang Mai Ha Noi"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <h3>Change Password</h3>
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="******"
                className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
            </div>
          </div>
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
          <button
            type="submit"
            className="bg-primary text-white p-4 rounded-3xl hover:opacity-70 transition-opacity duration-300 w-1/2"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
