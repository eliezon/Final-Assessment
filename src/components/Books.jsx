import React, { useState, useEffect } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';


const getRandomDueDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30) + 1; 
  const dueDate = new Date(today.setDate(today.getDate() + randomDays));
  return dueDate.toISOString().split('T')[0]; 
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const initialBooks = [
      { title: 'The Silent Echo', author: 'John', status: 'Checked Out' },
      { title: 'Dreams of the Desert', author: 'Jane', status: 'Checked Out' },
      { title: 'The Hidden Fortress', author: 'Mike', status: 'Available' },
      { title: 'Beneath the Waves', author: 'Lisa', status: 'Checked Out' },
      { title: 'The Clockwork Heart', author: 'Fritz', status: 'Available' },
      { title: 'Veil of Secrets', author: 'Jonathan', status: 'Available' },
      { title: 'The Forgotten Garden', author: 'Niño', status: 'Checked Out' },
      { title: 'Shadow of the Raven', author: 'Marc', status: 'Checked Out' },
      { title: 'Lost Horizons', author: 'Mark', status: 'Checked Out' },
      { title: 'The Enchanted Isle', author: 'Paul', status: 'Available' }
    ];

    const booksWithDueDates = initialBooks.map((book) => {
      if (book.status === 'Checked Out') {
        return { ...book, dueDate: getRandomDueDate() };
      }
      return { ...book, dueDate: '' };
    });

    setBooks(booksWithDueDates);
    setFilteredBooks(booksWithDueDates);
  }, []);

  return (
    <div className="container">
      <div className='content'>
        <div className='books'>
      <div className="header">
        <h1>Book Library</h1>
      </div>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <ul className="books-list">
        <li className="header">
          <div>No.</div>
          <div>Title</div>
          <div>Author</div>
          <div>Due Date</div>
          <div>Status</div>
        </li>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} index={index} />
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Books;

