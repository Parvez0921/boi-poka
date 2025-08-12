import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, rating, tags } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className='card w-96 bg-base-200 shadow-xl p-6 mx-auto rounded-2xl'>
                <figure className='py-4 bg-slate-300 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName}
                    />
                </figure>
                <div className='card-body'>
                    <div className='flex justify-center gap-12'>
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className='btn btn-xs bg-slate-600 text-green-400 font-bold'
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <h2 className='card-title'>
                        {bookName}
                        <div className='badge badge-secondary'>NEW</div>
                    </h2>
                    <p>By : {author}</p>

                    <div className='border-t-2 border-dashed mt-2'></div>
                    <div className='card-actions justify-between m-4'>
                        <div className='badge badge-outline'>{category}</div>
                        <div className='badge badge-outline'>
                            {rating}
                            <div className='rating'>
                                <input
                                    type='radio'
                                    name='rating-4'
                                    className='mask mask-star-2 bg-green-600'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
