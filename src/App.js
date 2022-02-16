import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import './App.css';

const App = () => {
  const [state, setState] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const addExpense = (input) => {
    const newExpense = {
      title: input.title,
      amount: input.amount,
      date: input.date,
    };

    setState([newExpense, ...state]);
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card className="expenses">
        {state.map((item) => (
          <ExpenseItem key={Math.random(Math.random()) * 1000} items={item} />
        ))}
      </Card>
    </div>
  );
};

export default App;
