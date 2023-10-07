import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthStore";
import expensesReducer from "./ExpensesReducer"


const store=configureStore({
    reducer:{auth:authReducer,expens:expensesReducer}
})


export default store;