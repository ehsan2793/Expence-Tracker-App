import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import expenses from './data/expenses';
const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      {expenses.map((item) => (
        <ExpenseItem key={Math.random(Math.random()) * 1000} items={item} />
      ))}
    </div>
  );
};

export default App;
