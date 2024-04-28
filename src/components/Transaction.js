import React from 'react'
import Transactiontable from './Transactiontable'
import { bankTransactions } from '../Data'



function Transaction() {
  return (
    <div className='transactions'>
        <Transactiontable props ={bankTransactions}/>
    </div>
  )
}

export default Transaction