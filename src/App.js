import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import './App.css';
const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Card className="expenses">
        {expenses.map((item) => (
          <ExpenseItem key={Math.random(Math.random()) * 1000} items={item} />
        ))}
      </Card>
    </div>
  );
};

export default App;
