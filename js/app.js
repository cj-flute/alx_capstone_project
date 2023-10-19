import {
    addExpense,
    addIncome,
    removeExpense,
    removeIncome,
    validateForm,
    info,
    closeForm,
    expenseCancel
} from "./utility.js";

const expense = [];
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener('click', () => {
    const isValidated = validateForm();
    if (!isValidated) {
        return;
    }
    const formInfo = info();
    closeForm();
    expense.push(formInfo)
    console.log(expense);
});



const btn = document.querySelectorAll(".btn");

console.log(btn);

btn[0].addEventListener('click', ()=>{
    removeExpense();
})

btn[1].addEventListener('click', () => {
    addExpense();
});

btn[2].addEventListener('click', () => {
    removeIncome();
});

btn[3].addEventListener('click', ()=>{
    addIncome();
})


const exCancel = document.querySelector("#ex-cancel");
exCancel.addEventListener('click', () => {
    expenseCancel();
})
const settings = btn[8];
