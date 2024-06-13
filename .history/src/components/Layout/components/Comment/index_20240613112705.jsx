function Comment({data}) {
    return ( 
        <div className="">
            {
                data.map(item)
            }
        </div>
     );
}

export default Comment;