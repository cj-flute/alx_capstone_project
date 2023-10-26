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

// Balance
let totalIncome = 0;
let totalExpense = 0;
let toatalSavings = 0;
const bal = document.querySelector("#balance");

// For Expenditure
const expenseAddDiv = document.querySelector("#expense-add-div");
const exOkBtn = document.querySelector("#ex-ok-btn");
const exAddBtn = document.querySelector("#ex-add-btn");
const totalEx = document.querySelector("#total-ex");
const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");
let expense = []; // Array that holds the whole expense

// First add button to add an expense
exOkBtn.addEventListener('click', () => {
    addCategory(expenseAddDiv);
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
    totalExpense = renderCard(
        ex_renderer,
        createExpenseCard,
        expense
    );
    totalEx.innerHTML = totalExpense;
    balance(totalIncome, totalExpense, toatalSavings, bal);
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
    const dollarSpanTag = document.createElement("h3");
    dollarSpanTag.innerText = "$";
    const amtSpanTag = document.createElement("h3");
    amtSpanTag.innerText = expenseData.category_amount;
    pTag.appendChild(dollarSpanTag);
    pTag.appendChild(amtSpanTag);

    currencyDiv.appendChild(pTag);
    excardDiv.appendChild(currencyDiv);


    const editDeleteDiv = document.createElement("div");
    editDeleteDiv.setAttribute("class", "edit-delete-div");

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", "btn-edit");
    btnEdit.textContent = "Edit";
    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";
    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    excardDiv.appendChild(editDeleteDiv);

    
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
    totalIncome = renderCard(
        in_renderer,
        createIncomeCard,
        income
    );
    totalIn.innerHTML = totalIncome;
    balance(totalIncome, totalExpense, toatalSavings, bal);
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
    const dollarSpanTag = document.createElement("h3");
    dollarSpanTag.innerText = "$";
    const amtSpanTag = document.createElement("h3");
    amtSpanTag.innerText = incomeData.category_amount;
    pTag.appendChild(dollarSpanTag);
    pTag.appendChild(amtSpanTag);

    
    currencyDiv.appendChild(pTag);
    incardDiv.appendChild(currencyDiv);
    
    const editDeleteDiv = document.createElement("div");
    editDeleteDiv.setAttribute("class", "edit-delete-div");

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", "btn-edit");
    btnEdit.textContent = "Edit";
    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";
    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    incardDiv.appendChild(editDeleteDiv);

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
    if (totalIncome < parseInt(saveAmt.value)) {
        document.querySelector("#savings-warning").style.display = "block";
        return
    }
    const save_renderer = document.querySelector('.save-budget-div');
    const saveData = dataDict(saveName, saveAmt);
    savings.push(saveData);
    toatalSavings = renderCard(
        save_renderer,
        createSaveCard,
        savings
    );
    totalSave.innerHTML = toatalSavings; 
    balance(totalIncome, totalExpense, toatalSavings, bal);
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
    const dollarSpanTag = document.createElement("h3");
    dollarSpanTag.innerText = "$";
    const amtSpanTag = document.createElement("h3");
    amtSpanTag.innerText = saveData.category_amount;
    pTag.appendChild(dollarSpanTag);
    pTag.appendChild(amtSpanTag);

    
    currencyDiv.appendChild(pTag);
    savecardDiv.appendChild(currencyDiv);
    
    const editDeleteDiv = document.createElement("div");
    editDeleteDiv.setAttribute("class", "edit-delete-div");

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", "btn-edit");
    btnEdit.textContent = "Edit";
    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";
    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    savecardDiv.appendChild(editDeleteDiv);

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