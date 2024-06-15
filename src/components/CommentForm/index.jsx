import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Image from "../Image";
import images from "../../assets";
import styles from './CommentForm.module.scss';
import classNames from "classnames/bind";
import { useAuth } from "../../contexts/authContext";

const cx = classNames.bind(styles);

function CommentForm() {
  const {currentUser} = useAuth()

  const [name, setName] = useState(currentUser?.displayName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (name && email && review && rating) {
      console.log(name, email, review, rating);
    } else {
      alert('Please enter fully information');
    }
  };

  return (
    <div className={cx('comment--form', { 'slide-in': isMounted })}>
      <Image src={currentUser?.photoURL || images.noImage} className="w-10 h-10 rounded-full object-cover" />
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name">
              <span className="text-base font-normal text-[#3d3d3d]">
                Your Name:
              </span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={currentUser?.displayName || "Your name"}
              className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email">
              <span className="text-base font-normal text-[#3d3d3d]">
                Your Email
              </span>
              :
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={currentUser?.email || "Your email"}
              className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="review">
            <span className="text-base font-normal text-[#3d3d3d]">
              Write your
            </span>{" "}
            review:
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label>Your Rating:</label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className="cursor-pointer"
                >
                  {index < rating ? (
                    <FaStar className="text-yellow-500" size={24} />
                  ) : (
                    <FaRegStar className="text-gray-400" size={24} />
                  )}
                </span>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-3xl hover:opacity-70 transition-opacity duration-300 ">
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
