// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
 // }


 //const gifts = ["teddy bear", "drone", "doll"];

 //function wrapGifts(gifts) {
 //  for (let i = 0; i < gifts.length; i++) {
 //    console.log(`Wrapped ${gifts[i]} and added a bow!`);
 //    debugger;
 //  }
 
 //  return gifts;
 //}
 
 //wrapGifts(gifts);


 //const names = ["Guadalupe", "Ollie", "Aki"];

 // function writeCards(names) {
  //    for (let i = 0; i < names.length; i++){
 //         console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
 //         debugger;


  //    }

 //     return names;
//  }
 // writeCards(names)

//  const letters = ["a", "b", "c", "d", "e"];

// //console.log(letters[0]);
// //console.log(letters[1]);
// //console.log(letters[2]);
// //console.log(letters[3]);
// //console.log(letters[4]);

//  // for is a iteration is a loop. 
//     for (let i = 0; i < letters.length; i++) {
//      console.log(letters[i]);
//  }

//   let j = 0;

//   while(j < letters.length) {
//     console.log(letters[j++]);
    //j = j + 1;
    // j += 1;
    // j++;
  //}

function writeCards(names, event) {
    let messages =[];
    for( let i = 0; i< names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}  


// To get more acquainted with `while`, your task is to write a function,
// `countDown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. Note that this means that running
// `countDown(10);` would actually log _11_ times:

function countDown(positiveNubmer) {
    while( positiveNubmer >= 0) {
        console.log(positiveNubmer);
        positiveNubmer--;
    }
}
