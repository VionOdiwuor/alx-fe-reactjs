import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchUserData(username);
      setUserData(data.items); // GitHub's search API returns data in the "items" array
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };
  const [page, setPage] = useState(1);

const handleLoadMore = async () => {
  setPage((prevPage) => prevPage + 1);
  try {
    const data = await fetchAdvancedSearchResults(username, location, minRepos, page + 1);
    setUserData((prevData) => [...prevData, ...data.items]);
  } catch (err) {
    setError("No more users found");
  }
};


  return (
    <div className="search-component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="input w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="location"
          className="input w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum repositories"
          className="input w-full p-2 border rounded"
        />
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Search</button>
      
<button onClick={handleLoadMore} className="bg-blue-500 text-white py-2 px-4 rounded">Load More</button>
      </form>

      {/* Conditional rendering based on API call state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         {userData.map((user) => (
           <div key={user.id} className="p-4 border rounded shadow">
             <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
             <h2>{user.login}</h2>
             <p>Location: {user.location || "N/A"}</p>
             <p>Repositories: {user.public_repos}</p>
             <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
               View Profile
             </a>
           </div>
      ))}
    </div>
    )}
    </div>
  );
};

export default Search;
