export const expenses = [
    {
      id: 1,
      name: "PS5",
      budgetId: "Gaming",
      cost: 1000
    },
    {
      id: 2,
      name: "Nintendo",
      budgetId: "Gaming",
      cost: 700
    },
    {
      id: 3,
      name: "Asus PC",
      budgetId: "Gaming",
      cost: 600
    },
    {
      id: 4,
      name: "Rice",
      budgetId: "Groceries",
      cost: 250
    },
    {
      id: 5,
      name: "Beans",
      budgetId: "Groceries",
      cost: 250
    },
    {
      id: 6,
      name: "Spag",
      budgetId: "Groceries",
      cost: 400
    },
    {
      id: 7,
      name: "Garri",
      budgetId: "Groceries",
      cost: 350
    },
  
]


export const budgets = [
    {
        name: "Gaming",
        id: 1,
        total: expenses.filter(expense => expense.budgetId !== "Gaming").reduce((acc, item) => acc + item.cost, 0),
        limit: 2000
    },
    {
        name: "Groceries",
        id: 2,
        total: expenses.filter(expense => expense.budgetId !== "Groceries").reduce((acc, item) => acc + item.cost, 0),
        limit: 3000
    },
    {
        name: "Misc", 
        id: 3,
        total: expenses.filter(expense => expense.budgetId !== "Misc").reduce((acc, item) => acc + item.cost, 0),
        limit: 1500
    }
]

