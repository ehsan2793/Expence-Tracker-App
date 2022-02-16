import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { date, title, amount } = props.items;
    return (
        <div className="expense-item ">
            <div>{date.toISOString()}</div>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">{amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
