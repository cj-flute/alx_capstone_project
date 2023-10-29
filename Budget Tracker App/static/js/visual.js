// Visualisation Creation of elements
const createCategoryVisualList = (category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("class", "categories");
    // categoryDiv.setAttribute("id", "category-div");

    const theCategories = document.createElement("div");
    theCategories.setAttribute("class", "categories");
    // theCategories.setAttribute("id", "the-categories");
    
    const theCategory = document.createElement("b");
    theCategory.setAttribute("class", "the-category");
    
    const categorySpan = document.createElement("span");
    categorySpan.setAttribute("id", "category");
    categorySpan.innerText = category.category_name;
    
    const categoryColonDollar = document.createElement("span");
    categoryColonDollar.setAttribute("id", "category-colon-dollar");
    categoryColonDollar.innerText = ": $";
    
    const theCategoryAmt = document.createElement("span");
    theCategoryAmt.setAttribute("id", "the-category-amt");
    theCategoryAmt.innerText = category.category_amount;
    
    theCategory.appendChild(categorySpan);
    theCategory.appendChild(categoryColonDollar);
    theCategory.appendChild(theCategoryAmt);
    theCategories.appendChild(theCategory);
    categoryDiv.appendChild(theCategories);
    
    return categoryDiv;
}
const sectionExpense = document.querySelector("#section-expense");
const sectionIncome = document.querySelector("#section-income");
const sectionSavings = document.querySelector("#section-savings");

const renderVisualCreateList = (div, createFunc) => {
    const item = createFunc;
    div.appendChild(item);
}


document.addEventListener('DOMContentLoaded', () => {
});
// Expense
let expense = [];
const storedExpense = localStorage.getItem('expense');
if (storedExpense) {
    try {
        expense = JSON.parse(storedExpense);
    } catch (error) {
        console.error('Error parsing Expense data: ', error);
        expense = [];
    }
}
let tExpense = 0;
for (let i = 0; i < expense.length; i++){
    tExpense = tExpense + expense[i].category_amount;
    console.log(`Expense ${i + 1}:${expense[i].category_name} = ${expense[i].category_amount}`);
    renderVisualCreateList(sectionExpense, createCategoryVisualList(expense[i]));
}

const totalExpenditure = document.querySelector("#total-expenditure");
totalExpenditure.innerHTML = tExpense;

// income
let income = [];
const storedIncome = localStorage.getItem('income');
if (storedIncome) {
    try {
        income = JSON.parse(storedIncome);
    } catch (error) {
        console.error('Error parsing income data: ', error);
        income = [];
    }
}
let tIncome = 0;
for (let i = 0; i < income.length; i++){
    tIncome = tIncome + income[i].category_amount;
    console.log(`Income ${i + 1}:${income[i].category_name} = ${income[i].category_amount}`);
    renderVisualCreateList(sectionIncome, createCategoryVisualList(income[i]));
}
document.querySelector("#total-incomes").innerHTML = tIncome;

// save
let savings = [];
const storedSavings = localStorage.getItem('savings');
if (storedSavings) {
    try { 
        savings = JSON.parse(storedSavings);
    } catch (error) {
        console.error('Error parsing savings data: ', error.message);
        savings = [];
    }
}
let tSavings = 0;
for (let i = 0; i < income.length; i++) {
    if (savings[i] && savings[i].category_amount !== undefined) {
        tSavings += savings[i].category_amount;
        console.log(`Savings ${i + 1}: ${savings[i].category_name} = ${savings[i].category_amount}`);
        renderVisualCreateList(sectionSavings, createCategoryVisualList(savings[i]));

        // tSavings = tSavings + savings[i].category_amount;
        // console.log(`Savings ${i + 1}:${savings[i].category_name} = ${savings[i].category_amount}`);
    }
    document.querySelector("#total-savings").innerText = tSavings;
}
