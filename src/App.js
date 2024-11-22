import './App.css';
import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [
    {
      date: new Date(2024, 11, 22),
      title: "New book",
      price: 19.99
    },
    {
      date: new Date(2024, 11, 22),
      title: "New Jeans",
      price: 49.99
    }
  ]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App;