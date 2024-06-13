import images from "../../assets";
import Image from "../Image";

function CommentSection({rating, comment, date, reviewerName, reviewerEmail}) {
    return (
        <div className="w-full">
            <Image src={images.user} className='w-10 h-10 rounded-full object-cover'/>
            
        </div>
      );
}

export default CommentSection;