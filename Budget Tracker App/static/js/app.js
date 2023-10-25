// Import of functions from utility.js
import {
    addCategory,
    closeForm,
    validate,
    removeCategory,
    cancel,
    renderCard,
    balance,
    dataDict
} from "./utility.js";

// For Expenditure
const expenseAddDiv = document.querySelector("#expense-add-div");
const exOkBtn = document.querySelector("#ex-ok-btn");
const exAddBtn = document.querySelector("#ex-add-btn");
const totalEx = document.querySelector("#total-ex");
const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");

let expense = []; // Array that holds the whole expense
let listOfExpenseAmt = 0;



// First add button to add an expense
exOkBtn.addEventListener('click', () => {
    addCategory(expenseAddDiv);
    // addExpense();
});

// The Ok button that you triger After inputing the data of expense to be added
exAddBtn.addEventListener('click', () => {
    const isValidate = validate(budgetName, budgetAmt);
    if (!isValidate) { 
        return
    }
    const ex_renderer = document.querySelector('.expense-budget-div');
    const exData = dataDict(budgetName, budgetAmt);
    expense.push(exData);
    totalEx.innerHTML = renderCard(exData,
        ex_renderer,
        createExpenseCard,
        expense);
    console.log(totalEx.innerHTML);
    
    listOfExpenseAmt = totalEx.innerHTML;
    
    closeForm(budgetName, budgetAmt, expenseAddDiv);
});


// Function to create a new expense card
const createExpenseCard = (expenseData) => {
    const excardDiv = document.createElement("div");
    excardDiv.setAttribute("class", "card");
    
    const ex_budget_name = document.createElement("h3");
    ex_budget_name.innerText = expenseData.category_name;
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
    pTag.innerText = expenseData.category_amount;

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
const incomeAddDiv = document.querySelector("#income-add-div");
const inOkBtn = document.querySelector("#in-ok-btn");
const inAddBtn = document.querySelector("#in-add-btn");
const totalIn = document.querySelector("#total-in");
const incomeName = document.querySelector("#income-name");
const incomeAmt = document.querySelector("#income-amount");
let income = []; // Array that holds the whole income
let listOfIncomeAmt = 0;

// First add button to add an income
inOkBtn.addEventListener('click', () => {
    addCategory(incomeAddDiv);
});


// The ok button that you triger after inputing the data of income to be added
inAddBtn.addEventListener('click', () => {
    const isValidate = validate(incomeName, incomeAmt);
    if (!isValidate) { 
        return
    }
    const in_renderer = document.querySelector('.income-budget-div');
    const inData = dataDict(incomeName, incomeAmt);
    income.push(inData);
    totalIn.innerHTML = renderCard(inData,
        in_renderer,
        createIncomeCard,
        income
        );
        console.log(totalIn.innerHTML);
        
    listOfIncomeAmt = totalIn.innerHTML;
    closeForm(incomeName, incomeAmt, incomeAddDiv);
});
    
// Function to create a new income card
const createIncomeCard = (incomeData) => {
    const incardDiv = document.createElement("div");
    incardDiv.setAttribute("class", "card");
    
    
    const in_budget_name = document.createElement("h3");
    in_budget_name.innerText = incomeData.category_name;
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
    pTag.innerText = incomeData.category_amount;
    
    currencyDiv.appendChild(pTag);
    incardDiv.appendChild(currencyDiv);
    
    const removeCheckBox = document.createElement("input");
    removeCheckBox.setAttribute("class", "remove");
    removeCheckBox.setAttribute("type", "checkbox");
    incardDiv.appendChild(removeCheckBox);

    return incardDiv;    
}

// ################################
// ################################

// For Savings
const saveAddDiv = document.querySelector("#save-add-div");
const saveOkBtn = document.querySelector("#save-ok-btn");
const saveAddBtn = document.querySelector("#save-add-btn");
const totalSave = document.querySelector("#total-save");
const saveName = document.querySelector("#save-name");
const saveAmt = document.querySelector("#save-amount");
let savings = []; // Array that holds the whole savings
let listOfSaveAmt = 0;

// First add button to add an save
saveOkBtn.addEventListener('click', () => {
    addCategory(saveAddDiv);
});


// The ok button that you triger after inputing the data of save to be added
saveAddBtn.addEventListener('click', () => {
    const isValidate = validate(saveName, saveAmt);
    if (!isValidate) { 
        return
    }
    const save_renderer = document.querySelector('.save-budget-div');
    const saveData = dataDict(saveName, saveAmt);
    savings.push(saveData);
    totalSave.innerHTML = renderCard(saveData,
        save_renderer,
        createSaveCard,
        savings
        );
        console.log(totalSave.innerHTML);
        
    listOfSaveAmt = totalIn.innerHTML;
    closeForm(saveName, saveAmt, saveAddDiv);
});
    
// Function to create a new save card
const createSaveCard = (saveData) => {
    const savecardDiv = document.createElement("div");
    savecardDiv.setAttribute("class", "card");
    
    
    const save_budget_name = document.createElement("h3");
    save_budget_name.innerText = saveData.category_name;
    savecardDiv.appendChild(save_budget_name);


    const imgTag = document.createElement("img");
    imgTag.setAttribute(
        "src",
        "/static/assets/images/save-image.jpeg"
    );
    imgTag.setAttribute("style", "width: 50px");
    imgTag.setAttribute("style", "height: 50px");
    imgTag.setAttribute("stlye", "border-radius: 50px");
    savecardDiv.appendChild(imgTag);
    
    
    const currencyDiv = document.createElement("div");
    currencyDiv.setAttribute("class", "currency");

    const pTag = document.createElement("p");
    const dollarSpanTag = document.createElement("span");
    dollarSpanTag.innerText = "$";
    pTag.appendChild(dollarSpanTag);
    pTag.innerText = saveData.category_amount;
    
    currencyDiv.appendChild(pTag);
    savecardDiv.appendChild(currencyDiv);
    
    const removeCheckBox = document.createElement("input");
    removeCheckBox.setAttribute("class", "remove");
    removeCheckBox.setAttribute("type", "checkbox");
    savecardDiv.appendChild(removeCheckBox);

    return savecardDiv;    
}


// #################################
// #################################

// The cancel button to pop ups
const exCancel = document.querySelector("#ex-cancel");
const inCancel = document.querySelector("#in-cancel");
const saveCancel = document.querySelector("#save-cancel");
exCancel.addEventListener('click', () => {
    cancel(budgetName, budgetAmt, expenseAddDiv);
})
inCancel.addEventListener('click', () => {
    cancel(incomeName, incomeAmt, incomeAddDiv);
})
saveCancel.addEventListener('click', () => {
    cancel(saveName, saveAmt, saveAddDiv);
})