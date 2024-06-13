import CommentSection from "../../../CommentSection";

function Comment({data}) {
    console.log(data)
    return ( 
        <div className="bg-slate-100 w-full flex flex-col spy">
            {
                data.map((item,index) => (
                    <CommentSection key={index} {...item} />
                ))
            }
        </div>
     );
}

export default Comment;