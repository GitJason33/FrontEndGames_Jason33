let operators = "+x-÷";
let selectedOperator;
let switchOperand = 0;
let operand1 = '', operand2 = '';
let calcField = document.querySelector("#calcField");

// this makes my page act like live server, comment it to stop it
// function reload(){
//    location.reload();
// }
// window.setTimeout(reload, 5000);

function add(th){
   if(switchOperand == 0){
      switchOperators(1);
      if(operators.indexOf(th) < 0){
         operand1 += th;
         calcField.value += th;
      }else{
         selectedOperator = th;
         switchOperand = 1;
         switchOperators(0);
         calcField.value += " " + th + " ";
      }
   }else{
      if(th != "="){
         operand2 += th;
         switchEqual(1); // enable =
         calcField.value += th;
      }else{
         switchEqual(0); // disable = and every button except D
      }
   }
}
function switchOperators(v){
   let ops = document.querySelectorAll(".operator");
   if(v == 0){
      for(let x of ops){
         x.disabled = "true";
      }
   }else{
      for(let x of ops){
         x.removeAttribute("disabled");
      }
   }
}
function switchEqual(v){
   let equal = document.querySelector("#equal");
   if(v == 1){
      equal.removeAttribute("disabled");
   }else{
      equal.disabled = "true";
      disableAll();
   }
}
function disableAll(){
   let digits = document.querySelectorAll(".digits");
   for(let x of digits){
      x.disabled = "true";
   }
}
function ShowResult(){
   let resultField = document.querySelector("#result");
      if(selectedOperator == "+")
         resultField.value = parseInt(operand1) + parseInt(operand2);

      else if(selectedOperator == "-")
         resultField.value = parseInt(operand1) - parseInt(operand2);

      else if(selectedOperator == "x")
         resultField.value = parseInt(operand1) * parseInt(operand2);
      
      else
         resultField.value = parseInt(operand1) / parseInt(operand2);
}
function Theme(v){
   let body = document.body;
   let themeButt = document.querySelector("#theme");
   if(v == 1){ // dark theme
      body.style.color = "white";
      body.style.backgroundColor = "black";
      themeButt.setAttribute("onclick", "Theme(0);");
      themeButt.innerHTML = "<strong>Light Mode</strong>";
   }else{
      body.style.color = "black";
      body.style.backgroundColor = "white";
      themeButt.setAttribute("onclick", "Theme(1);");
      themeButt.innerHTML = "<strong>Dark Mode</strong>";
   }
}

