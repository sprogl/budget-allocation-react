
import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import { AppContext } from '../context/AppContext';
import Alert from 'react-bootstrap/Alert';

const Budget = () => {
    const maxBudget = 20000;
    const { currency, budget, dispatch, expenses } = useContext(AppContext);

    const totalExpense = expenses.reduce((total, item) => {
        return (total + item.cost);
    }, 0);


    const changeBudget = (event) => {
        let currentBudget = event.target.value;

        if (currentBudget > maxBudget) {
            alert(`The Budget cannot exceed ${currency}${maxBudget}.`)
        } else if (totalExpense > currentBudget) {
            alert(`The Budget cannot go below the total expense (${currency}${totalExpense}).`)
        } else {
            dispatch({
                type: "SET_BUDGET",
                payload: parseInt(currentBudget)
            });
        }
    }

    return (
        <Alert className="mb-3" variant="secondary">
            <InputGroup>
                <InputGroup.Text >Budget: {currency}</InputGroup.Text>
                <Form.Control id="budget" type="number" htmlSize={5} value={budget} step={10} onChange={(event) => changeBudget(event)} />
            </InputGroup>
        </Alert>
    );
};

export default Budget;