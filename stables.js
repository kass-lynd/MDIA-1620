console.log("horse!")
let horseName = "Fancy Lulu"; // this is a commemt or a note
let horseAge = 4;
console.log(horseName);
console.log(horseAge);
let isHorseInStable = false;
console.log(isHorseInStable)

const STABLE_MONTHLY_FEE = 100;
let horseIntroduction = " is the name of my horse"
// let rentIntroduction = "it costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`; 
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
console.log(stableIntroduction);
console.log(rentIntroduction);
console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE * 5);

let horseNickname = "Lulu"
let horseIntroductionTwo = `This is my horse ${horseNickname}. She adores having her mane brushed and being taken out on casual rides`;
let stableIntroductionTwo = `Welcome to ${horseNickname}'s stable. ${horseNickname} would love to share her space with others!`;
let rentInformation = `The starting rent rate is currently $${STABLE_MONTHLY_FEE} per month.`;
let promotion = `Newcomers recieve %10 off their first three months when they register in September!`;
let promotionPrice = `That is $${(STABLE_MONTHLY_FEE * 3) * .1} in savings!`;
console.log(horseIntroductionTwo);
console.log(stableIntroductionTwo);
console.log(rentInformation);
console.log(promotion);
console.log(promotionPrice);

let horseInside = "true"
if (horseInside){ console.log(horseNickname + " is inside"); } //Lulu is Inside//

