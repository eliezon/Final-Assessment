import React, { useState, useEffect } from 'react'

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBooks(filtered)
  }, [searchQuery, books, setFilteredBooks])

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchFilter
