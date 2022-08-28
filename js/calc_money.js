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
            money_persones.innerHTML += `<div class="calc__money_persone"><div class="calc__money_persone-name">${name.value.trimEnd()}</div><div class="flex"><div class="calc__money_persone-money">${money.value.replace(",",".")}</div>₽<div class="persone-delete">X</div></div></div>`;
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
                    console.log(recipient__name[i].indexOf(' ') >= 0);
                    if(recipient__name[i].indexOf(' ') > 0){
                        console.log('2 слова');
                        let firstWord = recipient__name[i].split(" ")[0],
                            secondWorld = recipient__name[i].split(" ")[1];
                        if(firstWord.slice(-1) == 'б'  || firstWord.slice(-1) == 'в' || firstWord.slice(-1) == 'г' || firstWord.slice(-1) == 'д'  || firstWord.slice(-1) == 'ж' || firstWord.slice(-1) == 'з' || firstWord.slice(-1) == 'к'  || firstWord.slice(-1) == 'л' || firstWord.slice(-1) == 'м' || firstWord.slice(-1) == 'н' || firstWord.slice(-1) == 'п' || firstWord.slice(-1) == 'р' || firstWord.slice(-1) == 'с' || firstWord.slice(-1) == 'т' || firstWord.slice(-1) == 'ф' || firstWord.slice(-1) == 'х' || firstWord.slice(-1) == 'ц' || firstWord.slice(-1) == 'ч' || firstWord.slice(-1) == 'ш' || firstWord.slice(-1) == 'щ'){
                            firstWord += 'у';
                        }
                        else if(firstWord.slice(-1) == 'й'){
                            firstWord = firstWord.slice(0, -1) + 'ю';
                        }
                        else if(firstWord.slice(-1) == 'я'){
                            firstWord = firstWord.slice(0, -1) + 'е';
                        }
                        if(secondWorld.slice(-1) == 'б'  || secondWorld.slice(-1) == 'в' || secondWorld.slice(-1) == 'г' || secondWorld.slice(-1) == 'д'  || secondWorld.slice(-1) == 'ж' || secondWorld.slice(-1) == 'з' || secondWorld.slice(-1) == 'к'  || secondWorld.slice(-1) == 'л' || secondWorld.slice(-1) == 'м' || secondWorld.slice(-1) == 'н' || secondWorld.slice(-1) == 'п' || secondWorld.slice(-1) == 'р' || secondWorld.slice(-1) == 'с' || secondWorld.slice(-1) == 'т' || secondWorld.slice(-1) == 'ф' || secondWorld.slice(-1) == 'х' || secondWorld.slice(-1) == 'ц' || secondWorld.slice(-1) == 'ч' || secondWorld.slice(-1) == 'ш' || secondWorld.slice(-1) == 'щ'){
                            secondWorld += 'у';
                        }
                        else if(secondWorld.slice(-1) == 'й'){
                            secondWorld = secondWorld.slice(0, -1) + 'ю';
                        }
                        else if(secondWorld.slice(-1) == 'я'){
                            secondWorld = secondWorld.slice(0, -1) + 'е';
                        }
                        recipient__name[i] = firstWord + ' ' + secondWorld;
                    }
                    else{
                        if(recipient__name[i].slice(-1) == 'б'  || recipient__name[i].slice(-1) == 'в' || recipient__name[i].slice(-1) == 'г' || recipient__name[i].slice(-1) == 'д'  || recipient__name[i].slice(-1) == 'ж' || recipient__name[i].slice(-1) == 'з' || recipient__name[i].slice(-1) == 'к'  || recipient__name[i].slice(-1) == 'л' || recipient__name[i].slice(-1) == 'м' || recipient__name[i].slice(-1) == 'н' || recipient__name[i].slice(-1) == 'п' || recipient__name[i].slice(-1) == 'р' || recipient__name[i].slice(-1) == 'с' || recipient__name[i].slice(-1) == 'т' || recipient__name[i].slice(-1) == 'ф' || recipient__name[i].slice(-1) == 'х' || recipient__name[i].slice(-1) == 'ц' || recipient__name[i].slice(-1) == 'ч' || recipient__name[i].slice(-1) == 'ш' || recipient__name[i].slice(-1) == 'щ'){
                            recipient__name[i] += 'у';
                        }
                        else if(recipient__name[i].slice(-1) == 'й'){
                            recipient__name[i] = recipient__name[i].slice(0, -1) + 'ю';
                        }
                        else if(recipient__name[i].slice(-1) == 'я'){
                            recipient__name[i] = recipient__name[i].slice(0, -1) + 'е';
                        }
                    }
                    
                    if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]>debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${(Math.round(((debtor__money[q]) + Number.EPSILON) * 100) / 100)}₽ ${recipient__name[i]}</div>`;
                        console.log('1');
                        recipient__money[i] -= debtor__money[q];
                        debtor__money[q] = 0;
                    }
                    else if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]<debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${(Math.round(((recipient__money[i]) + Number.EPSILON) * 100) / 100)}₽ ${recipient__name[i]}</div>`;
                        console.log('2');
                        debtor__money[q] -= recipient__money[i];
                        recipient__money[i] = 0;
                    }
                    else if(recipient__money[i]>0 && debtor__money[q]>0 && recipient__money[i]==debtor__money[q]){
                        money_result.innerHTML += `<div>${debtor__name[q]} отправит ${(Math.round(((debtor__money[q]) + Number.EPSILON) * 100) / 100)}₽ ${recipient__name[i]}</div>`;
                        console.log('3');
                        recipient__money[i] = 0;
                        debtor__money[q] = 0;
                    }
                }
            }
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