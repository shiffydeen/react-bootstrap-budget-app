import { useContext, useEffect, useState } from 'react';

import { budgets, expenses } from './data';
import { Button, Card, CardBody, Container, ProgressBar, Stack } from 'react-bootstrap';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import ViewExpensesModal from './components/ViewExpensesModal';
import BudgetCard from './components/BudgetCard';
import BudgetContext from './contexts/BudgetContext';
import UncategorizedBudget from './components/UncategorizedBudget';
import TotalBudgetCard from './components/TotalBudgetCard';



function App() {

  const {localStorageBudgets, localStorageExpenses, budgetExpenses} = useContext(BudgetContext)


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

  

  return (
    <main>
      <Container>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budgets</Button>
          <Button variant='outline-primary' onClick={addExpenseModal}>Add Expenses</Button>
        </Stack>
        <div className='card-grids'>
          {localStorageBudgets.map((budget, index) => {
            const totalExpenses = budgetExpenses(budget.id).reduce((acc, expense) => acc + expense.cost, 0);
            return (
              <BudgetCard key={index} {...budget} viewExpensesModal={viewExpensesModal} addExpenseModal={addExpenseModal} totalExpenses={totalExpenses} />
            )
          })}

          <UncategorizedBudget 
          viewExpensesModal={viewExpensesModal} 
          addExpenseModal={addExpenseModal} />
          
          <TotalBudgetCard />
        </div>

        <AddBudgetModal 
          show={showAddBudgetModal} 
          closeModal={() => setShowAddBudgetModal(false)}/>

        <AddExpenseModal 
          show={showAddExpenseModal}  
          closeModal={() => setShowAddExpenseModal(false)} 
          budgetId={addExpenseBudgetId} />

        <ViewExpensesModal 
          show={showViewExpensesModal} 
          closeModal={() => setShowViewExpensesModal(false)} expenseName={expenseName} 
          budgetId={addExpenseBudgetId}/>

      </Container>
    </main>
    
  )
}

export default App
