import React, { useState, useEffect } from 'react';
import images from '../../assets';
import Button from '../Button';
import Image from '../Image';

function CommentSection({
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail,
}) {
  const [formattedDate, setFormattedDate] = useState('');

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
        return 'Just now';
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
      } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
      } else {
        // If more than a week, just show the date
        return commentDate.toLocaleDateString();
      }
    };

    const formatted = formatDate(date);
    setFormattedDate(formatted);
  }, [date]);

  return (
    <div className="w-full flex items-center space-x-4">
      <Image
        src={images.user}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <h4>{reviewerName}</h4>
        <p>{comment}</p>
        <div className="">
          <button>Like</button>
          <button>Reply</button>
          <p>{formattedDate}</p> 
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
