import React, {useState, useEffect} from 'react'
import { bankTransactions } from '../Data';

function Forminput() {

    const [recTransactions, setRecTransactions] = useState([]);
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    const dateChange = (e) => {
        setDate(e.target.value);
    }

    const descriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const categoryChange = (e) => {
        setCategory(e.target.value);
    }
    const amoutChange = (e) => {
        setAmount(e.target.value);
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        if(date.trim() && description.trim() && category.trim() && amount.trim() !==''){
            setRecTransactions([...recTransactions, date, description, category, amount])
            setDate("")
            setDescription("")
            setCategory("")
            setAmount("")
        }
        addTransactionToDb(recTransactions)
    }
     console.log(recTransactions)

    //  useEffect(() => {fetch('http://localhost:3000/allTransactions')
    //     .then(res => res.json())
    //     .then(setRecTransactions)}, [])
    
    //  function addTransactionToDb(recTransactions){
    //     fetch('http://localhost:3000/allTransactions', {
    //         method: 'POST',
    //         headers: {
    //             Accepts: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(recTransactions)
    //     })
    //     .then(res => res.json())
    //     .then(transac => console.log(transac))
    //  }


    function addTransactionToDb(recTransactions){
        fetch('http://localhost:3000/allTransactions', {
            method: 'POST',
            headers: {
                // Accepts: 'application/json',
                'content-Type': 'application/json'
            },
            body:JSON.stringify(recTransactions)
        })
        .then(res => res.json())
        .then(transac => console.log(transac))
        // .then(json => setRecTransactions([...recTransactions, json]))
    }

  return (
    <div className='data-input'>
        <form onSubmit={handleSubmission}>
            <label>Date: </label>
            <input type='date' value={date} onChange={dateChange}/>
            <input type='text' placeholder='Description' value={description} onChange={descriptionChange}/>
            <input type='text' placeholder='Category' value={category} onChange={categoryChange}/>
            <input type='text' placeholder='Amount' value={amount} onChange={amoutChange}/><br></br>
            <button type='submit'>Add Transaction</button>
        </form>
    </div>
  )
}

export default Forminput