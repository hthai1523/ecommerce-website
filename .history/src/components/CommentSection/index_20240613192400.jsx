import images from "../../assets";
import Image from "../Image";

function CommentSection({rating, comment, date, reviewerName, reviewerEmail}) {
    return (
        <div className="w-full flex items-center justify-around">
            <Image src={images.user} className='w-10 h-10 rounded-full object-cover'/>
            <div className="">
                <h4>{reviewerName}</h4>
                <p>{comment}</p>
            </div>
        </div>
      );
}

export default CommentSection;