let pressed = false
const show = ()=>{
    let hidden = document.getElementById("hidden");
    if(pressed){
        pressed = false;
        hidden.classList.add("none")
        hidden.classList.remove("show")
    }else{
        pressed = true;
        hidden.classList.add("show")
        hidden.classList.remove("none")
    }
}