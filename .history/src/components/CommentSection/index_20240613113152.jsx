import images from "../../assets";
import Image from "../Image";

function CommentSection({rating, comment, date, reviewerName, reviewerEmail}) {
    return (
        <div className="">
            <Image source={images.user} className='w-10 h-10 rounded-full object-cover'/>
            <div className="">
                <span className="text-base font-normal">{reviewerName}</span>
                <span className="text-base font-normal">{reviewerEmail}</span>
                <span className="text-base font-normal"></span>
            </div>
        </div>
      );
}

export default CommentSection;