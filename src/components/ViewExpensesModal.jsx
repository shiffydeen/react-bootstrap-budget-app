import React from 'react'
import { Button, Modal, Stack } from 'react-bootstrap'

const ViewExpensesModal = ({closeModal, show, expenses}) => {
  return (
    <Modal show={show} onHide={closeModal}> 
        
            <Modal.Header closeButton>
                <div className='d-flex align-items-center gap-2'>
                    <Modal.Title>Expenses - {expenses[0].budgetId}</Modal.Title>
                    <Button variant='outline-danger'>Delete</Button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Stack gap="3">
                    {expenses.map((expense) => {
                    const {name, cost, id} = expense;
                    return (
                        <Stack direction='horizontal' gap="2" className='fs-4' key={id}>
                            <span className='me-auto'>{name}</span>
                            <span>${cost}</span>
                            <Button variant='outline-danger' size='sm'>&times;</Button>
                        </Stack>
                    )
                    })}
                    {/* <Stack direction='horizontal' gap="2" className='fs-4'>
                        <span className='me-auto'>PS5</span>
                        <span>$1000</span>
                        <Button variant='outline-danger' size='sm'>&times;</Button>
                    </Stack>
                    <Stack direction='horizontal' gap="2" className='fs-4'>
                        <span className='me-auto'>PS5</span>
                        <span>$1000</span>
                        <Button variant='outline-danger' size='sm'>&times;</Button>
                    </Stack>
                    <Stack direction='horizontal' gap="2" className='fs-4'>
                        <span className='me-auto'>PS5</span>
                        <span>$1000</span>
                        <Button variant='outline-danger' size='sm'>&times;</Button>
                    </Stack> */}
                </Stack>
            </Modal.Body>
      
       
    </Modal>
  )
}

export default ViewExpensesModal
