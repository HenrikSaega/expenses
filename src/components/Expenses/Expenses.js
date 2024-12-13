import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expeneses = (props) => {
    return(
        <Card className="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}  

export default Expeneses;