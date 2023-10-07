import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthStore";
import expensesReducer from "./ExpensesReducer"
import ThemeReducer from "./ThemeReducer";

const store=configureStore({
    reducer:{auth:authReducer,expens:expensesReducer,theme:ThemeReducer}
})


export default store;