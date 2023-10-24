const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");
const incomeName = document.querySelector("#income-name");
const incomeAmt = document.querySelector("#income-amount");
const expenseAddDiv = document.querySelector("#expense-add-div");
const incomeAddDiv = document.querySelector("#income-add-div");



// Function to make the div to add expense visible
const addExpense = () => {
    expenseAddDiv.style.display = "block";
}

// Function to make the div to add income visible
const addIncome = () => { 
    incomeAddDiv.style.display = "block";
}


// Function to remove an expense
const removeExpense = () => { 
    alert('remove expense');
}

// Function to remove an income
const removeIncome = () => { 
    alert('remove income');
}


// Funtion that returns the value of the inputed Expense and ammount
const expenseData = () => {
    const budget_name = budgetName.value;
    const budget_amount = budgetAmt.value;
    return {
        budget_name, budget_amount
    }
}

// Fundtion that returns the value of the inputed income and ammount
const incomeData = () => {
    const income_name = incomeName.value;
    const income_amount = incomeAmt.value;
    return {
        income_name, income_amount
    }
}

// Funtion to reset the expense form or the income form
const resetForm = () => {
    budgetName.value = '';
    budgetAmt.value = '';
    incomeName.value = '';
    incomeAmt.value = '';
}

// functioin that closes the inputed value 
const closeForm = () => { 
    expenseAddDiv.style.display = "none";
    incomeAddDiv.style.display = "none";
    resetForm();
}

// function to hide expense or income add imput
const cancel = () => { 
    expenseAddDiv.style.display = "none";
    incomeAddDiv.style.display = "none";
    resetForm();
}

// function to validate
const validate = (name, amount) => { 
    if (name.value === '' || amount.value === '') {
        name.style.border = "1px solid red";
        amount.style.border = "1px solid red";
        return false;
    }
    return true;
}

// Function to render the Expense or income card created
const renderCard = (data, div, createFunc) => {
    const item = createFunc(data);
    div.appendChild(item);
}

const balance = (incomeTotal, expenseTotal) => {
    console.log(incomeTotal - expenseTotal);
    return (incomeTotal - expenseTotal) 
}


// Funtions exported to app.js
export {
    addExpense,
    addIncome,
    removeExpense,
    removeIncome,
    expenseData,
    incomeData,
    closeForm,
    cancel,
    validate,
    renderCard,
    balance
}