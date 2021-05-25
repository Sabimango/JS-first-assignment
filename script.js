//Why does Javascript need to use the parenthesis when doing this calculation?

//That is because of the order the calcualtion is done. If the parenthesis is skipped,
// that would mean that the division calculates before the addition in the calculation,
// which results in wrong answer. The calcuation is done in a "correct" manner for JS,
// however- the outcome won't be correct in terms of the answer we look after. 


//CASE 1

const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2;

console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2.`)

if (triangleOne > triangleTwo) {
    console.log("Triangle One is larger than Triangle Two.");
} else if (triangleOne < triangleTwo) {
    console.log("Triangle Two is larger than Triangle One.");
}
else {
    console.log("The triangles are in the same size.");
}

//CASE 2

const triangleThree = (16.5 * 20.3) / 2;
const triangleFour = (20.3 * 16.5) / 2;

console.log(`Triangle Three has an area of ${triangleThree} cm2 and Triangle Four has an area of ${triangleFour} cm2.`)

if (triangleThree > triangleFour) {
    console.log("Triangle Three is larger than Triangle Four.");
} else if (triangleThree < triangleFour) {
    console.log("Triangle Four is larger than Triangle Three.");
}
else {
    console.log("The triangles are in the same size.");
}


//CASE 3

const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) /2;

console.log(`Triangle Five has an area of ${triangleFive} cm2 and Triangle Six has an area of ${triangleSix} cm2.`)

if (triangleFive > triangleSix) {
    console.log("Triangle Five is larger than Triangle Six.");
} else if (triangleFive < triangleSix) {
    console.log("Triangle Six is larger than Triangle Five.");
}
else {
    console.log("The triangles are in the same size.");
}