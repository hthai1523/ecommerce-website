import { useAuth } from "../../contexts/authContext";

function Profile() {
  return (
    <div className="mt-[102px] w-full space-y-10">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Account Settings
      </h1>

      <div className="w-full space-y-5">
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
                className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
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
                className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
            </div>
          </div>

          <div className="flex flex-col w-[50%] gap-2">
            <label htmlFor="name">
              <span className="text-base font-normal text-[#3d3d3d]">
                Phone Number
              </span>
            </label>
            <input
              type="text"
              id="lastName"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder="📱+84964 819 465"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name">
              <span className="text-base font-normal text-[#3d3d3d]">
                Address
              </span>
            </label>
            <input
              type="text"
              id="address"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder="🌏Hoang Mai Ha Noi"
              className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <h3>Change Password</h3>
          <div className="w-full flex items-center gap-4">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name">
                <span className="text-base font-normal text-[#3d3d3d]">
                 New Password
                </span>
              </label>
              <input
                type="password"
                id="password"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="******"
                className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name">
                <span className="text-base font-normal text-[#3d3d3d]">
                  Confirm New Password
                </span>
              </label>
              <input
                type="text"
                id="lastName"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="******"
                className="py-2 p-3 border border-solid border-black/15 rounded-3xl w-full text-black/55"
              />
            </div>
          </div>
          <button type="submit" className="bg-primary text-white px-5 rounded-3xl hover:opacity-70 transition-opacity duration-300 w-1/2">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
