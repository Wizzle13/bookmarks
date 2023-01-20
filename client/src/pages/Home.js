import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {
  // use useQuery hook to make query request
  
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  
  const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            ??
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          { (
            <div>Loading...</div>
          
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <></>
            
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;