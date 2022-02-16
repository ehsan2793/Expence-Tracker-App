import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const initialState = {
        title: '',
        amount: '',
        date: '',
    };
    const [userInput, setUserInput] = useState(initialState);
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setUserInput((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date.replace('-', ',')),
        };

        props.addExpense(expenseData);
        setUserInput(initialState);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="new-expense_controls">
                    <div className="new-expense_control">
                        <label>Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Car Insurance"
                            onChange={changeHandler}
                            value={userInput.title}
                        />
                    </div>

                    <div className="new-expense_control">
                        <label>Amout</label>
                        <input
                            name="amount"
                            type="number"
                            min="0.01"
                            step="0.01"
                            placeholder="100.0"
                            onChange={changeHandler}
                            value={userInput.amount}
                        />
                    </div>
                    <div className="new-expense_control">
                        <label>Date</label>
                        <input
                            name="date"
                            type="date"
                            min="2022-01-01"
                            max="2024-12-31"
                            onChange={changeHandler}
                            value={userInput.date}
                        />
                    </div>
                </div>
                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;
