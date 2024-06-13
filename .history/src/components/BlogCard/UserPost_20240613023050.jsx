import images from "../../assets";
function UserPost() {
  const date = new Date();
  return (
    <div className="flex items-center gap-2">
      <img
        src={images.user}
        alt="User"
        className="w-10 h-10 object-cover rounded-full"
      />
      <span className="text-base font-normal">Thai Hoang</span>
      <FaCircleDot />

      <span className="text-base font-normal">{`${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`}</span>
    </div>
  );
}

export default UserPost;
