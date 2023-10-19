const addExpense = () => {
    addDiv.style.display = "block";
}
const addIncome = () => { 
    alert('add income');
}

const removeExpense = () => { 
    alert('remove expense');
}

const removeIncome = () => { 
    alert('remove income');
}
const budgetName = document.querySelector("#budget-name");
const budgetAmt = document.querySelector("#budget-amount");
const addDiv = document.querySelector(".add-div");

const validateForm = () => { 
    if (budgetName.value === '' && budgetAmt.value === '') {
        budgetName.style.border = "1px solid red";
        budgetAmt.style.border = "1px solid red";
        return false;
    }
    else if (budgetName.value === '') {
        budgetName.style.border = "1px solid red";
        return false;
    }
    else if (budgetAmt.value === '') {
        budgetAmt.style.border = "1px solid red";
        return false;
    }
    return true;
}
const info = () => { 
    const budget_name = budgetName.value;
    const budget_amount = budgetAmt.value;
    return {
        budget_name,budget_amount
    }
}

const resetForm = () => {
    budgetName.value = '';
    budgetAmt.value = '';
}
const closeForm = () => { 
    resetForm();
    budgetAmt.style.border = '1px solid black';
    budgetName.style.border = '1px solid black';
    addDiv.style.display = "none";
}
const expenseCancel = () => { 
    addDiv.style.display = "none";
}



export {
    addExpense,
    addIncome,
    removeExpense,
    removeIncome,
    validateForm,
    info,
    closeForm,
    expenseCancel
}