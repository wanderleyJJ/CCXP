
const ingressos = [];


function addRedBorder(id) {
    element = document.querySelector(`#${id}`);
    element.style.border = "5px solid red"
}

function Destacar(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("destacarCard")
}

function addKEL()
{
  document.addEventListener('keydown', 
    (event)=> {

      var ingresso1 = document.getElementById("quinta");
      var ingresso2 = document.getElementById("sexta");
      var ingresso3 = document.getElementById("sabado");
      var ingresso4 = document.getElementById("domingo");

      
      var code = event.code;
      if(code  == 'Digit1') {

       ingresso1.classList.toggle("destacarCard");
       ingresso2.classList.remove("destacarCard");
       ingresso3.classList.remove("destacarCard");
       ingresso4.classList.remove("destacarCard")

      }
      if(code  == 'Digit2') {

        ingresso1.classList.remove("destacarCard");
        ingresso2.classList.toggle("destacarCard");
        ingresso3.classList.remove("destacarCard");
        ingresso4.classList.remove("destacarCard")
 
       }
       if(code  == 'Digit3') {

        ingresso1.classList.remove("destacarCard");
        ingresso2.classList.remove("destacarCard");
        ingresso3.classList.toggle("destacarCard");
        ingresso4.classList.remove("destacarCard")
 
       }
       if(code  == 'Digit4') {

        ingresso1.classList.remove("destacarCard");
        ingresso2.classList.remove("destacarCard");
        ingresso3.classList.remove("destacarCard");
        ingresso4.classList.toggle("destacarCard")
 
       }
  
  
    }, false);
}


 SelectCard = (selector) =>
     {
    var element = document.querySelector(selector);
    element.classList.toggle("selecionarCar");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}
showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}


addKEL();





