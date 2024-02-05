import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext({
  searchResults: null,
  setSearchResults: (results) => {},
})

export const SearchContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null)
  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
