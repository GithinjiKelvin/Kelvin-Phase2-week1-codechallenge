import React from 'react'

function Transactiontable({props}) {
  return (
    <div className='transactiontable'>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
            {props.map(({id, date, description, category, amount}) => (
                <tr key={id}>
                <td>{date}</td>
                  <td>{description}</td>
                  <td>{category}</td>
                  <td>{amount}</td>
                </tr>
            ))}
          
          
        </tbody>
      </table>
    </div>
  )
}

export default Transactiontable