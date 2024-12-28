import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddExpenseModal = ({show, closeModal}) => {
  return (
    <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" required min={0} step={0.01}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Budget</Form.Label>
                    <Form.Select>
                        <option>Gaming</option>
                        <option>Groceries</option>
                        <option>Uncategorized</option>
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
