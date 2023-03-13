import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Alert from 'react-bootstrap/Alert';

const TotalExpense = () => {
    const { expenses } = useContext(AppContext);
    const total = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return total;
}

const ExpenseTotal = () => {
    const { currency } = useContext(AppContext);
    return (
        <Alert variant="primary">Spent so far: {currency}{TotalExpense()}</Alert>
    );
};

export default ExpenseTotal;