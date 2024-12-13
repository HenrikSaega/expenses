import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expeneses = (props) => {
    return(
        <div className="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </div>
    )
}  

export default Expeneses;