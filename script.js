let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?"); // Плюс вначале для конвертации из строки в число (prompt всегда передает строку в виде аргумента)
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) { // Проверка. isNan возвращает true, если в money всё что угодно, кроме чисел.
        money = +prompt("Ваш бюджет на месяц?"); // Пока пользователь нормально не введет, будет отвечать на вопрос
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,  
};

function choseExspenses() {
    for(let i=0; i < 2; i++) { // i < 2 потому что у нас по сути комплекс из двух вопросов повторяющийся ДВА раза
        let a = prompt("Введите обязательную статью доходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) { // Проверяем переменные на пустое значение
            
            console.log("done"); // Проверка, всё ли правильно        
            
            appData.expenses[a] = b; // Когда пользователь ответит на первый вопрос (строка), его ответ запишется в виде свойства объекта expenses, 
            //а когда ответит на второй вопрос запишется в виде ответа на первый вопрос. Получится пара свойство - ключ.
        }else {
            i = i - 1;
        }
    }
}
choseExspenses();

appData.budgetPerDay = (appData.budget/30).toFixed(1); //Этот метод округляет до ближайшего. Число в скобках - количество чисел после запятой. Возращает строку,так что

alert("Ваш бюджет на один день равен " + appData.budgetPerDay);

if (appData.budgetPerDay < 100){
    console.log("У вас минимальный уровень достатка");
}else if(appData.budgetPerDay < 2000){
    console.log("У вас средний уровень достатка");
}else if(appData.budgetPerDay > 2000){
    console.log("У вас высокий уровень достатка");
}else {
    console.log("Произошла ошибка");
}

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        persent = +prompt("Под какой процент?");
        
    appData.mathIncome = save/100/12*persent;
    alert("Доход в месяц с вашего депозита " + appData.mathIncome);
    }
}
checkSavings();


