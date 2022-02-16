import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';
const App = () => {
  const [state, setState] = useState(expenses);
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
      <Card className="expenses">
        {state.map((item) => (
          <ExpenseItem key={Math.random(Math.random()) * 1000} items={item} />
        ))}
      </Card>
    </div>
  );
};

export default App;
