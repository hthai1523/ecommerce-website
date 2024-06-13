import CommentSection from "../../../CommentSection";

function Comment({data}) {

    return ( 
        <div className="w-full flex flex-col space-y-10 flex-shrink-0 flex-grow-0">
            {
                data && data.map((item,index) => (
                    <CommentSection key={index} {...item} />
                ))
            }
        </div>
     );
}

export default Comment;