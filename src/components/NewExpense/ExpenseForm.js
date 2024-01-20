import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addExpenseButton = <button type='submit'>Add Expense</button>
  const addExpenseFunctionButton = <button type='submit' className="" onClick={formOpenHandler}>Add New Expense</button>
  const hiddenClass = !isFormOpen ? 'hidden' : '';
  const flexAlignClass = !isFormOpen ? 'flexAlign' : '';
  
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  // expenseData è un oggetto che creiamo noi, con nomi di proprietà che decidiamo noi al momento (title, amount, date)
  function submitHandler (event) {
    event.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);

    // Svuotamento dei campi di input dopo l'invio del form grazie alla proprietà value negli input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  function formCloseHandler (event) {
    if (isFormOpen === true) {
      event.preventDefault();
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setIsFormOpen(false);
    }
  }

  function formOpenHandler (event) {
    event.preventDefault();
    setIsFormOpen(true);
  }

  return (

    <form onSubmit={submitHandler}>
      <div className={`new-expense__controls ${hiddenClass}`}>

        <div className={`new-expense__control ${hiddenClass}`}>
          <label>Title</label>
          <input 
            type='text' 
            onChange={titleChangeHandler} 
            name = "enteredTitle"
            value = {enteredTitle}/>
        </div>

        <div className={`new-expense__control ${hiddenClass}`}> 

          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            name = "enteredAmount"
            value = {enteredAmount}
          />
        </div>

        <div className={`new-expense__control ${hiddenClass}`}>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            name = "enteredDate"
            value = {enteredDate}
          />
        </div>

      </div>

      <div className={`new-expense__actions ${flexAlignClass}`}>
        <button type='button' className={`${hiddenClass}`} onClick={formCloseHandler}>Cancel</button>
        {isFormOpen ? addExpenseButton : addExpenseFunctionButton}
      </div>

    </form>
  );
}

export default ExpenseForm;



// Un oggetto con un solo useState al posto dei 3 useState 
/* const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount:'', enteredDate:''}); */


/* A noi in questo caso serve lo stato precedente, quindi si usa il prev.
Quindi da qui: setUserInput {...userInput, enteredTitle: event.target.value});
Si arriva qui: ((prevState) => {
    return {..prevState, enteredTitle: event.target.value }
  });

  function titleChangeHandler(event) {
    setUserInput((prevState)=> {
      return {...prevState, enteredTitle: event.target.value }
    });
  }



/* METODO PER GESTIRE LE FUNZIONI DI SETTING da 3 a 1 SOLA.
Notare l'uso di [name] che è lo stesso dell'input, mentre value 
è quello che l'utente inserisce nell'input */

// const inputChangeHandler = (event) => {
//   const {name, value} = event.target;
//   setUserInput((prevInput) => ({ 
//     ...prevInput,
//     [name] : value,
//   })
// )};

  




