import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from 'react'

const DYMYMY_EXPENSES = [
  {
    id: "id1",
    date: new Date(2025, 11, 22),
    title: "New book",
    price: 19.99
  },
  {
    id: "id2",
    date: new Date(2024, 11, 22),
    title: "New Jeans",
    price: 49.99
  }
]

const App = () =>{
  const[expenses, setExpenses] = useState(DYMYMY_EXPENSES)

    const addExpenseHandler = (expense) => {
      console.log('In App.js')
      console.log(expense)
      setExpenses(expenses => {
        return [expense, ...expenses]
      })
    }

  return(
      <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      </div>
  )   
}

export default App;