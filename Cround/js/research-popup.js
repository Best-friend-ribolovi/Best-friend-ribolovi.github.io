function Research(e){
    let popup = document.querySelector('.research-popup'),
        popupBg = document.querySelector('.popup'),
        text,imgUrl,autor,percent;    
        console.log(e.path[0])
    if(e.path[0].classList.contains('research-block-text')){
        text = e.path[2].querySelector('.research-block-text').innerHTML;
        imgUrl = e.path[2].querySelector('.research-bg').src;
        autor = e.path[2].querySelector('.research-name').innerHTML;
        percent = e.path[2].querySelector('.research-percent-text').innerHTML;
        open();
    }
    else if( e.path[0].classList.contains('research-block-bg')){
        text = e.path[0].querySelector('.research-block-text').innerHTML,
        imgUrl = e.path[0].querySelector('.research-bg').src,
        autor = e.path[1].querySelector('.research-block-about').querySelector('.research-name').innerHTML,
        percent = e.path[1].querySelector('.research-block-about').querySelector('.research-percent-text').innerHTML;
        open();
    }
    function open(){
        /* Добавляем блоки в попап */
        console.log(popup);
        popup.querySelector('.research-popup-img').style.background = `url('${imgUrl}') center/cover no-repeat`;
        popup.querySelector('.research-name').innerHTML = autor;
        popup.querySelector('.research-percent-text').innerHTML = percent;
        popup.querySelector('.research-popup-text').innerHTML = text;
        
        /* Открываем попап */
        popup.classList.add('visible');
        popupBg.classList.add('visible');
        setTimeout(() => {
            popup.classList.add('active');
            popupBg.classList.add('active');
        }, 10);
        setTimeout(() => {
            lineCalc();
        }, 200);
        /* Стоп прокрутка */
        document.body.style.overflow = 'hidden';
        /* Стоп прокрутка */
    }
}
function closeResearch(){
    /* Старт прокрутка */
    document.body.style.overflow = '';
    /* Старт прокрутка */

    let popupBg = document.querySelector('.popup'),
        popup = document.querySelector('.research-popup');
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    setTimeout(() => {
        popupBg.classList.remove('visible');
        popup.classList.remove('visible');
        popup.querySelector('.research-percent-text').innerHTML = 0;
        lineCalc();
    }, 300);
}