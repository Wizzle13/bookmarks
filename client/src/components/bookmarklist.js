import React from 'react';

const BookmarkList = ({ thoughts, title }) => {
  // if (!thoughts.length) {
  //   return <h3>No Bookmarks Yet</h3>;
  // }

  return (
    <div className='card'>
        <p className="card-header">
            Catagoty
        </p>
        <div className="card-body">
            <ul>
              <li><a href="https://idp.bootcampspot.com/ui/?requestId=a529657e-536e-481e-a3a1-d915235a0379" class="card-link"><img src="https://courses.bootcampspot.com/favicon.ico" width="32px" alt="FavIcon" /> Boot Camp Login</a></li>
              <li ><a href="https://umn.bootcampcontent.com/" class="card-link"><img src="https://umn.bootcampcontent.com/favicon.ico" width="32px" alt="FavIcon" /> GitLab </a></li>
              <li><a href="https://github.com/" class="card-link"><img src="https://github.com/favicon.ico" width="32px" alt="FavIcon" /> GitHub</a></li>
              <li><a href="https://stackoverflow.com/" class="card-link"><img src="https://stackoverflow.com/favicon.ico" alt="FavIcon" width="32px" /> Stack Over Flow</a></li>
              <li><a href="https://www.favicon.cc/" class="card-link"><img src="https://www.favicon.cc/favicon.ico" alt="FavIcon" width="32px" /> FavIcon</a></li>
            </ul>
        </div>
          
    </div>
  );
};

export default BookmarkList;