import React, { useContext } from 'react'
import BudgetCard from './BudgetCard'
import {BudgetContext, uncategorizedBudgetId} from '../contexts/BudgetContext'

const UncategorizedBudget = (props) => {

    const {localStorageExpenses, budgetExpenses} = useContext(BudgetContext);

    const totalExpenses = budgetExpenses(uncategorizedBudgetId).reduce((acc, expense) => acc + expense.cost, 0);

    if (totalExpenses === 0) return null


  return (
      <BudgetCard totalExpenses={totalExpenses} name="Uncategorized" {...props} id={uncategorizedBudgetId} />
  )
}

export default UncategorizedBudget
