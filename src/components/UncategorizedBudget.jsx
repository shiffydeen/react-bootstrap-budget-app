import React, { useContext } from 'react'
import BudgetCard from './BudgetCard'
import {BudgetContext, uncategorizedBudgetId} from '../contexts/BudgetContext'

const UncategorizedBudget = (props) => {

    const {localStorageExpenses, budgetExpenses} = useContext(BudgetContext);

    const amount = budgetExpenses(uncategorizedBudgetId).reduce((acc, expense) => acc + expense.cost, 0);

    if (amount === 0) return null


  return (
      <BudgetCard amount={amount} name="Uncategorized" {...props}/>
  )
}

export default UncategorizedBudget
