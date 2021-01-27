'use strict';

var itemPrice = 4000;
var walletAmount = 4100;
var numFriends = 5;
var age = 35;
var nameFirst = `Craig`;
var nameLast = `Neff`;
var nameMid = `R`;

// New amount of money in wallet after buying the item
var newWalletAmount = walletAmount - itemPrice;
// Number of friends made each year based on age and number of friends 
var friendsFromLife = numFriends * age;
//Full name based on first name, middle initial, and last name
var fullName = nameFirst + ' ' + nameMid + ' ' + nameLast;


console.log("Hello my name is" + " " + (fullName) + " " + "this year I will be" + " " + (age) + '.');
console.log('Right now I only have ' + (numFriends) + ' friends who also like to code, ' + 'I hope one day to have ' + (friendsFromLife) + ' friends who also like to write code as much as me.');
console.log('I had ' + '$' + (walletAmount) + ' in my bank account, but I spent ' + '$' + (itemPrice) + ' on a coding boot camp to improve my skills. Now I have ' + '$' + (newWalletAmount) + ' left over in my bank account.');
console.log(('I ') + (nameFirst) + " " + (nameMid) + ' ' + (nameLast) + (' plan on giving this bootcamp everything I got!'));