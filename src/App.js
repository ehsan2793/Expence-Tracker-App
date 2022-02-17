import React, { useState } from 'react';
// import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList';
import './App.css';

const App = () => {
  const [state, setState] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = state.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const addExpense = (input) => {
    const newExpense = {
      id: Math.random(Math.random()) * 1000,
      title: input.title,
      amount: input.amount,
      date: input.date,
    };

    setState((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default App;
