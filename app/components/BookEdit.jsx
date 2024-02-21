// // components/BookEdit.jsx
// 'use client'
// import { useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const BookEdit = ({ bookId, onClose }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [subject, setSubject] = useState('');
//   const [publishDate, setPublishDate] = useState('');

//   const handleEdit = async () => {
//     try {
//       const { error } = await supabase
//         .from('Books')
//         .update({ title, author, subject, publish_date: publishDate })
//         .eq('id', bookId);
//       if (error) {
//         throw error;
//       }
//       console.log('Book updated successfully');
//       onClose(); // Close the edit modal or navigate back
//     } catch (error) {
//       console.error('Error updating book:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Book</h2>
//       <label>Title:</label>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <label>Author:</label>
//       <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//       <label>Subject:</label>
//       <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
//       <label>Publish Date:</label>
//       <input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
//       <button onClick={handleEdit}>Save Changes</button>
//     </div>
//   );
// };

// export default BookEdit;


// components/BookEditPage.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';
const supabase = createClient(supabaseUrl, supabaseKey);

const BookEdit = () => {
  const router = useRouter();
  const { id } = router.query; // Get book id from URL query parameter

  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data, error } = await supabase.from('books').select('*').eq('id', id).single();
        if (error) {
          throw error;
        }
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error.message);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  const handleSave = async (updatedBook) => {
    try {
      const { error } = await supabase.from('books').update(updatedBook).eq('id', id);
      if (error) {
        throw error;
      }
      console.log('Book updated successfully');
      // Redirect back to BookList after updating
      router.push('/booklist');
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      {book && <BookEdit book={book} onSave={handleSave} />}
    </div>
  );
};

export default BookEdit;
