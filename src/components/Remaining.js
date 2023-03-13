import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Alert from 'react-bootstrap/Alert';

const Remaining = () => {
    const { currency, expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'danger' : 'success';
    return (
        <Alert variant={alertType}>Remaining: {currency}{budget - totalExpenses}</Alert>
    );
};

export default Remaining;