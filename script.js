let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {whatExpenses: howManyExpenses},
    optionalExpenses: "",
    income: [],
    savings: false,  
};

var whatExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var howManyExpenses = prompt("Во сколько обойдется?");
alert(appData.budget/29);