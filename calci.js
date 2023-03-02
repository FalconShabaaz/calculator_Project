console.log("HELLO ,This project is created by 'Mohammed shabaaz❤️'");
// code for screen input

let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
inputvalue ="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        text = e.target.innerText;
        if(text == "C"){
            screen.value = "";
            inputvalue = "";
        }
        else if(text == "X"){
            text = "*";
            inputvalue += text;
            screen.value = inputvalue;
        }
        else if(text == "←"){
            inputvalue = inputvalue.slice(0,-1);
            screen.value = inputvalue; 
        }
        else if(text == "="){
            screen.value = eval(inputvalue);
        }
        else{
            inputvalue += text;
            screen.value = inputvalue;
            
        }
    });
}


// Code for keyboard events 

let k = document.addEventListener("keydown",(e)=>{
// console.log(e);
   if(e.key == '1'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '2'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '3'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '4'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '5'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '6'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '7'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '8'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '9'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '0'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '.'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '+'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '-'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '/'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '*'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == 'Enter'){
    screen.value = eval(inputvalue);
   }
   else if(e.key == 'Backspace'){
    inputvalue = inputvalue.slice(0,-1);
    screen.value = inputvalue; 
   }
   else if(e.key == '('){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == ')'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == '%'){
    inputvalue += e.key;
    screen.value = inputvalue; 
   }
   else if(e.key == 'Delete'){
    screen.value = "";
    inputvalue = "";
   }
   else{
    
   }
   
});
