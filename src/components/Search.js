import React from 'react'

function Search() {
  return (
    <div className='search'>
        <form>
        <input type="text" placeholder="Search.." name="search"/>
        
      <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
  )
}

export default Search