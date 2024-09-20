const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubData = async () => {
  try {
    const response = await fetch(`https://api.github.com/some-endpoint?api_key=${GITHUB_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
