// task 1
// var inp1 = prompt("Enter your City Name")
// if(inp1.toLowerCase()=="karachi"){
//     document.write("<h1>Welcome to the city of lights<h1>")
// }
// else{(inp1.toLowerCase()=="hyderabad")
//     document.write("<h1>Welcome to the city of pearls<h1>")
// }


// task 2
// var gender = prompt("Enter your Gender Male or Female")
// if(gender.toLowerCase()=="male"){
//     document.write("<h1>Good Morning Sir<h1>")
// }
// else{(gender.toLowerCase()=="female")
//     document.write("<h1>Good Morning Ma'am<h1>")
// }


// task 3
// var signal = prompt("Input color of road traffic signal")
// if(signal == "red"){
//     document.write("<h1>Must Stop<h1>")
// }
// if(signal == "yellow"){
//     document.write("<h1>Ready to Move<h1>")
// }
// else{(signal == "green")
//     document.write("<h1>Move Now<h1>")
// }


// task 4
// let fuel = prompt("Enter remaining fuel in your car")
// if(fuel < 0.25){
// document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("Your fuel is OK")
// }


// task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // User Input & Conditional Statement | JAVASCRIPT
// // Page 2 of 4
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // User Input & Conditional Statement | JAVASCRIPT
// // Page 3 of 4
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// task 6
// var eng=parseInt(prompt("Enter English Marks"))

// if(eng>=0 && eng<=100){
//   var  urdu=parseInt(prompt("Enter Urdu Marks"))
//   if(urdu>=0 && urdu<=100){
//     var math = parseInt(prompt("Enter Urdu Marks"))
//     if(math>=0 && math<=100){
//         console.log("Good")

//         var eng_per = ((eng/100)*100).toFixed()
//         var urdu_per = ((urdu/100)*100).toFixed()
//         var math_per = ((math/100)*100).toFixed()

//         var sum = eng+urdu+math

//         var tper= (sum/300*100).toFixed()

//         document.write("<table>")
//         document.write("<tr><th> Subject </th>")
//         document.write("<th> Obtained Marks </th>")
//         document.write("<th> Total Marks </th>")
//         document.write("<th> sub Percentage </th>")
//         document.write("</tr>")

//         document.write("<tr><th> English </th>")
//         document.write("<th> "+ eng +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> "+eng_per+"</th>")
//         document.write("</tr>")

//         document.write("<tr><th> Urdu </th>")
//         document.write("<th> "+ urdu +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> "+urdu_per+"</th>")
//         document.write("</tr>")

//         document.write("<tr><th> Math </th>")
//         document.write("<th> "+ math +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> "+math_per+"</th>")
//         document.write("</tr>")

//         document.write("<tr><th> </th>")
//         document.write("<th> "+sum+"</th>")
//         document.write("<th> 300 </th>")
//         document.write("<th> "+tper+"</th>")
//         document.write("</tr>")


//     }

//     else{
//         alert("You enter encorrect marks of Math") 
//     }
//   }
//   else{
//     alert("You enter encorrect marks of Urdu")

//   }
// }
// else{
//     document.write("You enter encorrect marks of eng")
//     alert("You enter encorrect marks of eng")
// }

// // document.write("<tr><th> Remarks </th>")
// document.write("<tr><th> Grade </th>")

// if(tper > 80){
//     document.write("<th>A-One<th>")
// }
// else(tper > 70 )
//     document.write("<th>A<th>")


// if
//     (tper > 60 ){
//     document.write("<th>B<th>")
// }
// else{
//     (tper < 60)
//     document.write("</tr><th>Fail<th>")
// }




// task 7
// program where the user has to guess a number generated by a program

// function guessNumber() {

//     const random = Math
//     let number = parseInt(prompt('Guess a number from 1 to 10: '));

//     if(number == 6) {
//         document.write('You guessed the correct number.');
//     }
//     else{
//         (number == random)
//         document.write("You Lose")
//     }

//   }

// // call the function
// guessNumber();

// task 8
// var number = parseInt(prompt("enter the num"))

// if( number % 3 == 0) {
//     document.write("your number is divible by 3")
// }
// else{
//     (document.write("your num are not divided by 3"))
// }

// task 9
// function num(){
//         var inp = parseInt(prompt("enter number "))
//         if(!isNaN(inp)){
//             checkevenodd(inp)
//         }
//         else{
//             console.log("err")
//         }
    
    
//     }
    
//     function checkevenodd(num){
//         if(num%2==0 ){
//             console.log("Number is even ")
//         }
//         else{
//            console.log("odd")
//         }
    
//     }
//     num()

// task 10
// var temp = prompt("Enter Temperature")
// if(temp > 40){
//     document.write(" “It is too hot outside.”")
// }

// if(temp > 30){
//     document.write("“The Weather today is Normal.”")
// }

// if(temp > 20){
//     document.write("“Today’s Weather is cool.”")
// }

// else{
//     (temp > 10)
//     document.write("“OMG! Today’s weather is so Cool.”")
// }

// task 11
// i=0
// while(i==0){
//     inp1 =parseInt( prompt("enter data 1"))
//     inp2 = parseInt( prompt("enter data 2"))
//     op = prompt("enter operation : +,-,*,%")

//     if(op=="+"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1+inp2))
//     }
//     else  if(op=="-"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1-inp2))
//     }
//     else  if(op=="*"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1*inp2))
//     }
//     else  if(op=="%"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1%inp2))
//     }
//     else{
//         alert("Encorrect op")
//     }

//     i=prompt("if you want to run again loop enter 0 ")

// }