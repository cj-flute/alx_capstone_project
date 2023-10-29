// Import of functions from utility.js
import {
    getCategory,
    closeForm,
    validate,
    cancel,
    renderCard,
    balance,
    dataDict,
    setData,
} from "./utility.js";

// Balance
let totalIncome = 0;
let totalExpense = 0;
let totalSavings = 0;
let currentIndex = -1;
const bal = document.querySelector("#balance");
bal.innerText = 0;

// For Expenditure
const expenseAddDiv = document.querySelector("#expense-add-div");
const exOkBtn = document.querySelector("#ex-ok-btn");
const exAddBtn = document.querySelector("#ex-add-btn");
const totalEx = document.querySelector("#total-ex");
const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");
const ex_renderer = document.querySelector('.expense-budget-div');
let expense = []; // Local storage that holds the whole expense
const storedExpense = localStorage.getItem('expense');
if (storedExpense) {
    try {
        expense = JSON.parse(storedExpense);
    } catch (error) {
        console.error('Error parsing income data: ', error);
        expense = [];
    }
}


// First add button to add an expense
exOkBtn?.addEventListener('click', () => {
    getCategory(expenseAddDiv);
});

// The Ok button that you triger After inputing the data of expense to be added
exAddBtn?.addEventListener('click', () => {
    const isValidate = validate(budgetName, budgetAmt);
    if (!isValidate) { 
        return
    }
    if (totalIncome < parseInt(budgetAmt.value)) {
        document.querySelector("#expense-warning").style.display = "block";
        return;
    }
    const exData = dataDict(budgetName, budgetAmt);

    let currentbtn = exAddBtn.innerHTML;

    // Add or Edit condition for expense
    if (currentbtn === "Edit") {
        // edit
        console.log("in");
        expense[currentIndex] = exData;
        exAddBtn.innerHTML = "ok";
        currentIndex = -1;
    }
    else {
        expense.push(exData);
    }

    totalExpense = renderCard(
        ex_renderer,
        createExpenseCard,
        expense
    );
    totalEx.innerHTML = totalExpense;
    balance(totalIncome, totalExpense, totalSavings, bal);
    
    const stringifyExpense = JSON.stringify(expense);
    localStorage.setItem("expense", stringifyExpense);

    closeForm(budgetName, budgetAmt, expenseAddDiv);
});


// Function to create a new expense card
const createExpenseCard = (expenseData, index) => {
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
    
    // Edit functionality in the card creation for expense
    btnEdit.addEventListener('click', () => {
        setData(budgetName,
            budgetAmt,
            expense[index],
            exAddBtn
        );
        getCategory(expenseAddDiv);
        currentIndex = index;
    });

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";

    // Delete funtionality in the card creation for expense
    btnDelete.addEventListener('click', () => {
        expense.splice(index, 1);
        const stringifyExpense = JSON.stringify(expense);
        localStorage.setItem("expense", stringifyExpense);

        totalExpense = renderCard(ex_renderer, createExpenseCard, expense);
        totalEx.innerHTML = totalExpense;
        balance(totalIncome, totalExpense, totalSavings, bal);
    });

    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    excardDiv.appendChild(editDeleteDiv);

    
    return excardDiv;    
}
totalExpense = renderCard(
        ex_renderer,
        createExpenseCard,
        expense
);
totalEx.innerHTML = totalExpense;
balance(totalIncome, totalExpense, totalSavings, bal);

// ################################
// ################################

// For Income
const incomeAddDiv = document.querySelector("#income-add-div");
const inOkBtn = document.querySelector("#in-ok-btn");
const inAddBtn = document.querySelector("#in-add-btn");
const totalIn = document.querySelector("#total-in");
const incomeName = document.querySelector("#income-name");
const incomeAmt = document.querySelector("#income-amount");
const in_renderer = document.querySelector('.income-budget-div');
let income = []; // localstorage that holds the whole income
const storedIncome = localStorage.getItem('income');
if (storedIncome) {
    try {
        income = JSON.parse(storedIncome);
    } catch (error) {
        console.error('Error parsing income data: ', error);
        income = [];
    }
}


// First add button to add an income
inOkBtn.addEventListener('click', () => {
    getCategory(incomeAddDiv);
});


// The ok button that you triger after inputing the data of income to be added
inAddBtn.addEventListener('click', () => {
    const isValidate = validate(incomeName, incomeAmt);
    if (!isValidate) { 
        return
    }
    const inData = dataDict(incomeName, incomeAmt);

    let currentbtn = inAddBtn.innerHTML;

    // Add or Edit condition for income
    if (currentbtn === "Edit") {
        // edit
        income[currentIndex] = inData;
        inAddBtn.innerHTML = "ok";
        currentIndex = -1;
    }
    else {
        income.push(inData);
    }

    totalIncome = renderCard(
        in_renderer,
        createIncomeCard,
        income
    );
    totalIn.innerHTML = totalIncome;
    balance(totalIncome, totalExpense, totalSavings, bal);

    const stringifyIncome = JSON.stringify(income);
    localStorage.setItem("income", stringifyIncome);
    
    closeForm(incomeName, incomeAmt, incomeAddDiv);
});

