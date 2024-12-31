import { useEffect, useState } from 'react';

import { budgets, expenses } from './data';
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import ViewExpensesModal from './components/ViewExpensesModal';
import BudgetCard from './components/BudgetCard';


function App() {

  // const localStorageBudgets = localStorage.getItem('budgets') || [];
  // const localStorageExpenses = localStorage.getItem('expenses') || [];

  const [localStorageBudgets, setLocalStorageBudgets] = useState(JSON.parse(localStorage.getItem('budgets')) || []);
  const [localStorageExpenses, setlocalStorageExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

  // console.log(localStorageBudgets)

  // console.log(localStorageBudgets)
  // console.log(localStorageExpenses)
  // const newLocal = localStorageBudgets.push({
  //   name: "pion"
  // })
  // console.log(newLocal)

  // console.log(localStorageBudgets)
  
  const [budgetArr, setBudgetArr] = useState(budgets);
  const [expenseArr, setExpenseArr] = useState(expenses);

  const [showAddBudgetModal, setshowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setshowAddExpenseModal] = useState(false);
  const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);
  const [expenseName, setExpenseName] = useState("");

  const [addExpenseBudgetId, setaddExpenseBudgetId] = useState();
  

  const viewExpensesModal = (budgetId, name) => {
    const newExpenses = localStorageExpenses.filter(expense => expense.budgetId === budgetId)
    setExpenseArr(newExpenses)
    setShowViewExpensesModal(true)
    setExpenseName(name)
    // console.log(newExpenses)
  }
  // console.log(budgets)

  const addExpenseModal = (budgetId) => {
    setshowAddExpenseModal(true);
    setaddExpenseBudgetId(budgetId)
    // console.log(budgetId)
  }

  const addNewExpense = (item) => {
    // console.log(item)
    setlocalStorageExpenses((prev) => [...prev, item])
  }

  const addNewBudget = (item) => {
    // console.log(item)
    setLocalStorageBudgets((prev) => [...prev, item])
    // console.log(localStorageBudgets)
  }

  const deleteBudget = (id) => {
    const newBudgets = localStorageBudgets.filter(budget => budget.id !== id)
    console.log(newBudgets)
    setLocalStorageBudgets(newBudgets)
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(localStorageExpenses))
  }, [localStorageExpenses]);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(localStorageBudgets))
    // console.log(localStorageBudgets)
  }, [localStorageBudgets])



  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setshowAddBudgetModal(true)}>Add Budgets</Button>
          <Button variant='outline-primary' onClick={() => setshowAddExpenseModal(true)}>Add Expenses</Button>
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
        <AddBudgetModal show={showAddBudgetModal} closeModal={() => setshowAddBudgetModal(false)} addNewBudget={addNewBudget} />

        <AddExpenseModal show={showAddExpenseModal}  closeModal={() => setshowAddExpenseModal(false)} budgetId={addExpenseBudgetId} addNewExpense={addNewExpense} localStorageBudgets={localStorageBudgets}/>

        <ViewExpensesModal expenses={expenseArr} show={showViewExpensesModal} closeModal={() => setShowViewExpensesModal(false)} expenseName={expenseName} deleteBudget={deleteBudget}/>
      </Container>
    </>
  )
}

export default App
