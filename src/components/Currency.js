import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (curr) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        })
    }

    const format = (curr) => {
        switch (curr) {
            case "$":
                return "$ Dollar";
            case "£":
                return "£ Pound";
            case "€":
                return "€ Euro";
            case "₹":
                return "₹ Ruppee";
            default:
                return "Unkown currency";
        }
    }

    return (
        <Dropdown onSelect={(key) => changeCurrency(key)}>
            <Dropdown.Toggle className="alert alert-success" variant="success" id="dropdown-basic">
                Currency ({format(currency)})
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Currency;