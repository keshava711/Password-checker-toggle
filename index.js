let icon=document.querySelector("i")
let inp=document.querySelector("input")
let msg=document.querySelector("p")

icon.onclick=function(){
    if(icon.className==="fa-solid fa-sun"){
        icon.className="fa-solid fa-moon";
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        icon.className="fa-solid fa-sun";
        document.body.style.backgroundColor="white"
        document.body.style.color="black"

    }
}




function check(z){
    if(z.key==="Enter"){
        if(inp.value.length<=4){
            msg.textContent="bad password"
            msg.style.color="red"
        }
        else if(inp.value.length>=4 && inp.value.length<=10 ){
             msg.textContent="good password"
             msg.style.color="orange"
        }
        else{
            msg.textContent="Strong password"
             msg.style.color="green"
        }
    }
}