import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState({
        enteredTitle:'',
        enteredPrice:'',
        enteredDate:''
    })
    
    
    const titleChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const priceChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setuserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        })
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text'
                    onChange={titleChangeHandler}
                    value={userInput.enteredTitle}
                    ></input>
                    
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01'
                    onChange={priceChangeHandler}
                    value={userInput.enteredPrice}
                    ></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31'
                    onChange={dateChangeHandler}
                    value={userInput.enteredDate}
                    ></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm