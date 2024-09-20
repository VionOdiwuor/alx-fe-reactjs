import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
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
          className="input"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on API call state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
