window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    menu();
    catalog();
    window.onresize = function(){
        catalog();
    }
    mask();
    $('#form').on('submit', ()=>{
        $.ajax({
            type: "POST",
            url: './php/main.php',
            data: $('#form').serialize(), // serializes the form's elements.
            success: function(data)
            {
                alert(data); // show response from the php script.
            }
        });
    })
});
function menu(){
    let menu_btn = document.querySelector('.header__up_button'),
        menu = document.querySelector('.header__up_links'),
        close = document.querySelector('.header__up_close');
    menu_btn.addEventListener('click', ()=>{
        menu.classList.add('active');
    });
    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
}
function catalog(){
    let pageWidth = document.documentElement.scrollWidth;
    if(pageWidth<1400 && pageWidth>541){
        let catalog__cards = document.querySelectorAll('.swiper__desctop .catalog__cards'),
            kolvo = 0;
        for(let i=0;i<catalog__cards.length;i++){
            for(let k=0;k<catalog__cards[i].childNodes.length;k++){
                if(typeof(catalog__cards[i].childNodes[k].classList) != 'undefined'){
                    kolvo++;
                }
            }
            if(kolvo%2==0){
                catalog__cards[i].innerHTML+=`<div href="" class="catalog__card col-xl-3 col-md-4 col-12 p-2" style="opacity:0"></div>`;
            }
        }
    }
}
function mask(){
    let selector = document.querySelectorAll('input[type="tel"]');
    let input = new Inputmask('+7 (999) 999-99-99');
    input.mask(selector);
}
jQuery.preloadImages = function()
{
    for(var i = 0; i < arguments.length; i++){
        jQuery("<img>").attr("src", arguments[ i ]);
    }
};
$.preloadImages("./bg/header.svg", "./img/catalog/1.png", "./img/catalog/2.png", "./img/catalog/3.png", "./img/catalog/4.png", "./img/catalog/5.png", "./img/catalog/6.png", "./img/catalog/7.png", "./img/catalog/8.png", "./bg/map.svg", "./bg/about.svg");