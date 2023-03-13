import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoAddCircleSharp, IoRemoveCircleSharp } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoAddCircleSharp size='2.5em' color="#2AA10F" onClick={event => increaseAllocation(props.name)} /></td>
            <td><IoRemoveCircleSharp size='2.5em' color="red" onClick={event => decreaseAllocation(props.name)} /></td>
            <td><TiDelete size='2.5em' color="red" onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;