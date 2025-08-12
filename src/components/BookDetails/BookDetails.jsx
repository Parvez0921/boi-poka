import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find((book) => book.bookId === id);

    const {
        bookId: currentBookID,
        bookName,
        author,
        image,
        review,
        tags,
        category,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
    } = book;

    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content flex-col lg:flex-row'>
                <img
                    src={image}
                    className='max-w-sm rounded-lg shadow-2xl'
                />
                <div className='mx-4'>
                    <h1 className='text-5xl font-bold'>{bookName}</h1>
                    <h3 className='text-xl font-bold mt-4'>By: {author}</h3>
                    <h3 className='text-2xl font-bold mt-4'>{category}</h3>

                    <p className='py-6'>
                        <span className='font-bold'>Review: </span>
                        {review}
                    </p>

                    <div>
                        <div className='flex m-4 gap-12'>
                            <span className='font-bold'>Tags:</span>
                            {tags.map((tag, index) => (
                                <button
                                    key={index}
                                    className='btn btn-xs bg-slate-600 text-green-400 font-bold'
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex gap-24 m-4'>
                        <div>
                            <p>Number of pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div>
                            <p className='font-bold'>{totalPages}</p>
                            <p className='font-bold'>{publisher}</p>
                            <p className='font-bold'>{yearOfPublishing}</p>
                            <p className='font-bold'>{rating}</p>
                        </div>
                    </div>

                    <button className='btn btn-outline'>Read</button>
                    <button className='btn btn-primary m-4'>Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
