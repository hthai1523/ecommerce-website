import CommentSection from "../../../CommentSection";

function Comment({data}) {

    return ( 
        <div className="bg-slate-100 w-full flex flex-col space-y-10">
            {
                data && data.map((item,index) => (
                    <CommentSection key={index} {...item} />
                ))
            }
        </div>
     );
}

export default Comment;