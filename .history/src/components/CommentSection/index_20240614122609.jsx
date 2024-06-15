import React, { useState, useEffect } from "react";
import images from "../../assets";
import Button from "../Button";
import Image from "../Image";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import styles from './CommentSection.module.scss';
import className from 'classnames/bind';
import CommentForm from "../CommentForm";

const cx = className.bind(styles);

function CommentSection({
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail,
}) {
  const [formattedDate, setFormattedDate] = useState("");
  const [isLike, setIsLike] = useState(false);
  const [isReply, setIsReply] = useState(false)

  useEffect(() => {
    // Function to format date
    const formatDate = (inputDate) => {
      // Assuming date is passed as a string
      const commentDate = new Date(date);
      const currentDate = new Date();

      // Logic for comparison
      const diffInMs = currentDate - commentDate;
      const seconds = Math.floor(diffInMs / 1000);

      if (seconds < 60) {
        return "Just now";
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
      } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return `${days} day${days !== 1 ? "s" : ""} ago`;
      } else {
        // If more than a week, just show the date
        return commentDate.toLocaleDateString();
      }
    };

    const formatted = formatDate(date);
    setFormattedDate(formatted);
  }, [date]);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <div className="w-full flex gap-4 p-4 bg-white rounded-2xl border border-[#D3D3D3] relative">
        <Image
          src={images.user}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 space-y-2">
          <h4 className="font-normal text-base">{reviewerName}</h4>
          <p className="text-gray-400 font-normal text-base">{comment}</p>
          <div className="flex items-center gap-4">
            <Button onClick={handleLike} className="text-base font-medium w-10 transition-all duration-300 ">
              {
                  isLike ? (
                    <AiFillLike className={cx("like--button")} size={20} />
                  ) : (
                    "Like"
                  )
              }
            </Button>
            <button onClick={setIsReply()} className="text-base font-medium">Reply</button>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center absolute top-4 right-4">
          {rating &&
            [...Array(Math.floor(rating))].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
        </div>
      </div>
      {isReply && (
        <div className="">
        <CommentForm />
        </div>
      )}
    </>
  );
}

export default CommentSection;
