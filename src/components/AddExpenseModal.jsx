import React, { useContext, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import BudgetContext from '../contexts/BudgetContext';

const AddExpenseModal = ({show, closeModal, budgetId}) => {

    const {addNewExpense, localStorageBudgets} = useContext(BudgetContext)

    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
       const newExpense = {
            budgetId: budgetIdRef.current.value,
            name: descriptionRef.current.value,
            cost: Number(amountRef.current.value),
        }
        // console.log(newExpense)
        addNewExpense(newExpense)
        
    }

  return (
    <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" required ref={descriptionRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" required min={0} step={0.01} ref={amountRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Budget</Form.Label>
                    <Form.Select ref={budgetIdRef} defaultValue={budgetId}>
                        {localStorageBudgets.map((budget) => {
                            return (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button type="submit">Add</Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default AddExpenseModal
