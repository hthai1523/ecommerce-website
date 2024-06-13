import CommentSection from "../../../CommentSection";

function Comment({data}) {
    return ( 
        <div className="">
            {
                data.map((item,index) => (
                    <CommentSection key={index} {...item} />
                ))
            }
        </div>
     );
}

export default Comment;