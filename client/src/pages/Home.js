import React from 'react';
import { useQuery } from '@apollo/client';



import Auth from '../utils/auth';
import BookmarkList from '../components/bookmarklist';

const Home = () => {
  // use useQuery hook to make query request
   
  const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          
            <div>
              <BookmarkList />
            </div>
          
        </div>
        
      </div>
    </main>
  );
};

export default Home;
