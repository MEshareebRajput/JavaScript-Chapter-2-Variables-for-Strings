// Q1. Declare a variable called username ?
var username;

// Q2. Declare a variable called myName & assign to it a string that represents your Full Name ?
var myName = "Muhammad Eshareeb";

// Q3. Write script to ?
// a) Declare a JS variable, titled message ?
var message;

// b) Assign “Hello World” to variable message ?
message = "Hello World";

// c) Display the message in alert box ? 
alert(message);

// Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes ?
var studentName = "Muhammad Eshareeb";
var studentAge = 17;
var studentEmail = "muhammadeshareeb986@gmail.com";
var studentContact = "03282300151";

// Displaying the student's bio data in alert boxes
alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Email: " + studentEmail);
alert("Contact: " + studentContact);

// Q5. Write a script to display the following alert using one JS variable
var skills = 'React, MongoDB, Express, Node.js, Firebase';
alert(skills);

// Q6. Declare a variable called email and assign to it a string that represents your Email Address (e.g. example@example.com). Show the below mentioned message in an alert box ?
var email = "muhammadeshareeb986@gmail.com";
alert("My email address is " + email);

// Q7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box ?
var book = "A smarter way to learn JavaScript";
alert("I am learning from the book " + book);

// Q8. Write a script to display this in browser through JS ?
document.getElementById("bookText").innerHTML = "I am learning from the book " + book;

// Q9. Store the following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ジ▬▬▬▬▬▬▬▬▬” ?
var specialString = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ジ▬▬▬▬▬▬▬▬▬";

// Display the string in an alert box
alert(specialString);

// Display the string in the browser without using document.write
document.getElementById("specialString").innerHTML = specialString;
