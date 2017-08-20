function scrChange(){
    var scrVars, scrCnsl;
    scrVars = document.getElementById('vars');
    scrCnsl = document.getElementById('cnsl');

    scrVars.style.animation="fadeout 1s forwards"
    setTimeout(function() {
        scrVars.style.display="none";
        scrCnsl.style.animation="fadein 1s forwards"
        scrCnsl.style.display="block";        
    }, 1000);
}
