import React from 'react'

const Book = ({ book, index }) => {
  const [status, setStatus] = React.useState(book.status)

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'Checked Out' ? 'Available' : 'Checked Out'))
  }

  return (
    <li>
      {index + 1} | {book.title} | {book.author} | {status === 'Checked Out' ? book.dueDate : 'N/A'} | {status} 
      <button onClick={toggleStatus}>Toggle Status</button>
    </li>
  )
}

export default Book
