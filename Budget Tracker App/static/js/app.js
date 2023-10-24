// Import of functions from utility.js
import {
    addExpense,
    addIncome,
    expenseData,
    incomeData,
    closeForm,
    validate,
    removeExpense,
    removeIncome,
    cancel,
    renderCard,
    balance
} from "./utility.js";

const exOkBtn = document.querySelector("#ex-ok-btn");
const inOkBtn = document.querySelector("#in-ok-btn");
const exAddBtn = document.querySelector("#ex-add-btn");
const inAddBtn = document.querySelector("#in-add-btn");
const totalEx = document.querySelector("#total-ex");
const totalIn = document.querySelector("#total-in");
const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");
const incomeName = document.querySelector("#income-name");
const incomeAmt = document.querySelector("#income-amount");



// For Expenditure
const expense = []; // Array that holds the whole expense

// First add button to add an expense
exOkBtn.addEventListener('click', () => {
    addExpense();
});

// The Ok button that you triger After inputing the data of expense to be added
exAddBtn.addEventListener('click', () => {
    const isValidate = validate(budgetName, budgetAmt);
    if (!isValidate) { 
        return
    }

    const ex_renderer = document.querySelector('.expense-budget-div');
    const exData = expenseData();
    expense.push(exData);
    renderCard(exData, ex_renderer, createExpenseCard);
    console.log(expense);
    let expenseTotalAmount = expense.reduce((accumulator, currentExpense) => {
        return accumulator + parseInt(currentExpense.budget_amount);
    }, 0);
    totalEx.innerHTML = expenseTotalAmount;
    closeForm();
});


// Function to create a new expense card
const createExpenseCard = (expenseData) => {
    const excardDiv = document.createElement("div");
    excardDiv.setAttribute("class", "card");


    const ex_budget_name = document.createElement("h3");
    ex_budget_name.innerText = expenseData.budget_name;
    excardDiv.appendChild(ex_budget_name);


    const imgTag = document.createElement("img");
    imgTag.setAttribute(
        "src",
        "/static/assets/images/pngtree-budget-line-icon-png-image_6620500.png"
    );
    imgTag.setAttribute("style", "width: 50px");
    imgTag.setAttribute("style", "height: 50px");
    imgTag.setAttribute("stlye", "border-radius: 50px");
    excardDiv.appendChild(imgTag);


    const currencyDiv = document.createElement("div");
    currencyDiv.setAttribute("class", "currency");

    const pTag = document.createElement("p");
    const dollarSpanTag = document.createElement("span");
    dollarSpanTag.innerText = "$";
    pTag.appendChild(dollarSpanTag);
    pTag.innerText = expenseData.budget_amount;

    currencyDiv.appendChild(pTag);
    excardDiv.appendChild(currencyDiv);

    const removeCheckBox = document.createElement("input");
    removeCheckBox.setAttribute("class", "remove");
    removeCheckBox.setAttribute("type", "checkbox");
    excardDiv.appendChild(removeCheckBox);

    return excardDiv;    
}



// ################################
// ################################

// For Income
const income = []; // Array that holds the whole income

// First add button to add an income
inOkBtn.addEventListener('click', () => {
    addIncome();
});


// The ok button that you triger after inputing the data of income to be added
inAddBtn.addEventListener('click', () => {
    const isValidate = validate(incomeName, incomeAmt);
    if (!isValidate) { 
        return
    }

    const in_renderer = document.querySelector('.income-budget-div');
    const inData = incomeData();
    income.push(inData);
    renderCard(inData, in_renderer, createIncomeCard);
    console.log(income);
    let incomeTotalAmount = income.reduce((accumulator, currentIncome) => {
        return accumulator + parseInt(currentIncome.income_amount);
    }, 0);
    totalIn.innerHTML = incomeTotalAmount;
    closeForm();
});

// Function to create a new income card
const createIncomeCard = (incomeData) => {
    const incardDiv = document.createElement("div");
    incardDiv.setAttribute("class", "card");


    const in_budget_name = document.createElement("h3");
    in_budget_name.innerText = incomeData.income_name;
    incardDiv.appendChild(in_budget_name);


    const imgTag = document.createElement("img");
    imgTag.setAttribute(
        "src",
        "/static/assets/images/pngtree-budget-line-icon-png-image_6620500.png"
    );
    imgTag.setAttribute("style", "width: 50px");
    imgTag.setAttribute("style", "height: 50px");
    imgTag.setAttribute("stlye", "border-radius: 50px");
    incardDiv.appendChild(imgTag);


    const currencyDiv = document.createElement("div");
    currencyDiv.setAttribute("class", "currency");

    const pTag = document.createElement("p");
    const dollarSpanTag = document.createElement("span");
    dollarSpanTag.innerText = "$";
    pTag.appendChild(dollarSpanTag);
    pTag.innerText = incomeData.income_amount;

    currencyDiv.appendChild(pTag);
    incardDiv.appendChild(currencyDiv);

    const removeCheckBox = document.createElement("input");
    removeCheckBox.setAttribute("class", "remove");
    removeCheckBox.setAttribute("type", "checkbox");
    incardDiv.appendChild(removeCheckBox);

    return incardDiv;    
}


// #################################
// #################################

// The cancel button to pop ups
const exCancel = document.querySelector("#ex-cancel");
const inCancel = document.querySelector("#in-cancel");
exCancel.addEventListener('click', () => {
    cancel();
})
inCancel.addEventListener('click', () => {
    cancel();
})
