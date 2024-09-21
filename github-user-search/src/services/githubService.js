import axios from 'axios';

export const fetchUserData = async () => {
    const GITHUB_API_URL = `https://api.github.com/search/users?q`;
    // Construct query string based on inputs
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

    
    
    try {
    const response = await axios.get(GITHUB_API_URL);
    return response.data;

  } catch (error) {
    throw new Error('Looks like we cant find the user');
  
}
};
