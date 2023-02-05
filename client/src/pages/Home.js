import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS} from '../utils/queries';
import ThoughtList from '../components/ThoughtList';


import Auth from '../utils/auth';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  
  const thoughts = data?.thoughts || [];
  const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
        
      </div>
    </main>
  );
};

export default Home;
