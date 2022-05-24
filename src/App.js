
import ExpenseItem from './components/ExpenseItem';

function App() {

  const exp=[
    {expenseDate:new Date(2021,2,12),expenseType:'Car Insurance',expenseAmt:123.45},
    {expenseDate:new Date(2020,3,15),expenseType:'Bike Insurance',expenseAmt:456.78},
    {expenseDate:new Date(2022,5,18),expenseType:'Life Insurance',expenseAmt:678.90},
  ];
  


  return (
  <div>
    <h1>Let's get started</h1>
    <ExpenseItem date={exp[0].expenseDate}
                type={exp[0].expenseType}
                amt={exp[0].expenseAmt}
    ></ExpenseItem>
    <ExpenseItem date={exp[1].expenseDate}
                type={exp[1].expenseType}
                amt={exp[1].expenseAmt}
    ></ExpenseItem>
    <ExpenseItem date={exp[2].expenseDate}
                type={exp[2].expenseType}
                amt={exp[2].expenseAmt}
    ></ExpenseItem>

    </div>
  );
}

export default App;
