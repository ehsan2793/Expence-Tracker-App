import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const { date, title, amount } = props.items;
    return (
        <Card className="expense-item ">
            <ExpenseDate date={date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">{amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
