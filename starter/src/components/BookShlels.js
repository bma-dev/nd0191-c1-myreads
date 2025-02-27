import React from 'react';
import Book from './Book';

const BookShlels = () => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default BookShlels;