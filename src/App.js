import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import expenses from './data/expenses';
import './App.css';
const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <div className="expenses">
        {expenses.map((item) => (
          <ExpenseItem key={Math.random(Math.random()) * 1000} items={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
