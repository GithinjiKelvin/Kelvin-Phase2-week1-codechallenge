import React, { useEffect, useState } from 'react'
import Transactiontable from './Transactiontable'
import { bankTransactions } from '../Data'
import Search from './Search';
import Forminput from './Forminput';


const bankApi = 'http://localhost:3000/allTransactions';


function Transaction() {

  const [transactions, setTransactions] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {fetch(bankApi)
.then(res => res.json())
.then(setTransactions)}, [])
  

  return (
    <div className='transactions'>
      <Search handleChange={setSearchTerm}/>
     <Forminput/>
        <Transactiontable props ={bankTransactions.filter(t => t.description.includes(searchTerm))}/>
        {/* <Transactiontable props ={transactions.filter(t => t.description.includes(searchTerm))}/> */}
    </div>
  )
}

export default Transaction