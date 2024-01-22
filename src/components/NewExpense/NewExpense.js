import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense({ onAddExpense }) {

  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  } 

    const stopEditingHandler = () => {
    setIsEditing(false);
  } 

  
  /* Creazione di un nuovo oggetto per l'array expenses
  che ha lo stesso nome dell'oggetto che contiene i dati del 
  componente-figlio expenseForm*/
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString()
    };
    
    onAddExpense(expenseData);
    setIsEditing(false);
  }


  return (

    <div className='new-expense'>
      {!isEditing && 
        (<button type="button" onClick={startEditingHandler}> Add new Expense </button>) 
      }

      {isEditing && 
        (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)
      }
      
    </div>
  );
}

export default NewExpense;
