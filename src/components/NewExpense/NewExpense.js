import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const StopEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={StopEditing}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm addExpense={props.addExpense} onCancel={StopEditing} />
            )}
        </div>

        // <div className="new-expense">
        //     <ExpenseForm addExpense={props.addExpense}
        //         onCancel={stopEditingHandler} />
        // </div>
    );
};

export default NewExpense;
