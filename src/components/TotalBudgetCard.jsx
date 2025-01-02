import React, { useContext } from 'react';
import BudgetCard from './BudgetCard';
import BudgetContext from '../contexts/BudgetContext';

const TotalBudgetCard = () => {
    const {localStorageBudgets, localStorageExpenses} = useContext(BudgetContext);

    const totalExpenses = localStorageExpenses.reduce((acc, expense) => acc + expense.cost, 0);

    const limit = localStorageBudgets.reduce((acc, budget) => acc + budget.limit, 0)

  return (
    <BudgetCard name="Total" noButtons totalExpenses={totalExpenses} limit={limit}/>
  )
}

export default TotalBudgetCard
