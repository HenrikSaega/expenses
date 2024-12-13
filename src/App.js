import './App.css';
import Expenses from './components/Expenses';

const App = () =>{
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
  
  return(
      <div className="App">
      <Expenses expenses={expenses} />
      </div>
  )   
}

export default App;