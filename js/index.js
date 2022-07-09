// Iteration 1: Names and Input
//
console.log("I'm ready!");

let hacker1 = "aaaa"; 
console.log("The driver's name is " +hacker1);

let hacker2 = "aaaa"; 
console.log("The navigator's name is " +hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ("The driver has the longest name, it has " +hacker1.length +" characters.")
} else if (hacker1.length < hacker2.length) {
    console.log ("It seems that the navigator has the longest name, it has " +hacker2.length +" characters.")
} else {
    console.log ("Wow, you both have equally long names," +hacker1.length  +" characters!")
}


// Iteration 3: Loops

let name = hacker1.toString();
name = name.toUpperCase(); 
let name2 = new String;
name2 = name[0];

for (let i = 1; i < name.length; i++) {
    name2 = name2 + " " + name[i]; 
}

console.log(name2)

let nameReverse = '';
let name3 = hacker1.toString();

for (let i = name3.length -1; i >= 0; i--) {
    nameReverse = nameReverse + name3[i];
}

console.log(nameReverse)


// 

let nameHa = hacker1.toLowerCase();
let nameHb = hacker2.toLowerCase();
let shorter; 
let namePlus;

if (nameHa.length > nameHb.length) {
    shorter = nameHb;
} else {
    shorter = nameHa;
}

console.log(shorter)

for (let i = 0; i < shorter.length; i++) {
    if (nameHa[i] < nameHb[i]) {
        namePlus = 'a';
    } else if (nameHa[i] > nameHb[i]) {
        namePlus = 'b';
    }
}

console.log(namePlus)

switch (namePlus) {
    case 'a': 
    console.log(`The driver's name goes first.`)
    break;

    case 'b': 
    console.log(`Yo, the navigator goes first definitely.`)
    break;

    default: 
    console.log(`What?! You both have the same name?`)
    break;


}