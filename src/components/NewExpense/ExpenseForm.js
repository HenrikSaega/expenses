import "./ExpenseForm.css"
import { useState ,useRef, Fragment } from "react"
import Error from "../UI/Error"

const ExpenseForm = (props) => {
    const [error, setError] = useState(null)
console.log(error)

    const [userInput, setuserInput] = useState({
        enteredTitle:'',
        enteredPrice:'',
        enteredDate:''
    })
    
    const titleInputRef = useRef()
    const priceInputRef = useRef()
    const dateInputRef = useRef()
    
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
            title: userInput.enteredTitle = titleInputRef.current.value,
            price: userInput.enteredPrice = priceInputRef.current.value,
            date: new Date(dateInputRef.current.value)
        }

        props.onSaveExpenseData(expenseData)


        titleInputRef.current.value = ''
        priceInputRef.current.value = ''
        dateInputRef.current.value = ''

        if(userInput.enteredTitle.trim().length === 0 || userInput.enteredPrice.trim().length === 0 || userInput.enteredDate.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            })
        }
    }

    const onCancel = (event) => {
        console.log('Cancel')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text'
                    onChange={titleChangeHandler}
                    ref={titleInputRef}
                    ></input>
                    
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01'
                    onChange={priceChangeHandler}
                    ref={priceInputRef}
                    ></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31'
                    onChange={dateChangeHandler}
                    ref={dateInputRef}
                    ></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm