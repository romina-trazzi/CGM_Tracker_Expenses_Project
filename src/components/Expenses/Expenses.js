import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear}/>
      <ExpensesList filteredExpenses = {filteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;