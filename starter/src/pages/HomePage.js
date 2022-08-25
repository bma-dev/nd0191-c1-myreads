import React from 'react';
import BookShlels from '../components/BookShlels';

const HomePage = () => {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShlels />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;