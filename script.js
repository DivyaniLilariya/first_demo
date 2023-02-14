const btn=document.querySelector(".btn");

const color_text =  document.querySelector("#color_text")


const hexaCode = [0,1,2,3,4,5,6,"A","B","C","D","E","F"]

function getRandonNmuber(){
    return Math.floor(Math.random() * hexaCode.length)
}

btn.addEventListener("click",function(){
    let hexaColor = "#";

    for(let i =0; i<6; i++){
        hexaColor += hexaCode[getRandonNmuber()]

    }

    document.body.style.backgroundColor = hexaColor;  

    color_text.textContent = hexaColor;
})



