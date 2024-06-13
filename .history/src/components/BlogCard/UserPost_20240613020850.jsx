import images from "../../assets";

function UserPost() {
    const date = new Date();
    return ( 
        <div className="">
            <img src={images.user} alt="User" />
            <div className="">
                <span>Thai Hoang</span>
                <span>{date.getDate()}</span>
            </div>
        </div>
     );
}

export default UserPost;