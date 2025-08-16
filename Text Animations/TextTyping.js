//Enter the element that will have this effect.
//Remember not to write it inside the HTML, but rather in the "text" variable.
const div=document.querySelector(".titulo"),
text="Test.";

function efectoTextTyping(elemento,text,i=0){
    elemento.textContent+=text[i];

    if (i==text.length-1){return;}
    setTimeout(() => efectoTextTyping(div,text,i+1),100);
}
efectoTextTyping(div,text)
