function change_mode(){
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    //const b = document.querySelector("#b");
    if(b.paused){
        b.play();
        c.textContent = "ON";
        c.style.background = 'lightgreen';
        c.style.color = 'black';
    }else{
        b.pause();
        c.textContent = "OFF";
        c.style.background = 'gray';
        c.style.color = 'white';
    }
}
