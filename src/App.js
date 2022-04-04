import React, { useState } from "react";
import './index'
import { Button, Form, } from 'react-bootstrap';
import { years, months, accounts, costCentres } from './utils';

function App() {

  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState("Jan");
  const [costCenter, setCostCenter] = useState("CC101");
  const [account, setAccount] = useState(1000000);

  const runPred = async (year, month, account, costCenter) => {
    
    console.log(year, month, account, costCenter)
  }

  // console.log(year, month, account, costCenter)
  return (
    <div className="container">
      <br />
      <div className="col-md-6 offset-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Year</Form.Label>
            <Form.Select
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((year => (<option key={year} value={year}>{year}</option>)))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Month</Form.Label>
            <Form.Select
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((month => (<option key={month} value={month}>{month}</option>)))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account</Form.Label>
            <Form.Select
              onChange={(e) => setAccount(e.target.value)}
            >
              {accounts.map((account => (<option key={account} value={account}>{account}</option>)))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cost Centres</Form.Label>
            <Form.Select
              onChange={(e) => setCostCenter(e.target.value)}
            >
              {costCentres.map((costC => (<option key={costC} value={costC}>{costC}</option>)))}
            </Form.Select>
          </Form.Group>
          
          <Form.Group>
            <Button variant="primary" type="submit" onClick={() => runPred(year, month, account, costCenter)}>
              Predict
            </Button>
          </Form.Group>
        </Form>
      </div>
      
    </div>
  );
}

export default App;
