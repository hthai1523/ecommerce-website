import { Input } from "@mui/material";
import { useAuth } from "../../contexts/authContext";

function Profile() {

  return (
    <div className="mt-[102px] w-full space-y-10">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Account Settings
      </h1>

      <div className="w-full">
        <h3 className="font-semibold">Profile Infomation</h3>
        <form action="" className="w-full flex flex-col space-y-5">
          <div className="w-full flex items-center gap-4">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name">
                <span className="text-base font-normal text-[#3d3d3d]">
                  First name
                </span>
              </label>
              <input
                type="text"
                id="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="Peter"
                className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name">
                <span className="text-base font-normal text-[#3d3d3d]">
                  Last name
                </span>
              </label>
              <input
                type="text"
                id="lastName"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="Ducker"
                className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
              <Input />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
