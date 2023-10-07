import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = { expenses: [], totalExpenses: 0 };

const ExpensesSlice = createSlice({
  name: "Expenses",
  initialState: initialExpensesState,
  reducers: {
    storeExpenses(state, action) {
      state.expenses = [...state.expenses, action.payload];
      action.payload.map((item)=>(state.totalExpenses=state.totalExpenses+parseInt(item.amount)))
    },
  },
});

export const expensesActions = ExpensesSlice.actions;

export default ExpensesSlice.reducer;
