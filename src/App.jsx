import { useContext, useEffect, useState } from 'react';

import { budgets, expenses } from './data';
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import ViewExpensesModal from './components/ViewExpensesModal';
import BudgetCard from './components/BudgetCard';
import BudgetContext from './contexts/BudgetContext';


function App() {

  const {localStorageBudgets, localStorageExpenses} = useContext(BudgetContext)

  // const localStorageBudgets = localStorage.getItem('budgets') || [];
  // const localStorageExpenses = localStorage.getItem('expenses') || [];

  // const [localStorageBudgets, setLocalStorageBudgets] = useState(JSON.parse(localStorage.getItem('budgets')) || []);
  // const [localStorageExpenses, setlocalStorageExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

  // console.log(localStorageBudgets)

  // console.log(localStorageBudgets)
  // console.log(localStorageExpenses)
  // const newLocal = localStorageBudgets.push({
  //   name: "pion"
  // })
  // console.log(newLocal)

  // console.log(localStorageBudgets)
  
  const [budgetArr, setBudgetArr] = useState(budgets);


  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);
  const [expenseName, setExpenseName] = useState("");

  const [addExpenseBudgetId, setAddExpenseBudgetId] = useState();
  

  const viewExpensesModal = (budgetId, name) => {
    
    setAddExpenseBudgetId(budgetId)
    setShowViewExpensesModal(true)
    setExpenseName(name)
    // console.log(newExpenses)
  }
  // console.log(budgets)

  const addExpenseModal = (budgetId) => {
    setShowAddExpenseModal(true);
    setAddExpenseBudgetId(budgetId)
    // console.log(budgetId)
  }

  // const addNewExpense = (item) => {
  //   // console.log(item)
  //   setLocalStorageExpenses((prev) => [...prev, item])
  // }

  // const addNewBudget = (item) => {
  //   // console.log(item)
  //   setLocalStorageBudgets((prev) => [...prev, item])
  //   // console.log(localStorageBudgets)
  // }

  const deleteBudget = (id) => {
    const newBudgets = localStorageBudgets.filter(budget => budget.id !== id)
    console.log(newBudgets)
    setLocalStorageBudgets(newBudgets)
  }

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budgets</Button>
          <Button variant='outline-primary' onClick={() => setShowAddExpenseModal(true)}>Add Expenses</Button>
        </Stack>
        <div className='card-grids'>
          {localStorageBudgets.map((budget, index) => {
            return (
              <BudgetCard key={index} {...budget} viewExpensesModal={viewExpensesModal} addExpenseModal={addExpenseModal} localStorageExpenses={localStorageExpenses}/>
            )
          })}
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

        <AddBudgetModal show={showAddBudgetModal} closeModal={() => setShowAddBudgetModal(false)}/>

        <AddExpenseModal show={showAddExpenseModal}  closeModal={() => setShowAddExpenseModal(false)} budgetId={addExpenseBudgetId} />

        <ViewExpensesModal show={showViewExpensesModal} closeModal={() => setShowViewExpensesModal(false)} expenseName={expenseName} budgetId={addExpenseBudgetId} deleteBudget={deleteBudget}/>

      </Container>
    </>
  )
}

export default App
