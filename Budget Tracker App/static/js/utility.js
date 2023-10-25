// Function to make the add category visible
const addCategory = (categoryDiv) => {
    categoryDiv.style.display = "block";
}

// Function to remove a category
const removeCategory = (categoryDiv) => {
    alert('removed');
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
    resetForm(categoryName, categoryAmount);
}

// function to hide expense or income add imput
const cancel = (categoryName, categoryAmount, categoryDiv) => {
    categoryDiv.style.display = "none";
    resetForm(categoryName, categoryAmount);
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
    data,
    div,
    createFunc,
    arrayData
    ) => {
    const item = createFunc(data);
    div.appendChild(item);
    console.log(arrayData);
    let totalAmount = arrayData.reduce((accumulator, initial) => {
        return accumulator + initial.category_amount;
    }, 0);
    console.log(`The total Amount is ${totalAmount}`);
    return totalAmount;
}

const balance = (incomeTotal, expenseTotal) => {
    console.log(incomeTotal - expenseTotal);
    return (incomeTotal - expenseTotal) 
}

// Funtions exported to app.js
export {
    addCategory,
    removeCategory,
    closeForm,
    cancel,
    validate,
    renderCard,
    balance,
    dataDict
}