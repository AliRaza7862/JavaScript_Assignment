// task 1

// var inp =prompt("Enter value")

// for(i=0;i<inp.length;i++){
//     document.write("Ascii value of "+inp[i]+" is : "+ inp.charCodeAt(i)+"<br/>")

// }

// task 2

// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// task 3

// // program that checks if the number is positive, negative or zero
// // input from the user
// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//   console.log("The number is zero");
// }

// // if number is less than 0
// else {
//      console.log("The number is negative");
// }

// task 4

// function vowelChecker (char) {
 
//     if (char === 'a'||'e'||'i'||'o'||'u') {
//         return "The character is a Vowel";
//     }
//     else {
//     return "The character is a Consonant";
//     }
// }
 
// console.log (vowelChecker ("e"));

// task 5

// function verifyPassword() {  
//     var pw = document.getElementById("pswd").value;  
//     //check empty password field  
//     if(pw == "") {  
//        document.getElementById("message").innerHTML = "**Fill the password please!";  
//        return false;  
//     }
     
//    //minimum password length validation  
//     if(pw.length < 8) {  
//        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
//        return false;  
//     }  
    
//   //maximum length of password validation  
//     if(pw.length > 15) {  
//        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
//        return false;  
//     } else {  
//        alert("Password is correct");  
//     }  
//   } 

// task 6

// var greeting;
// var hour = new Date().getHours();

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// document.write( greeting)


// task 7
// var inp = prompt("Enter Current time")
// if(inp>=000 && inp<1200){
//     document.write("<h1>Good Morning!</h1>")
// }
// else if 
//     (inp>=1200 && inp<1700){
//     document.write("<h1>Good Afternoon!</h1>")
// }
// else if 
//     (inp>=1700 && inp<2100){
//     document.write("<h1>Good Evening!</h1>")
// }
// else if (inp>=2100 && inp<2359){
//     document.write("<h1>Good Night!</h1>")
// }


