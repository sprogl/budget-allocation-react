import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('100');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds  ${currency} ${remaining}`);
            setCost("");
            return;
        }

        if (name && action) {
            const expense = {
                name: name,
                cost: parseInt(cost),
            };
            if (action === "Reduce") {
                dispatch({
                    type: 'RED_EXPENSE',
                    payload: expense,
                });
            } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
        } else {
            alert('The fields "Department" and "Allocation" must be set.');
        }


    };

    return (
        <Row>
            <Col>
                <InputGroup className="mb-3" style={{ marginLeft: '2rem' }}>
                    <Dropdown onSelect={(key) => setName(key)}>
                        <Dropdown.Toggle variant="success">Department: {name}</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                            <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
                            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                            <Dropdown.Item eventKey="Human Resource">HR</Dropdown.Item>
                            <Dropdown.Item eventKey="IT">IT</Dropdown.Item>
                            <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </InputGroup>
            </Col>

            <Col>
                <InputGroup className="mb-3">
                    <Dropdown onSelect={(key) => setAction(key)}>
                        <Dropdown.Toggle variant="success">Allocation: {action}</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Add">Add</Dropdown.Item>
                            <Dropdown.Item eventKey="Reduce">Reduce</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </InputGroup>
            </Col>

            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Text>{currency}</InputGroup.Text>
                    <Form.Control id="allocation" type="number" htmlSize={5} size="lg" min={0} value={cost} step={10} onChange={(event) => setCost(event.target.value)} />
                </InputGroup>
            </Col>

            <Col>
                <InputGroup className="mb-3">
                    <Button className="btn btn-primary" type="submit" size="lg" onClick={submitEvent}>Save</Button>
                </InputGroup>
            </Col>
        </Row>
    );
};

export default AllocationForm;