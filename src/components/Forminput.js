import React from 'react'

function Forminput() {
  return (
    <div className='data-input'>
        <form>
            <label>Date</label>
            <input type='date'/>
            <input type='text' placeholder='Description'/>
            <input type='text' placeholder='Category'/>
            <input type='text' placeholder='Amount'/><br></br>
            <input type='submit' placeholder='Add'/>
        </form>
    </div>
  )
}

export default Forminput