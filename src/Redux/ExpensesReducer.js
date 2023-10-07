import { createSlice } from "@reduxjs/toolkit"


const initialExpensesState={expenses:[]}

const ExpensesSlice=createSlice({
    name:'Expenses',
    initialState:initialExpensesState,
    reducers:{
        storeExpenses(state,action){
            state.expenses=[
                ...state.expenses,
                action.payload
            ]
            
        }

    }
})


export const expensesActions=ExpensesSlice.actions

export default ExpensesSlice.reducer