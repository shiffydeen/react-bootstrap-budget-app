import React from 'react'
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap'

const BudgetCard = ({id, name, limit, viewExpensesModal, addExpenseModal, localStorageExpenses}) => {

    const totalExpenses = localStorageExpenses.filter(item => item.id === id).reduce((acc, expense) => {acc + expense}, 0);
    
  return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between fw-normal'>
                    <div>{name}</div>
                    <div>$1000/${limit}</div>
                </Card.Title>
                <ProgressBar now={30}/>
                <Stack direction='horizontal' className='mt-4'>
                    <Button variant='outline-primary' className='me-auto' onClick={() => addExpenseModal(id)}>Add Expense</Button>
                    <Button variant='outline-secondary' onClick={() => viewExpensesModal(name)}>View Expense</Button>
                </Stack>
            </Card.Body>
        </Card>
  )
}

export default BudgetCard
