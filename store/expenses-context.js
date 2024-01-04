import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 44.21,
    date: new Date("2021-11-23"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 14.21,
    date: new Date("2022-1-21"),
  },
  {
    id: "e3",
    description: "Apple",
    amount: 4.11,
    date: new Date("2022-11-13"),
  },
  {
    id: "e4",
    description: "Banana",
    amount: 76.211,
    date: new Date("2021-21-17"),
  },
  {
    id: "e5",
    description: "Shoes",
    amount: 44.21,
    date: new Date("2022-9-8"),
  },
  {
    id: "e6",
    description: "Bag",
    amount: 7.4,
    date: new Date("2021-22-10"),
  },
  {
    id: "e7",
    description: "Tints",
    amount: 15.2,
    date: new Date("2021-8-26"),
  },
  {
    id: "e8",
    description: "Sown",
    amount: 100.2,
    date: new Date("2001-7-12"),
  },
  {
    id: "e9",
    description: "Dragon",
    amount: 99.1,
    date: new Date("2021-4-31"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpnese: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = {...updatableExpense, ...action.payload.data}
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updateItem;
      return updatedExpenses;
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpnese(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
