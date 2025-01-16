import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    return(
        <>
        {
            props.expenses.length === 0 && <p className='wh-text'>No expenses found.</p>
        }
        <ul>
        {
            props.expenses.length > 0 && props.expenses.map((expense) => {
                return <ExpenseItem data={expense} key={expense.id}/>
            })
        }
        </ul>
        </>
    )
}

export default ExpenseList