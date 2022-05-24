import './ExpenseItem.css';


function ExpenseItem(props){
    // const date=new Date(2021,2,12);
    // const type='Car Insurce';
    // const amt=123.45;
   

    return (
    <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.type}</h2>
            <div className="expense-item__price">Rs.{props.amt}</div>
        </div>
  </div>
  );
}

export default ExpenseItem;