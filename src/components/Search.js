import React from 'react'

function Search({handleChange}) {
  return (
    <div className='search'>
        <form>
        <input type="text" placeholder="Search.." name="search"
        onChange={e => handleChange(e.target.value)}/>
        
      <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
  )
}

export default Search