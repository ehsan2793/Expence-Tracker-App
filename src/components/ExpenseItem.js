import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const { date, title, amount } = props.items;

    return (
        <div className="expense-item ">
            <ExpenseDate date={date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">{amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
