import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Ramaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <Row>
                    {/* <div className='row mt-3'> */}
                    <Col>
                        {/* <div className='col-sm'> */}
                        <Budget />
                        {/* </div> */}
                    </Col>

                    <Col>
                        {/* <div className='col-sm'> */}
                        <Ramaining />
                        {/* </div> */}
                    </Col>

                    <Col>
                        {/* <div className='col-sm'> */}
                        <ExpenseTotal />
                        {/* </div> */}
                    </Col>

                    <Col>
                        {/* <div className='col-sm'> */}
                        <Currency />
                        {/* </div> */}
                    </Col>
                    {/* </div> */}
                </Row>

                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
