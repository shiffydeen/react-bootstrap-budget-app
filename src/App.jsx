import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap'
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';


function App() {

  const [showAddBudgetModal, setshowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setshowAddExpenseModal] = useState(false);

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setshowAddBudgetModal(true)}>Add Budgets</Button>
          <Button variant='outline-primary' onClick={() => setshowAddExpenseModal(true)}>Add Expenses</Button>
        </Stack>
        <div className='card-grids'>
          <Card>
            <CardBody>
              <Card.Title className='d-flex justify-content-between fw-normal'>
                <div>Gaming</div>
                <div>$1,250/$5,000</div>
              </Card.Title>
              <ProgressBar now={30}/>
              <Stack direction='horizontal' className='mt-4'>
                <Button variant='outline-primary' className='me-auto'>Add Expense</Button>
                <Button variant='outline-secondary'>View Expense</Button>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Card.Title className='d-flex justify-content-between fw-normal'>
                <div>Groceries</div>
                <div>$1,250/$5,000</div>
              </Card.Title>
              <ProgressBar now={30}/>
              <Stack direction='horizontal' className='mt-4'>
                <Button variant='outline-primary' className='me-auto'>Add Expense</Button>
                <Button variant='outline-secondary'>View Expense</Button>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Card.Title className='d-flex justify-content-between fw-normal'>
                <div>Misc</div>
                <div>$1,250/$5,000</div>
              </Card.Title>
              <ProgressBar now={30}/>
              <Stack direction='horizontal' className='mt-4'>
                <Button variant='outline-primary' className='me-auto'>Add Expense</Button>
                <Button variant='outline-secondary'>View Expense</Button>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Card.Title className='d-flex justify-content-between fw-normal'>
                <div>Total</div>
                <div>$1,250/$5,000</div>
              </Card.Title>
              <ProgressBar now={30}/>
            </CardBody>
          </Card>
        </div>
        <AddBudgetModal show={showAddBudgetModal} closeModal={() => setshowAddBudgetModal(false)}/>
        <AddExpenseModal show={showAddExpenseModal} closeModal={() => setshowAddExpenseModal(false)}/>
      </Container>
    </>
  )
}

export default App
