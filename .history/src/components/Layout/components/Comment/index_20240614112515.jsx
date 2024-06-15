import images from "../../../../assets";
import CommentForm from "../../../CommentForm";
import CommentSection from "../../../CommentSection";
import Image from "../../../Image";

function Comment({ data }) {
  return (
    <div className="w-full flex flex-col space-y-10 flex-shrink-0 flex-grow-0">
      {data &&
        data.map((item, index) => <CommentSection key={index} {...item} />)}
      <CommentForm />
    </div>
  );
}

export default Comment;
