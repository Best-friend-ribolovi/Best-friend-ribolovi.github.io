document.addEventListener("DOMContentLoaded", function(event) {
    lineCalc();
});
function lineCalc(){
    const percent = document.querySelectorAll('.research-percent-text');
    let viewPercent = document.querySelectorAll('.research-view-percent');
    for(let i=0; i<viewPercent.length; i++){
        viewPercent[i].style.width = percent[i].innerHTML;
    }
};