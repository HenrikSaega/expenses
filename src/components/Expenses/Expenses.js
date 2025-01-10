import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react"

const Expeneses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2023')
    const yearChangeHandler = (year) => {
        console.log(`Expense.js => ${year}`)
        setFilteredYear(year)
    }
    

    const filteredExpeneses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChange={yearChangeHandler}/>
            {
                filteredExpeneses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}  

export default Expeneses;