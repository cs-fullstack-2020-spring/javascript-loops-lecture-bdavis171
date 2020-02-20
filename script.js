// //Exercise 1:

// //Create a for loop to print 25 astericks(*)
// for (let i=0; i<25;i++){
//     console.log('*');
// }
// console.log('End of loop')
// //Exercise 2:

// //Create a for loop to print numbers -10 to 5
// for (let i=-10;i<=5;i++) {
//     console.log(i);
// }
// console.log('End of loop');

// //Exercise 3:

// //Create a for loop to print every 4 numbers from -50 to 50
// for (let i=-50;i<=50;){
//     console.log(i);
//     i = i+4;
// }

// //Exercise 4:

// //Create a for loop to print 0 to 5. When you get to 2, print 'TWO'. When you get to 4, print 'FOUR'.
// for (let i=0;i<=5;i++){
    
//     if (i == 2) {
        
//         console.log('TWO');
//     }
//      else if (i == 4) {
//         console.log('FOUR');
//     }
//     else {
//         console.log(i);
//     }
// }

// //Exercise 5:

// //Prompt the user to enter a number. Create a for loop that will count from 0 to that number
// let userNum = prompt('Enter a number');
// for (let i=0;i<=userNum;i++){
//     console.log(i);
// }

//Exercise A:

// //Create a while loop that counts down from 10 to 0. once the counter reaches 0, log 'LIFTOFF' to the console
// let count = 10;
// while (count >= 0) {
//     console.log(count);
//     count--;
    
// }
// console.log('LIFTOFF!!!');

// //Exercise B:

// //Create a loop that print even numbers from 1 to 100

// let num = 0;

// while (num < 100) {
//     num = num + 2;
//     console.log(num);
// }

// for(let num = 0;num < 100;) {
//     num = num + 2;
//     console.log(num);
// }

// //Exercise C:

// //Create a fixed password
// let password = 'hello';

// //Create a while loop that will ask the user to enter the password until it matches. Alert them when it does
// let userPass = prompt('Enter the password:');
// while (userPass != password) {
//     if (userPass != password){
//         userPass = prompt('Wrong password, try again:');
//     }
    
        
    
// }
// alert('That is correct!');

/*--------------------------------------------------------------
*/

// let names = ['brandon','dewayne','sam','mary','seth','kendra','ciara'];
// for (let i=0;i<names.length;i++) {
//     console.log(names[i]);
// }

// for (let i = names.length-1;i>=0;i--){
//     console.log(names[i]);
// }

// for (let i = 102; i > 0;) {
//     i = i - 2;
//     console.log(i);
// }

num = 100;

while (num >= 0) {
    console.log(num);
     num = num -2;
}