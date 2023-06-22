import React from 'react';
import { Link } from 'react-router-dom';

const BookmarkList = ({ thoughts, title }) => {
//   if (!thoughts.length) {
//     return <h3>No Bookmarks Yet</h3>;
//   }

  return (
    <div>
        <p className="card-header">
            Catagoty
        </p>
        <div className="card-body">
            Bookmarks
        </div>
          
    </div>
  );
};

export default BookmarkList;