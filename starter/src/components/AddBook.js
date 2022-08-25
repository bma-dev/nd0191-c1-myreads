import React from 'react';

const AddBook = () => {
    return (
        <div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
    );
};

export default AddBook;