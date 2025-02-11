import React from 'react'

const SearchResult = ({result}) => {
  return (
    <div onClick={(e) => alert(`You clicked ${result.itemCode}`)} className='p-4 hover:bg-[#efefef] font-semibold'>{result.itemCode}</div>
  )
}

export default SearchResult