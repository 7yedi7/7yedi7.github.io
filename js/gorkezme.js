let i =0;
function indiki(){
    if (i>=5){
        i=0;
    }
    i=i+1;
    console.log(i);
    let ch = document.getElementById("change");
    ch.src = `./img/img/${i}.jpeg`;
}
function onki(){
    if (i == 0 || i == 1) {
        i = 6;
        console.log(i);
    }
    i=i-1;
    let ch = document.getElementById("change");
    ch.src = `./img/img/${i}.jpeg`;
    
}