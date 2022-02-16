import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className="expense-item ">
            <div>February 15 ,2022</div>
            <div className="expense-item_description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">257.95</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
