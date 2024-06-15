import images from "../../../../assets";
import CommentSection from "../../../CommentSection";
import Image from "../../../Image";

function Comment({data}) {

    return ( 
        <div className="w-full flex flex-col space-y-10 flex-shrink-0 flex-grow-0">
            {
                data && data.map((item,index) => (
                    <CommentSection key={index} {...item} />
                ))
            }
            <div className="bg-white rounded-2xl p-4 flex gap-4">
                
            </div>
        </div>
     );
}

export default Comment;