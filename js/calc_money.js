window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let name = document.querySelector('.calc__money_name'),
        money = document.querySelector('.calc__money_member'),
        confirm_btn = document.querySelector('.calc__money_confirm'),
        money_btn = document.querySelector('.calc__money_btn');
    name.addEventListener('change', ()=>{
        console.log(money);
        money.placeholder = `Введите сколько ${name.value} скинулся`;
        if(name.value == 'Максим' || name.value == 'Макс' || name.value == 'Максон' || name.value == 'Max' || name.value == 'максим' || name.value == 'макс' || name.value == 'максон' || name.value == 'max'){
            document.querySelector('.horror').classList.remove('whoosh');
            document.querySelector('.horror').classList.remove('disable');
            name.value = '';
            money.value = '';
            money.placeholder = `Введите сколько он скинулся`;
            setTimeout(() => {
                document.querySelector('.horror').classList.add('disable');
                setTimeout(() => {
                    document.querySelector('.horror').classList.add('whoosh');
                }, 500);
            }, 3000);
            
        }
    });
    confirm_btn.addEventListener('click', ()=>{
        let money_persones = document.querySelector('.calc__money_persones');
        if(name.value!='' && money.value!=''){
            money_persones.innerHTML += `<div class="calc__money_persone"><div class="calc__money_persone-name">${name.value}</div><div class="flex"><div class="calc__money_persone-money">${money.value}</div>₽</div></div>`;
            name.value = '';
            money.value = '';
            money.placeholder = `Введите сколько он скинулся`;
        }
    });
    money_btn.addEventListener('click', ()=>{
        let money_persones = document.querySelector('.calc__money_persones');
        if(money_persones.textContent != ''){
            let money__persone_name = document.querySelectorAll('.calc__money_persone-name'),
                money__persone_money = document.querySelectorAll('.calc__money_persone-money'),
                result = 0,
                money_result = document.querySelector('.calc__money_result');
            for(let i=0; i<money__persone_name.length; i++){
                console.log(money__persone_money[i].textContent);
                result += +money__persone_money[i].textContent;
            }
            money_result.innerHTML = `<h3>Сумма: ${result}</h3>`;
            let average = result/money__persone_name.length;
            console.log(average);
            for(let i=0; i<money__persone_name.length; i++){
                if(money__persone_money[i].textContent < average){
                    money_result.innerHTML += `<div>${money__persone_name[i].textContent} должен скинуть в банк ${Math.round((average - (+money__persone_money[i].textContent) + Number.EPSILON) * 100) / 100}₽</div>`;
                }
                else{
                    money_result.innerHTML += `<div>${money__persone_name[i].textContent} должен получить из банка ${Math.round(((+money__persone_money[i].textContent) - average + Number.EPSILON) * 100) / 100}₽</div>`;
                }
            }
        }
        else{
            let money_result = document.querySelector('.calc__money_result');
            money_result.innerHTML = `<h3>Введи хотя бы что-то, брат</h3>`;
        }
    });
});