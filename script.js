let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,  
};
let a1 = prompt("Введите обязательную статью доходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью доходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?");

    
alert(appData.budget/30);


