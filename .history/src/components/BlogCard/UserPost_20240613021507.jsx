import images from "../../assets";

function UserPost() {
  const date = new Date();
  return (
    <div className="flex space-x-4">
      <img
        src={images.user}
        alt="User"
        className="w-10 h-10 object-contain rounded-full"
      />
      <span>Thai Hoang</span>
      <span>{date.getDate()}</span>
    </div>
  );
}

export default UserPost;
