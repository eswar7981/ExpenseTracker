import React, { useEffect, useState } from "react";
import "./AddExpense.css";
import axios from "axios";
import { expensesActions } from "../Redux/ExpensesReducer";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../Redux/ThemeReducer";
const AddExpense = () => {
  const dispatch = useDispatch();
  const expens = useSelector((state) => state.expens.expenses);
  const theme = useSelector((state) => state.theme.theme);
  const checkTotal = useSelector((state) => state.expens.totalExpenses);
  const [change, setChange] = useState("asa");
  const [expenses, setExpenses] = useState([]);
  const [expenseDetails, setExpenseDetails] = useState({
    amount: null,
    description: "",
    category: "",
  });

  const themeHandler = (e) => {
    e.preventDefault();
    dispatch(themeActions.isDark());
  };

  const amountHandler = (e) => {
    setExpenseDetails({ ...expenseDetails, ["amount"]: e.target.value });
  };

  const descriptionHandler = (e) => {
    setExpenseDetails({ ...expenseDetails, ["description"]: e.target.value });
  };

  const categoryHandler = (e) => {
    setExpenseDetails({ ...expenseDetails, ["category"]: e.target.value });
  };

  useEffect(() => {
    console.log("hi");
    async function Data() {
      try {
        const response = await fetch(
          "https://expense-tracker-241ff-default-rtdb.firebaseio.com/expenses.json",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const data = await response.json();
        let itemsArray = [];
        if (!!data) {
          itemsArray = Object.keys(data).map((expense) => {
            return {
              id: expense,
              amount: data[expense].amount,
              description: data[expense].description,
              category: data[expense].category,
            };
          });
        }
        dispatch(expensesActions.storeExpenses(itemsArray));
      } catch (err) {
        alert(err);
      }
    }
    Data();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://expense-tracker-241ff-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify({
            amount: expenseDetails.amount,
            description: expenseDetails.description,
            category: expenseDetails.category,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
    setExpenseDetails({
      amount: NaN,
      description: "",
      category: "",
    });
    setChange("sasa");
  }

  async function deleteHandler(e, id) {
    e.preventDefault();

    const response = await fetch(
      `https://expense-tracker-241ff-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  async function editHandler(e, id) {
    e.preventDefault();

    const response = await fetch(
      `https://expense-tracker-241ff-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setExpenseDetails({
      amount: data.amount,
      description: data.description,
      category: data.category,
    });

    const response1 = await fetch(
      `https://expense-tracker-241ff-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
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
              <input
                type="number"
                required
                value={expenseDetails.amount}
                onChange={amountHandler}
              ></input>
            </div>
            <div className="field4">
              <label>Description</label>
              <input
                type="text"
                required
                value={expenseDetails.description}
                onChange={descriptionHandler}
              ></input>
            </div>
            <div className="field5">
              <label>Category</label>
              <select
                value={expenseDetails.category}
                onChange={categoryHandler}
              >
                <option></option>
                <option>Food</option>
                <option>Fuel</option>
                <option>Elecricity</option>
                <option>Loan</option>
                <option>Personal</option>
                <option>Others</option>
              </select>
            </div>
            <div className="but">
              <button>Add</button>
            </div>

           
          </form>
          {checkTotal > 10000 && (
              <div className="flex">
                <div className="Premium">
                  <button onClick={themeHandler}>Activate Premium</button>
                </div>
                <div className="download">
                  <button>Download</button>
                </div>
              </div>
            )}
        </div>
      </div>

      <div className="box1">
        {expens.length !== 0 &&
          expens[0].map((item) => (
            <>
              <div className="expense">
                <div>
                  <li className="for">
                    <label>{item.amount}</label>
                    <label>{item.description}</label>
                    <label>{item.category}</label>
                    <div className="edit">
                      <button onClick={(e) => editHandler(e, item.id)}>
                        Edit
                      </button>
                    </div>
                    <div className="del">
                      <button onClick={(e) => deleteHandler(e, item.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default AddExpense;
