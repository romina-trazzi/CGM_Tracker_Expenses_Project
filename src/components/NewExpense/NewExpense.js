import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {

  
  /* Creazione di un nuovo oggetto per l'array expenses
  che ha lo stesso nome dell'oggetto che contiene i dati del 
  componente-figlio expenseForm*/
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString()
    };
    
    console.log(expenseData);

    onAddExpense(expenseData);
  }


  return (

    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
