import React, { useContext } from 'react';
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap';
import BudgetContext from '../contexts/BudgetContext';

const BudgetCard = ({id, name, limit, noButtons, viewExpensesModal, addExpenseModal}) => {

    const {localStorageExpenses, budgetExpenses} = useContext(BudgetContext);

    const totalExpenses = budgetExpenses(id).reduce((acc, expense) => acc + expense.cost, 0);

    // console.log(localStorageExpenses)
    // .reduce((acc, expense) => {acc + expense.cost}, 0);
    // console.log(totalExpenses)

    const progressVariant = (amount, max) => {
        if (amount / max < 0.5 ) return 'success'
        if (amount / max < 0.75 ) return 'warning'
        return 'danger'
        
    }
    
  return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between fw-normal'>
                    <div>{name}</div>
                    <div>
                        ${totalExpenses}
                        {limit && (<span>/${limit}</span>)}
                    </div>
                </Card.Title>
                {limit && (<ProgressBar now={totalExpenses} min={0} max={limit} variant={progressVariant(totalExpenses, limit)}/>)}
                {!noButtons && 
                    (<Stack direction='horizontal' className='mt-4'>
                    <Button variant='outline-primary' className='me-auto' onClick={() => addExpenseModal(id)}>Add Expense</Button>
                    <Button variant='outline-secondary' onClick={() => viewExpensesModal(id, name)}>View Expense</Button>
                </Stack>)}
            </Card.Body>
        </Card>
  )
}



export default BudgetCard
