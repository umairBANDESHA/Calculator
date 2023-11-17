var nbr = document.querySelectorAll(".btn").length;
let input = document.querySelector(".display > input");
let string ;
for(var i= 0; i<nbr; i++){
    
    document.querySelectorAll(".btn")[i].addEventListener("click", function (){
        board(this.innerHTML);
        // console.log(this.innerHTML)
    });
}  
    document.addEventListener("keydown", function(event){
        board(event.key);
        // console.log(event.key);
    });

 // for keystroke from keyboard
    
    function board(key) {
        switch (key) {
            case "0":
                input.value += 0;
            break;
            case "1":
                input.value += 1;
             break;
            case "2":
                input.value += 2;
             break;
            case "3":
                input.value += 3;
             break;
            case "4":
                input.value += 4;
             break;
            case "5":
                input.value += 5;
             break;
            case "6":
                input.value += 6;
             break;    
            case "7":
                input.value += 7;
             break;    
            case "8":
                input.value += 8;
             break;    
            case "9":
                input.value += 9;
             break;    
            case ".":
                input.value += ".";
             break;    
            case "+":
                input.value += "+";
             break;    
            case "-":
                input.value += "-";
             break;    
            case "*":
                input.value += "*";
             break;    
            case "/":
                input.value += "/";
             break;    
            case "%":
                input.value += "%";
             break; 
            case "00":
                input.value += "00";
             break;    
            case "=":
            case "Enter":
                string =  Function("return " + input.value)() ;
                input.value = string ;
             break;    
            case "C":
            case "Backspace":
            case "Delete":
            //     string = Math.floor(input.value/10);    |
            //     input.value = string;                   |==============>>>>       not Working Properly
        //  break;                                         | 
            case "AC":
                string = "";
                input.value = string; 
             break;    
            default:
                break;
            } 
    }