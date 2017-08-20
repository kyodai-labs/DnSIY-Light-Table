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

function scrReturn(){
    var scrVars, scrCnsl;
    scrVars = document.getElementById('vars');
    scrCnsl = document.getElementById('cnsl');

    scrCnsl.style.animation="fadeout 1s forwards"
    setTimeout(function() {
        scrCnsl.style.display="none";
        scrVars.style.animation="fadein 1s forwards"
        scrVars.style.display="block";        
    }, 1000);
}
