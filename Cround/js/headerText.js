
document.addEventListener("DOMContentLoaded", function(event) {
    const windowInnerWidth = document.documentElement.clientWidth;
    if(windowInnerWidth > 992){
        let text = document.querySelectorAll('.header__content_text'),
        max = 0;
        for(let i=0; i<text.length; i++){
            if(i!=1){
                console.log(text[i].offsetHeight)
                if(max < text[i].offsetHeight){
                    max = text[i].offsetHeight
                    console.log(max)
                }
                else{text[i].style.height = max + "px";}
                console.log(max)
            }
        }
    }
});