import React, { useState } from "react";
import './AddExpense.css'
const AddExpense = () => {
    const [expenses,setExpenses]=useState([])

   const [expenseDetails,setExpenseDetails]=useState({amount:null,description:'',category:''})

   const amountHandler=(e)=>{
    setExpenseDetails({...expenseDetails,['amount']:e.target.value})
   }

   const descriptionHandler=(e)=>{
    setExpenseDetails({...expenseDetails,['description']:e.target.value})
   }


   const categoryHandler=(e)=>{
    setExpenseDetails({...expenseDetails,['category']:e.target.value})
   }

  const submitHandler=(e)=>{
    e.preventDefault()
    setExpenses([...expenses,expenseDetails])
    setExpenseDetails({amount:null,description:'',category:''})
  }


  return (
    <div>
      <div className="box">
        <div className="titled3">
          <h1>Add Expense</h1>
        </div>
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="field3">
              <label>Amount Spent</label>
              <input type="number"  required value={expenseDetails.amount} onChange={amountHandler}></input>
            </div>
            <div className="field4">
              <label>Description</label>
              <input type="text" required value={expenseDetails.description} onChange={descriptionHandler}></input>
            </div>
            <div className="field5">
                <label>Category</label>
              <select value={expenseDetails.category} onChange={categoryHandler}> 
                <option></option>
                <option >Food</option>
                <option >Fuel</option>
                <option >Elecricity</option>
                <option >Loan</option>
                <option >Personal</option>
                <option >Others</option>
              </select>

            </div>
            <div className="but">
                <button>Add</button>
            </div>
          </form>
        
        </div>
      </div>
      <div className="box">
          {expenses.map((item)=>(<>
          <div className="form1">
          <h1>{item.amount}</h1>
          <h1>{item.description}</h1>
          <h1>{item.category}</h1>
          </div>
          </>))}
          </div>
    </div>
  );
};

export default AddExpense;
