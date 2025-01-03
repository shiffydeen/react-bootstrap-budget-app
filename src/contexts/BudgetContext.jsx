import React, { createContext, useEffect, useState } from 'react'


export const BudgetContext = createContext()

export const uncategorizedBudgetId = "Uncategorized"


export const BudgetProvider = ({children}) => {

    const [localStorageBudgets, setLocalStorageBudgets] = useState(JSON.parse(localStorage.getItem('budgets')) || []);
    const [localStorageExpenses, setLocalStorageExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

    const addNewExpense = (item) => {
        // console.log(item)
        setLocalStorageExpenses((prev) => [...prev, item])
    }

    const addNewBudget = (item) => {
        // console.log(item)
        setLocalStorageBudgets((prev) => [...prev, item])
        // console.log(localStorageBudgets)
    }

    const budgetExpenses = (budgetId) => {
        return localStorageExpenses.filter(expense => expense.budgetId === budgetId)
    }

    const deleteBudget = (id) => {

        setLocalStorageExpenses(prevExpenses => {
            return prevExpenses.map(expense => {
                if (expense.budgetId !== id) return expense
                return {...expense, budgetId: uncategorizedBudgetId}
            })
        })

        const newBudgets = localStorageBudgets.filter(budget => budget.id !== id);
        // console.log(newBudgets)
        setLocalStorageBudgets(newBudgets);
    }

    function deleteExpense({ id }) {
        setLocalStorageExpenses(prevExpenses => {
          return prevExpenses.filter(expense => expense.id !== id)
        })
    }


      useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(localStorageExpenses))
      }, [localStorageExpenses]);
    
      useEffect(() => {
        localStorage.setItem('budgets', JSON.stringify(localStorageBudgets))
        // console.log(localStorageBudgets)
      }, [localStorageBudgets])

  return (
    <BudgetContext.Provider value={{
        localStorageBudgets, localStorageExpenses, addNewExpense, addNewBudget, budgetExpenses, deleteBudget, deleteExpense
    }}>
        {children}
    </BudgetContext.Provider>
  )
}

export default BudgetContext
