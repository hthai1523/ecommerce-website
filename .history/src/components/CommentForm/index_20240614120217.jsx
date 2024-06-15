import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, review, rating });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full p-4 flex flex-col gap-4 rounded-2xl border border-[#D3D3D3]"
    >
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="name"><span className="text-base font-normal text-[#3d3d3d]">Your Name:</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email"><span className="text-base font-normal text-[#3d3d3d]">Your Email</span>:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="person@gmail.com"
            className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="review"><span className="text-base font-normal text-[#3d3d3d]">Write your</span> review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}

          className="p-2 border border-solid border-black/15 rounded-3xl w-full text-black/55 focus:border-yellow-500 focus:border"
          />
      </div>
      <div className="flex flex-col">
        <label>Your Rating:</label>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => setRating(prev => index + 1)} className="cursor-pointer">
              {index < rating ? (
                <FaStar className="text-yellow-500" size={24} />
              ) : (
                <FaRegStar className="text-gray-400" size={24} />
              )}
            </span>
          ))}
        </div>
      </div>
      <button type="submit" className="bg-black text-white p-2 rounded">
        Post Review
      </button>
    </form>
  );
}

export default CommentForm;
