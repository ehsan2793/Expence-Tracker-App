import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm addExpense={props.addExpense} />
        </div>
    );
};

export default NewExpense;
