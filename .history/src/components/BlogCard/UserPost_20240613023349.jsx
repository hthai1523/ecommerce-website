import images from "../../assets";

import { FaCircleDot } from "react-icons/fa6";

function UserPost() {
  const date = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (
    <div className="flex items-center gap-2">
      <img
        src={images.user}
        alt="User"
        className="w-10 h-10 object-cover rounded-full"
      />
      <span className="text-base font-normal">Thai Hoang</span>
      <FaCircleDot size={8} />

      <span className="text-base font-normal">{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</span>
    </div>
  );
}

export default UserPost;
