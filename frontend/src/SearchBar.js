// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Ensure this is the correct path to your CSS file

const SearchBar = ({ onResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/search', {
        query: searchQuery,
      });

      setResults(response.data);
      onResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      {results.length > 0 && (
        <ul className="search-results">
          {results.map(user => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
