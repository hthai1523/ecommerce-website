import React, { useState } from 'react';

function CommentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ name, email, review, rating });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white w-full p-4 flex flex-col gap-4 rounded-2xl border border-[#D3D3D3]">
           <div className="flex gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Your Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className='p-2 border border-solid border-black/15 rounded-3xl'
                        // style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#ADADAD'}}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Your Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="p-2 rounded-3xl border-2 border-black" 
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="review">Write your review:</label>
                <textarea 
                    id="review" 
                    value={review} 
                    onChange={(e) => setReview(e.target.value)} 
                    className="p-2 rounded-3xl border-2 border-black" 
                />
            </div>
            <div className="flex flex-col">
                <label>Your Rating:</label>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <span 
                            key={index} 
                            onClick={() => setRating(index + 1)} 
                            className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
            <button type="submit" className="bg-black text-white p-2 rounded">Post Review</button>
        </form>
    );
}

export default CommentForm;
