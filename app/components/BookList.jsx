// // components/BookList.js
// 'use client'
// import { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';
// const supaBase = createClient(supabaseUrl, supabaseKey);

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const { data, error } = await supaBase.from('Books').select('*');
//         if (error) {
//           throw error;
//         }
//         setBooks(data);
//       } catch (error) {
//         console.error('Error fetching books:', error.message);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div className='book-list'>
//       <h2>Submitted Books</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Subject</th>
//           <th>Publish Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map((book) => (
//           <tr key={book.id}>
//             <td>{book.title}</td>
//             <td>{book.author}</td>
//             <td>{book.subject}</td>
//             <td>{book.publish_date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default BookList;


// components/BookList.js


'use client'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';
const supabase = createClient(supabaseUrl, supabaseKey);

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data, error } = await supabase.from('books').select('*');
      if (error) {
        throw error;
      }
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error.message);
    }
  };
  const handleEdit = (id) => {
    router.push(`/bookedit/${id}`);
  };
  
  // const handleEdit = async (id) => {
  //   // Implement edit functionality here
  //   console.log('Editing book with id:', id);
  // };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('books').delete().eq('id', id);
      if (error) {
        throw error;
      }
      console.log('Book deleted successfully');
      // After deleting, fetch updated list of books
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div className='book-list'>
      <h2>Submitted Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>{book.publish_date}</td>
              <td>
                <button onClick={() => handleEdit(book.id)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;



// // components/BookList.js
// 'use client'
// import { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import BookEdit from './BookEdit';

// const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const [editBook, setEditBook] = useState(null);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const { data, error } = await supabase.from('Books').select('*');
//       if (error) {
//         throw error;
//       }
//       setBooks(data);
//     } catch (error) {
//       console.error('Error fetching books:', error.message);
//     }
//   };

//   const handleEdit = (book) => {
//     setEditBook(book);
//   };

//   const handleSave = async (updatedBook) => {
//     try {
//       const { data, error } = await supabase.from('Books').update(updatedBook).eq('id', updatedBook.id);
//       if (error) {
//         throw error;
//       }
//       console.log('Book updated successfully:', data);
//       fetchBooks();
//       setEditBook(null);
//     } catch (error) {
//       console.error('Error updating book:', error.message);
//     }
//   };

//   const handleCancel = () => {
//     setEditBook(null);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const { error } = await supabase.from('Books').delete().eq('id', id);
//       if (error) {
//         throw error;
//       }
//       console.log('Book deleted successfully');
//       fetchBooks();
//     } catch (error) {
//       console.error('Error deleting book:', error.message);
//     }
//   };

//   return (
//     <div className='book-list'>
//       <h2>Submitted Books</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Subject</th>
//             <th>Publish Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.subject}</td>
//               <td>{book.publish_date}</td>
//               <td>
//                 <button onClick={() => handleEdit(book)}>Edit</button>
//                 <button onClick={() => handleDelete(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {editBook && (
//         <BookEdit
//           book={editBook}
//           onSave={handleSave}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

// export default BookList;
