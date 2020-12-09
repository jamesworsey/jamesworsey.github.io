
function updateWindow(){
    document.body.style.paddingLeft = (window.innerWidth - document.body.clientWidth);
    document.body.onclick=function(){
            document.body.style.paddingLeft = (window.innerWidth - document.body.clientWidth);
    }
}
window.onload=updateWindow();
window.addEventListener("resize", updateWindow());
updateWindow();
