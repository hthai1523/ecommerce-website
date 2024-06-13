import images from "../../assets";

function UserPost() {
  const date = new Date();
  return (
    <div className="flex items-center justify-around">
      <img
        src={images.user}
        alt="User"
        className="w-10 h-10 object-cover rounded-full"
      />
      <span>Thai Hoang</span>
      <span>{date.getDate()}</span>
    </div>
  );
}

export default UserPost;