// Function to create a new income card
const createIncomeCard = (incomeData, index) => {
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

    // Edit functionality in the card creation for income
    btnEdit.addEventListener('click', () => {
        setData(incomeName,
            incomeAmt,
            income[index],
            inAddBtn
        );
        getCategory(incomeAddDiv);
        currentIndex = index;
    });
        
    // Delete funtionality in the card creation for income
    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";
    
    btnDelete.addEventListener('click', () => {
        income.splice(index, 1);
        const stringifyIncome = JSON.stringify(income);
        localStorage.setItem("income", stringifyIncome);
        
        totalIncome = renderCard(in_renderer, createIncomeCard, income);
        totalIn.innerHTML = totalIncome;
        balance(totalIncome, totalExpense, totalSavings, bal);
    });
    
    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    incardDiv.appendChild(editDeleteDiv);
    
    return incardDiv;    
}
totalIncome = renderCard(
        in_renderer,
        createIncomeCard,
        income
    );
totalIn.innerHTML = totalIncome;
balance(totalIncome, totalExpense, totalSavings, bal);

// ################################
// ################################

// For Savings
const saveAddDiv = document.querySelector("#save-add-div");
const saveOkBtn = document.querySelector("#save-ok-btn");
const saveAddBtn = document.querySelector("#save-add-btn");
const totalSave = document.querySelector("#total-save");
const saveName = document.querySelector("#save-name");
const saveAmt = document.querySelector("#save-amount");
const save_renderer = document.querySelector('.save-budget-div');
let savings = []; // Array that holds the whole savings
const storedSavings = localStorage.getItem('savings');
if (storedSavings) {
    try {
        savings = JSON.parse(storedSavings);
    } catch (error) {
        console.error('Error parsing income data: ', error);
        savings = [];
    }
}



// First add button to add an save
saveOkBtn.addEventListener('click', () => {
    getCategory(saveAddDiv);
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
    const saveData = dataDict(saveName, saveAmt);

    let currentbtn = saveAddBtn.innerHTML;

    // Add or Edit condition for save
    if (currentbtn === "Edit") {
        // edit
        savings[currentIndex] = saveData;
        saveAddBtn.innerHTML = "ok";
        currentIndex = -1;
    }
    else {
        savings.push(saveData);
    }

    totalSavings = renderCard(
        save_renderer,
        createSaveCard,
        savings
    );
    totalSave.innerHTML = totalSavings; 
    balance(totalIncome, totalExpense, totalSavings, bal);

    const stringifySavings = JSON.stringify(savings);
    localStorage.setItem("savings", stringifySavings);
    closeForm(saveName, saveAmt, saveAddDiv);
});
    
// Function to create a new save card
const createSaveCard = (saveData, index) => {
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

    // Edit functionality in the card creation for save
    btnEdit.addEventListener('click', () => {
        setData(saveName,
            saveAmt,
            savings[index],
            saveAddBtn
        );
        getCategory(saveAddDiv);
        currentIndex = index;
    });

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btn-delete");
    btnDelete.textContent = "Delete";

    // Delete funtionality in the card creation for save
    btnDelete.addEventListener('click', () => {
        savings.splice(index, 1);
        const stringifySavings = JSON.stringify(savings);
        localStorage.setItem("savings", stringifySavings);

        totalSavings = renderCard(save_renderer, createSaveCard, savings);
        totalSave.innerHTML = totalSavings;
        balance(totalIncome, totalExpense, totalSavings, bal);
    });

    editDeleteDiv.appendChild(btnEdit);
    editDeleteDiv.appendChild(btnDelete);
    savecardDiv.appendChild(editDeleteDiv);

    return savecardDiv;    
}
totalSavings = renderCard(
        save_renderer,
        createSaveCard,
        savings
);
totalSave.innerHTML = totalSavings; 
balance(totalIncome, totalExpense, totalSavings, bal);


// #################################
// #################################

// The cancel button to pop ups
const exCancel = document.querySelector("#ex-cancel");
const inCancel = document.querySelector("#in-cancel");
const saveCancel = document.querySelector("#save-cancel");
exCancel.addEventListener('click', () => {
    cancel(budgetName, budgetAmt, expenseAddDiv);
});
inCancel.addEventListener('click', () => {
    cancel(incomeName, incomeAmt, incomeAddDiv);
});
saveCancel.addEventListener('click', () => {
    cancel(saveName, saveAmt, saveAddDiv);
});