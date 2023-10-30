// Visualisation Creation of elements
const createCategoryVisualList = (category, money) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("class", "categories");

    const theCategories = document.createElement("div");
    theCategories.setAttribute("class", "cat");

    const bdiv = document.createElement("div");
    bdiv.setAttribute("class", "bold-div");
    theCategories.appendChild(bdiv);
    
    const theCategory = document.createElement("b");
    theCategory.setAttribute("class", "the-category");
    bdiv.appendChild(theCategory)
    
    const categorySpan = document.createElement("span");
    categorySpan.setAttribute("id", "category");
    categorySpan.innerText = category.category_name;
    
    const categoryColonDollar = document.createElement("span");
    categoryColonDollar.setAttribute("id", "category-colon-dollar");
    categoryColonDollar.innerText = ": $";
    
    const theCategoryAmt = document.createElement("span");
    theCategoryAmt.setAttribute("id", "the-category-amt");
    theCategoryAmt.innerText = category.category_amount;

    const outerBar = document.createElement("div")
    outerBar.setAttribute("class", "long-rectangle");
    outerBar.style.width = `100%`;
    console.log(money);

    const innerBar = document.createElement("div");
    innerBar.setAttribute("class", "shorter-rectangle");
    innerBar.style.width = `${(category.category_amount / money) * 100}%`;
    outerBar.appendChild(innerBar);
    theCategories.appendChild(outerBar);

    
    theCategory.appendChild(categorySpan);
    theCategory.appendChild(categoryColonDollar);
    theCategory.appendChild(theCategoryAmt);
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
let tExMoney = 0;
for (let k = 1; k <= expense.length; k++){
    tExMoney += expense[k-1].category_amount;
    if (k === expense.length) {
        for (let i = 0; i < expense.length; i++){
            tExpense = tExpense + expense[i].category_amount;
            console.log(`Expense ${i + 1}:${expense[i].category_name} = ${expense[i].category_amount}`);
            renderVisualCreateList(sectionExpense, createCategoryVisualList(expense[i],tExMoney));
        }

    }
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
let tInMoney = 0;
for (let k = 1; k <= income.length; k++){
    tInMoney += income[k - 1].category_amount;    
    if (k === income.length) {
        for (let i = 0; i < income.length; i++){
            tIncome = tIncome + income[i].category_amount;
            console.log(`Income ${i + 1}:${income[i].category_name} = ${income[i].category_amount}`);
            renderVisualCreateList(sectionIncome, createCategoryVisualList(income[i], tInMoney));
        }
    }
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
for (let i = 0; i < savings.length; i++) {
    if (savings[i] && savings[i].category_amount !== undefined) {
        tSavings += savings[i].category_amount;
        console.log(`Savings ${i + 1}: ${savings[i].category_name} = ${savings[i].category_amount}`);
        renderVisualCreateList(sectionSavings, createCategoryVisualList(savings[i], tInMoney));
    }
}
document.querySelector("#total-savings").innerText = tSavings;

// Balance
let balance = tIncome - tExpense - tSavings;
document.querySelector("#total-balance").innerHTML = balance;
const tinc = document.querySelector("#in");
const tbal = document.querySelector("#bal");
const tsav = document.querySelector("#sav");
const tex = document.querySelector("#ex"); 

tbal.style.width = `${(balance / tIncome) * 100}%`;
tsav.style.width = `${(tSavings / tIncome) * 100}%`;
tex.style.width = `${(tExpense / tIncome) * 100}%`;