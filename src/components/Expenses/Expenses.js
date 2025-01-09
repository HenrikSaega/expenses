import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react"

const Expeneses = (props) => {

    //const [selectedYear, setSelectedYear] = useState(2025)

    const yearChangeHandler = (year) => {
        //setSelectedYear(year)
        console.log(`Expense.js => ${year}`)
        console.log(props)
    }
    return(
        <>
        <ExpensesFilter onChange={yearChangeHandler}/>
        <Card className="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
        </>
    )
}  

export default Expeneses;