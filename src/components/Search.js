import React from 'react'

function Form() {
  return (
    <div className='search'>
        <form>
        <input type="text" placeholder="Search.." name="search"/>
        
      <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
  )
}

export default Form