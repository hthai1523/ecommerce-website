import images from "../../assets";

function UserPost() {
  const date = new Date();
  return (
    <div className="flex items-center gap-3">
      <img
        src={images.user}
        alt="User"
        className="w-10 h-10 object-cover rounded-full"
      />
      <span className="text-lg font-semibold">Thai Hoang</span>
      <span>{date}</span>
    </div>
  );
}

export default UserPost;
