import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const [state, setState] = useState(props.items);

    const clickHandler = (e) => {
        setState({ ...state, title: 'ehsan' });
    };
    return (
        <Card className="expense-item ">
            <ExpenseDate date={state.date} />
            <div className="expense-item_description">
                <h2>{state.title}</h2>
                <div className="expense-item_price">{state.amount}</div>
            </div>
            <button onClick={clickHandler}>change Title </button>
        </Card>
    );
};

export default ExpenseItem;
