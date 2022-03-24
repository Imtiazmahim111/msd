//calculate function coding
function calculate() {
    let income = document.querySelector('#income-input');
    let food = document.querySelector('#food-input');
    let rent = document.querySelector('#rent-input');
    let clothes = document.querySelector('#clothes-input');
    let expenses = document.querySelector('#expenses');
    let balance = document.querySelector('#balance-output');
    if (income.value != '' && food.value != '' && rent.value != '' && clothes.value != '') {
        incomeValue = Number(income.value);
        foodValue = Number(food.value);
        rentValue = Number(rent.value);
        clothesValue = Number(clothes.value);
        totalExpenses = foodValue + rentValue + clothesValue;
        if (totalExpenses > incomeValue) {
            alert('Your Expenses amount is bigger than your income');
        } else {
            expenses.innerText = totalExpenses;
            balance.innerText = incomeValue - totalExpenses;
        }
    } else {
        alert('Please! Enter the values First');
    }
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
}

