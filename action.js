window.scroll = () =>{
    if(document.documentElement.scrollTop > 0){
        document.getElementById('up').slideDown(300);
    } else{
        document.getElementById('up').slideUp(300);
    }
}