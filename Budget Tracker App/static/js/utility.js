// Function to make the add category visible
const getCategory = (categoryDiv) => {
    categoryDiv.style.display = "block";
}

// Funtion that returns the value of the inputed Expense or income and ammount
const dataDict = (categoryName, categoryAmount) => {
    const category_name = categoryName.value;
    const category_amount = parseInt(categoryAmount.value);
    return {
        category_name, category_amount
    }
}

// Funtion to reset the expense form or the income form
const resetForm = (categoryName, categoryAmount) => {
    categoryName.value = '';
    categoryAmount.value = '';
}

// functioin that closes the inputed value 
const closeForm = (categoryName, categoryAmount, categoryDiv) => {
    categoryDiv.style.display = "none";
    document.querySelector("#expense-warning").style.display = 'none';
    document.querySelector("#savings-warning").style.display = "none";
    resetForm(categoryName, categoryAmount);
}

// function to hide expense or income add imput
const cancel = (categoryName, categoryAmount, categoryDiv) => {
    closeForm(categoryName, categoryAmount, categoryDiv);
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
let renderCard = (
    div,
    createFunc,
    arrayData
) => {
    div.innerHTML = '';
    for (let i = 0; i < arrayData.length; i++){
        const item = createFunc(arrayData[i], i);
        div.appendChild(item);
    }
    // arrayData.forEach((element, index) => {
    //     const item = createFunc(element, index);
    //     div.appendChild(item);
    // })
    console.log(arrayData);
    let totalAmount = arrayData.reduce((accumulator, initial) => {
        return accumulator + initial.category_amount;
    }, 0);
    console.log(`The total Amount is ${totalAmount}`);
    return totalAmount;
}

const balance = (incomeTotal, expenseTotal, savingsTotal, bal) => {
    let bals = parseInt(incomeTotal) - parseInt(expenseTotal) - parseInt(savingsTotal);
    bal.innerHTML = bals;
    if (bals < 11) {
        bal.style.color = "red";
    }
    else { 
        bal.style.color = "green";
    }
    return bals
}

const setData = (budgetName,
    budgetAmt,
    arrayData,
    btn
) => {
    budgetName.value = arrayData.category_name;
    budgetAmt.value = arrayData.category_amount;
    btn.innerHTML = "Edit";
}

// Funtions exported to app.js
export {
    getCategory,
    closeForm,
    cancel,
    validate,
    renderCard,
    balance,
    dataDict,
    setData,
}