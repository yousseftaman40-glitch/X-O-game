'use strict'; 
let turn ="X";
let winner = "";
let win = document.querySelector(".win");
let role = document.querySelector(".turn");
let square1 = document.querySelector(".s1").innerHTML; 
let square2 = document.querySelector(".s2").innerHTML; 
let square3 = document.querySelector(".s3").innerHTML; 
let square4 = document.querySelector(".s4").innerHTML; 
let square5 = document.querySelector(".s5").innerHTML; 
let square6 = document.querySelector(".s6").innerHTML; 
let square7 = document.querySelector(".s7").innerHTML; 
let square8 = document.querySelector(".s8").innerHTML; 
let square9 = document.querySelector(".s9").innerHTML; 


function checkWin(){
    if(square1 === square2 && square1 ===square3 && square1 != ''){
        if(square1 === 'X'){
           return winner = "X";
        }else{
           return winner = "O"; 
        }
    } 
    else if(square4 === square5 && square4 ===square6 && square4 != ''){
        if(square1 === 'X'){
           return winner = "X";
        }else{
           return winner = "O";
        }
    }
    else if(square9 === square8 && square9 ===square7 && square9 != ''){
        if(square1 === 'X'){          
           return winner = "X";
        }else{           
           return winner = "O";
        }
    } 
    else if(square1 === square4 && square1 ===square9 && square1 != ''){
        if(square1 === 'X'){
           return winner = "X";
        }else{          
           return winner = "O";
        }
    } 
    else if(square2 === square5 && square2 ===square8 && square2 != ''){
        if(square1 === 'X'){          
           return winner = "X";
        }else{          
           return winner = "O";
        }
    }
    else if(square3 === square6 && square3 ===square7 && square3 != ''){
        if(square1 === 'X'){          
           return winner = "X";
        }else{ 
           return winner = "O";
        }
    } 
    else if(square1 === square5 && square1 ===square7 && square1 != ''){
        if(square1 === 'X'){   
           return winner = "X";
        }else{
           return winner = "O"; 
        }
    } 
    else if(square9 === square5 && square9 ===square3 && square9 != ''){
        if(square1 === 'X'){
            return winner = "X";
        }else{     
            return winner = "O";
        }
    }
    if(square1 != ''  && square2 != '' && square3 != ''  &&square4 != ''  && square5 != ''  && square6 != ''  && square7 != ''  && square8 != ''  && square9 != ''){
        return winner = "draw";
    }
    return winner = "";
}  











function game(id){
   let element = document.getElementById(id);
   if(winner==""){
      if(turn === 'X' &&  element.innerHTML == ''){
         element.innerHTML = 'X';
         turn = "O";
         role.innerHTML = 'O';
         document.body.style.backgroundColor = 'rgb(243, 61, 61)'; 
         checkWin()             
      }        
      else if(turn === 'O' &&  element.innerHTML == ''){
         element.innerHTML = 'O';
         turn = "X";
         role.innerHTML = 'X';
         document.body.style.backgroundColor = 'rgb(49, 49, 241)';    
         checkWin()    
      } 
   }else if(winner== "X"){
      role.innerHTML = 'X' 
      win.innerHTML = 'Winner:'
      document.body.style.backgroundColor = 'rgb(49, 49, 241)'
      checkWin()
   }else if(winner== "O"){
      role.innerHTML = 'O' 
      win.innerHTML = 'Winner:'
      document.body.style.backgroundColor = 'rgb(243, 61, 61)'
      checkWin()
   }else if(winner=="draw"){
      role.innerHTML = ''
      win.innerHTML = 'DRAW'
      document.body.style.backgroundColor = 'rgb(75, 79, 85)'
      checkWin()
   }

}
