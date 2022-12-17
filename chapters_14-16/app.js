// task 1
// var person1 = {
//     FirstName: "",
//     LastName: "",
//     Age: "",
// };


// task 2
// const person2 = {
//     firstName: "",
//     lastName: "",
//     age: "",
//   };


// task 3
// const array = ["a", "b", "c", "d",];


// task 4
// const arr = [1, 2, 3, 4, 5 , 6];

// task 5
// const arr1 = new Array(3).fill(false);

// // 👇️ [false, false, false]
// console.log(arr1);

// task 6
// var MixArr = [1, "Mixed", 2, "Array"];

// task 7
// var arrQualifications = ["<h1>Qualifications:<h1>"]+
// ["<br> 1) SSC"]+
// ["<br> 2) HSC"]+
// ["<br> 3) BSC"]+
// ["<br> 4) BS"]+
// ["<br> 5) BCOM"]+
// ["<br> 6) MS"]+
// ["<br> 7) M.Phil."]+
// ["<br> 8) PhD"]

// document.write(arrQualifications)

// task 8
// var Name = ["Ali"];
// var score = [320];
// percentage = score*100/500;
// document.write("<h1>Score of " + Name + " is " + score + ". Percentage: " + percentage + "%<br></h1>")

// var Name = ["Nabeel"];
// var score = [230];
// percentage = score*100/500;
// document.write("<h1>Score of " + Name + " is " + score + ". Percentage: " + percentage + "%<br></h1>")

// var Name = ["Zeeshan"];
// var score = [480];
// percentage = score*100/500;
// document.write("<h1>Score of " + Name + " is " + score + ". Percentage: " + percentage + "%</h1>")

// task 9
// var colorName=["red","orang","blue","green","black","white"]

// document.write(colorName+" <br> ")

// var addClor=prompt("add that color to the beginning")

// colorName.unshift(addClor)

// document.write(colorName+" <br> ")

// var addClor=prompt("add that color to the end")

// colorName.push(addClor)

// document.write(colorName+" <br> ")

// for(var i=0; i<2; i++){
//     var addClor=prompt("add that color to the beginning")
//     colorName.unshift(addClor)
// }
// document.write(colorName+" <br> ")
 
// colorName.shift()

// document.write(colorName+" <br> ")

// colorName.pop()

// document.write(colorName+" <br> ")

// var addClor=parseFloat(prompt("which index you wants to add a color"))
// var addClor1=prompt("& which color you wants to add ")

// colorName.splice(addClor,0,addClor1)

// document.write(colorName+" <br> ")

// var addClor=parseFloat(prompt("which index you wants to delete colors"))
// var addClor1=prompt("& how many colors you wants to delete")

// var color = colorName.slice(addClor,addClor1)

// document.write(color+" <br> ")

// document.write(colorName+" <br> ")


// task 10
// var score = [320, 230, 480, 120]
// document.write("<h1>Score of Students: " + score + "</h1>")
// score.sort();
// document.write("<h1>Ordered Scores of Students: " + score + "</h1>")

// task 11
// country =[]
// i= "y"
// while(i==0){
//     inp1 = prompt("Enter your Country")
//     country.push(inp1)
//     i = prompt("if run again enter 0 ")
// }

// document.write("<select>")

// for(var i of country){
//     document.write("<option"+i+"</option>")
// }

// document.write("</select>")

// task 12
// var arr = ['This', 'is', 'my', 'cat'];
// document.write(arr.join(' '));

// task 13
// var Devices = ["<h1> keyboard", "mouse", "printer", "moniter </h1>"]
// document.write(Devices)
// Devices.shift()
// document.write("<h1>"+Devices+"</h1>")
// Devices.shift()
// document.write("<h1>"+Devices+"</h1>")
// Devices.shift()
// document.write("<h1>"+Devices+"</h1>")

// task 14
// var Devices = ["<h1> keyboard", "mouse", "printer", "moniter </h1>"]
// document.write(Devices)
// Devices.pop()
// document.write("<h1>"+Devices+"</h1>")
// Devices.pop()
// document.write("<h1>"+Devices+"</h1>")
// Devices.pop()
// document.write("<h1>"+Devices+"</h1>")


// task 15 uncomment the HTML

// var up = document.getElementById('geeks');
// var down = document.getElementById('gfg');
// var select = document.getElementById("arr");
// var elmts = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"];
// up.innerHTML = "Click on the button to "
//             + "perform the operation"+
//             ".<br>Array - [" + elmts + "]";

// // Main function
// function GFG_Fun() {
//     for (var i = 0; i < elmts.length; i++) {
//         var optn = elmts[i];
//         var el = document.createElement("option");
//         el.textContent = optn;
//         el.value = optn;
//         select.appendChild(el);
//     }
//     down.innerHTML = "Elements Added";
// }



