'use client'
import React, { useState } from 'react';


const supaBase = require('../../lib/supabase');

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [publishDate, setPublishDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form validation here if needed
    const { data, error } = await supaBase
      .from('books')
      .insert([{ title, author, subject, publish_date: publishDate }]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      
      setTitle('');
      setAuthor('');
      setSubject('');
      setPublishDate('');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div>
          <label>Publish Date:</label>
          <input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
