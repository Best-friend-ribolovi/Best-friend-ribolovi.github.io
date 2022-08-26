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
            money_persones.innerHTML += `<div class="calc__money_persone"><div class="calc__money_persone-name">${name.value}</div><div class="flex"><div class="calc__money_persone-money">${money.value}</div>₽<div class="persone-delete">X</div></div></div>`;
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
            let debtor__name = new Array(),
                debtor__money = new Array(),
                recipient__name = new Array(),
                recipient__money = new Array();

            let j=0, k=0;
            for(let i=0; i<money__persone_name.length; i++){
                if(money__persone_money[i].textContent < average){
                    // money_result.innerHTML += `<div>${money__persone_name[i].textContent} должен скинуть в банк ${Math.round((average - (+money__persone_money[i].textContent) + Number.EPSILON) * 100) / 100}₽</div>`;
                    debtor__money[j] = (Math.round((average - (+money__persone_money[i].textContent) + Number.EPSILON) * 100)/100);
                    debtor__name[j] = money__persone_name[i].textContent;
                    console.log(`Должник ${debtor__name[j]}: ${debtor__money[j]}`);
                    j++;
                }
                else{
                    // money_result.innerHTML += `<div>${money__persone_name[i].textContent} должен получить из банка ${Math.round(((+money__persone_money[i].textContent) - average + Number.EPSILON) * 100) / 100}₽</div>`;
                    recipient__money[k] = (Math.round(((+money__persone_money[i].textContent) - average + Number.EPSILON) * 100) / 100);
                    recipient__name[k] = money__persone_name[i].textContent;
                    console.log(`Получатель ${recipient__name[k]}: ${recipient__money[k]}`);
                    k++;
                }
            }
            for(let i=0; i<k;i++){
                for(let q=0; q<j; q++){
                    if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]>debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${debtor__money[q]}₽ ${recipient__name[i]}у</div>`;
                        console.log('1');
                        recipient__money[i] -= debtor__money[q];
                        debtor__money[q] = 0;
                    }
                    else if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]<debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${recipient__money[i]}₽ ${recipient__name[i]}у</div>`;
                        console.log('2');
                        recipient__money[i] = 0;
                        debtor__money[q] -= recipient__money[i];
                    }
                    else if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]==debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${recipient__money[i]}₽ ${recipient__name[i]}у</div>`;
                        console.log('3');
                        recipient__money[i] = 0;
                        debtor__money[q] = 0;
                    }
                }
            }
            money_result.innerHTML += `<h3>Внимание!!! На данный момент функция, показывающая кто кому сколько должен находится в стадии тестирования!<br>При возникновении ошибок пишите <a href="https://vk.com/artur.safin">Артуру</a></h3>`;
        }
        else{
            let money_result = document.querySelector('.calc__money_result');
            money_result.innerHTML = `<h3>Введи хотя бы что-то, брат</h3>`;
        }
    });
    let calc__money_persones = document.querySelector('.calc__money_persones');
    calc__money_persones.addEventListener('click', (event)=>{
        let target = event.target,
            persone_delete = document.querySelectorAll('.persone-delete');
        if (target && target.classList.contains('persone-delete')){
            for(let i = 0; i < persone_delete.length; i++){
                if (target == persone_delete[i]){
                    console.log(persone_delete[i].parentNode.parentNode.remove());
                }
            }
        }
    });
});