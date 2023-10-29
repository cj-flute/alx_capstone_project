// Visualisation Creation of elements
const createCategoryVisualList = (category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("class", "categories");
    categoryDiv.setAttribute("id", "category-div");

    const theCategories = document.createElement("div");
    theCategories.setAttribute("class", "categories");
    theCategories.setAttribute("id", "the-categories");

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
    theCategoryAmt.innerText = category.category_ammount;
    
    theCategory.appendChild(categorySpan);
    theCategory.appendChild(categoryColonDollar);
    theCategory.appendChild(theCategoryAmt);
        
    categoryDiv.appendChild(theCategories);
    return categoryDiv;
}

document.addEventListener('DOMContentLoaded', () => {
    let expense = [];
    const storedExpense = localStorage.getItem('expense');
    if (storedExpense) {
        try {
            expense = JSON.parse(storedExpense);
        } catch (error) {
            console.error('Error parsing income data: ', error);
            expense = [];
        }
    }
    let tExpense = 0;
    for (let i = 0; i < expense.length; i++){
        tExpense = tExpense + expense[i].category_amount;
        console.log(`Expense ${i + 1}:${expense[i].category_name} = ${expense[i].category_amount}`);
    }

    // Expense
    const totalExpenditure = document.querySelector("#total-expenditure");
    totalExpenditure.innerHTML = tExpense;


});


// // Income
// const totalIncomes = document.querySelector("#total-incomes");
// totalIncomes.innerText = totalIncome;

// // Savings
// const totalKeeps = document.querySelector("#total-keeps");
// totalKeeps.innerText = totalSavings;
