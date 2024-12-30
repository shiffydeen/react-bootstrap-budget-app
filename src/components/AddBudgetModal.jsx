import React, { useRef } from 'react'
import { v4 as uuidV4 } from "uuid";
import { Button, Form, Modal } from 'react-bootstrap'

const AddBudgetModal = ({show, closeModal, addNewBudget}) => {

    const budgetName = useRef();
    const limitAmount = useRef();


    function handleSubmit(e) {
        e.preventDefault();
        const newBudget = {
            id: uuidV4(),
            name: budgetName.current.value,
            limit: Number(limitAmount.current.value),
        }
        addNewBudget(newBudget)
    }

  return (
    <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required ref={budgetName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control type="number" required min={0} step={0.01} ref={limitAmount}/>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button type="submit">Add</Button>
                </div>
                
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default AddBudgetModal
