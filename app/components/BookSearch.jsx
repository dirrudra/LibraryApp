'use client'
import { useState } from 'react';

export default function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const supaBase = require('../../lib/supabase');
  const handleSearch = async () => {
    try {
      const { data, error } = await supaBase
        .from('books')
        .select('*')
        .textSearch('title', searchTerm, { type: 'plain' });

      if (error) {
        throw error;
      }

      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for books:', error.message);
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books..."
        className="seach-box"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <ul className="search-list-ul">
        {searchResults.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}
