// ++=========-==------------:::::::::::::::::::::::..............:::::::::::::::::::::------------==========+++
// +++===========---------------:::::::::::::::::::::::::::::::::::::::::::::::::::::--------------==========+++
// ++++============-----------------::::::::::::::::::::::::::::::::::::::::::::::---------------===========++++
// +++++============---------------------#*-##%%@*::::::::::::::::::::::::::::------------------===========+++++
// ++++++==============---------------%###%--###%####@:::::::::::::---------------------------============++++++
// +++++++================---------+###%####=-+##%######@--------+:-----------------------==============++-+++++
// +++++++++=-:-==================@###@@###%*---#############@*@---*------------------================++++++++++
// +++++++++=...-================%###@@##%%%@*-++########==####=----*------------==================+++++++++++++
// ++++++++++====++=============@@@#@@#%%%@@@%+-%#@####=++####%------=---=======================++++++++++++++++
// ++++++++++++++++++++=========@+%%+%%%%@@@@%%@#%####===#####@------=======================++++++++++++++++++**
// *+++++++++++++++++++++++++++==+%@+==++++------%###+==######%---+--====================+++++++++++++++++++****
// *****+++++++++++++++++++++++++++++++++@*-----%###====######%-----================+++++++++++++++++++++*******
// *******+++++++++++++++++++++++++++++++*..@-------@@@+##@####-----%%+*-+++++++++++.+++++.-+++++++++++*********
// ************++++++++++++++++++++++++++-.@:------@..@@@-@#####---@@@%--+++++++++.--++++--+++++++**************
// ****************++++++++++++++++++++++.@@.%----@.*@@..@..@%@@:-@@@@#--=++++++=----:-----+++******************
// ***********************+++++++++++++++-%@@%----@.@@@.#@%.------@@@@%=-+++++++---+-----=******:=--************
// **************************************=.#@-----=..@@@%...------%%%##--++++.---+------+****.-----************#
// ****************************************+*-----%..%%%%=.-------@@%%#--+++++++------+**.+------+***********###
// #**************************************------------++=#@------@@###@-+*:++=------+.+--------+*********#######
// ######*********************************-----------------------%##+#*-:+=-----++++--------*###############*=+#
// #########********************************=--+----------------%#@+#%-++---*-------+---+####################*##
// #################**************************-==---------+----%##+###*+-----------*----------*#################
// ###############*#############*#*###############*+=---------@##=#%%@=+---------+-------+######################
// ################################################--------=%##%+####+++---=---+--------=#######################
// ###############################################+------%###%#+###%#++------------+#%%%%%######################
// ###############################################-------#%##++#####%-=-------+++###########%#################%%
// *#############################################+------*##+=###+###-+-=-----=+####%###%######%#####%%%%%%%%%%%%
// ###+*########################################+--------==####=###=---------++-######%#########%%%%%%%%%%%%%%%%
// %%%%%########################################---------#####+##@---+--#@**%%%###===+###%#######%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*---------@###=%@--------+=+%%%%%%%%##===##########%%%%%%%%%%%%##
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*---------%#%=@-----+----++:%%%%%%%%%###+=###%######%%%%%%%*=%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----------@-------------++:+%%%%%%%%%###==#########%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%*%%%%%%%%%%%%%%%%%%%%%%%%%%%*-----------------------+:*-@@@@@@@@@%##==##@###%###%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%=%%%%%%%%%%%%%%%%%%%%%%+----------------------=--=@@@@@@@@@@###=*####%#####@@@@@@@%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*++------+--------------=--*@@@@@@@@@@%##=###+#######@@%%%%#%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+++++*---------+-=**-------%%%%%%%%%%%###+###++######%%%%%%%%%%%
// %%%%%%%%%%%%%%%%=%%%%%%%==%%%%%%%%%%%%%%%%%%*=+++++%%%%*----+++@@-------%%%%%%%%%%%##++###==##%####%%%%%%%%%%
// %%%%%%%%%%%%%%%%#%%%%%%%+*%%%%%%%%%%%%%%%%%%--=+++*%%%%*-----++%%%------**%%%%%%%%%##+=##%*+#######%%%+=%%%%%
// ####%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+---=++%%%%%+-----+++%%#-------#%%%%%%%%##+##@%#=+##%###%%%%%%%%%.
// #####*==############%%#%#%%%%%%%%%%%%%%%%%%-----=*%%%%%+-----*++*%%+-------%%%%%%%##+=#####++##%###%%%%%%%%%%
// ######################################%%%%=------%%%%%%+-----++++%@%-------*%%%%%##*+######==##%%###%%%%%%%%%
// #########################################+-------######+------+++*%%=-------####%##=+##%###==##%%%##%########
// #########################################-------+######=------+++*%%*-------+##%##++##%####++##%#############
// ..***#*#####*=#########-################+-------#######-------*+++#%@--------####++##%##@#*+#####.#%#########
// ==..*************-***************######*--------#######-------*+++#@@--------*##+=####@#@#+#@%###############
// =====.**********::**********...********--------=******+--------+++@@@---------#=+###*###*###********#**######
// ======.*******************.=+=.=::****+--------+******+--------+++@@%---------+=###*@*****+=.=.............**
// -------..::::.........:-=.-===.===***+---------*******---------++*%@*---------*#@*********============.====.*
// ----:::::::::::.::::::::::::::::::::+---------=::::::+---------++-::----------*@********+.--==.==============
// ............:::::::::::::::::::::::+----------+----------------*=--*----------+-----:::......:.--------=====.
// -----:::::::::::::::::::..:::::::...++----=+*:.-----+---------*-----:::......-------::.........::::::::.....-
// ----:..........:::.:::::++-.:::::::-:--------------+---------------------------:.-----::::::::::::::..=-====-
// -:.-------::..:::::::::+++++.:----------------------*+++++++=------------------------.:::...:::.-========..+.
// =====-..:---....------=+++++-..-------------------.----------------------------..-----------..-....===..+++++
// -=..----.:--+++.:-....++++-+++-..-----------------------------------------------------:.-=-..-======::+++++++
// ----::=++++++++..====+++++-+.:+..------------...------------::....-------=:....-=============.:-=====++++-===
// :.++++++++++++++.+++++++=+::=.+-.=======-..++++++..:============..===============================.--.===-:---
// ++++++++++++++++..++++++++:+++++.=======.=+++++=...-.======.===============:..+:+...-:..::--:::--:-:--:::::--
// ======++++++++++-.++++++:+++++-+..-----.=+++..====+.-.-----------:::...------+++++++==.:---------------=--===
// it squished my art :(

//------------------------- Setting up shop -------------------------//

let horses = [];
let welcome = "Welcome to Crescent Stables!";
let latePaymentFee = 250;
let availableStalls = 7;

//------------------------- First day -------------------------//

function Horse(
    name,
    nickname,
    favTreat,
    age,
    monthlyRent,
    colour,
    activity,
    isInside,
    isHungry
) {
    (this.name = name),
        (this.nickName = nickname),
        (this.favTreat = favTreat),
        (this.age = age),
        (this.monthlyRent = monthlyRent),
        (this.colour = colour),
        (this.activity = activity),
        (this.intro = function intro() {
            console.log(
                `This is ${this.name}. They are ${this.age} years old and have a lovely ${this.colour} coat. If you feed them ${this.favTreat} they will love you forever!`
            );
        });
    this.favActivity = function favActivity() {
        console.log(`${this.name} likes to spend their time ${this.activity}.`);
    };
    this.isInside = isInside;
    this.isHungry = isHungry;

    if (this.isInside == true) {
        console.log(`${this.name} is inside their stable.`);
    } else {
        console.log(`${this.name} is out in the pasture.`);
    }

    if (this.isHungry == true) {
        console.log(`${this.name} is feeling hungry! Let's give them a snack.`);
    } else {
        console.log(
            `${this.name} is not hungry! Let's wait until later to give them a treat.`
        );
    }

    this.changeLocation = function changeLocation() {
        for (let i = 0; i < horses.length; i++) {
            if (horses[i].isInside === true) {
                horses[i].isInside = false;
                console.log(
                    `${horses[i].name} was inside they are now outside!`
                );
            } else if (horses[i].isInside === false) {
                horses[i].isInside = true;
                console.log(
                    `${horses[i].name} was outside they are now inside!`
                );
            }
        }
    };
}

const horse1 = new Horse(
    "Solaris",
    "Sol",
    "oranges",
    3,
    300,
    "golden",
    "jumping hurdles",
    false,
    true
);
const horse2 = new Horse(
    "Pluto",
    "Plu",
    "blueberries",
    1,
    350,
    "black",
    "laying in the sun",
    true,
    true
);
const horse3 = new Horse(
    "Celestia",
    "Celest",
    "strawberries",
    2,
    450,
    "white",
    "prouncing in the fields",
    true,
    true
);

horses.push(horse1);
horses.push(horse2);
horses.push(horse3);

const horse4 = {
    name: "Starlight",
    nickName: "Star",
    favTreat: "pomegranites",
    age: 1,
    monthlyRent: 500,
    colour: "dark purple",
    activity: "competing in shows",
    isInside: true,
    isHungry: false,
    changeLocation: function changeLocation() {
        for (let i = 0; i < horses.length; i++) {
            if (horses.isInside === true) {
                horses[i].isInside = false;
                console.log(
                    `${horses[i].name} was inside they are now outside!`
                );
            } else if (horses[i].isInside === false) {
                horses[i].isInside = true;
                console.log(
                    `${horses[i].name} was outside they are now inside!`
                );
            }
        }
    },
};

horses.push(horse4);

//------------------------- Stable roster -------------------------//

//Horse {
//  name: 'Starlight',
//  nickName: 'Star',
//  favTreat: 'pomegranites',
//  age: 1,
//  monthlyRent: 500,
//  colour: 'dark purple',
//  activity: 'competing in shows',
//  intro: [Function: intro],
//  favActivity: [Function: favActivity],
//  isInside: true,
//  isHungry: false
//}

//Horse {
//name: 'Solaris',
//nickName: 'Sol',
//favTreat: 'oranges',
//age: 3,
//monthlyRent: 300,
//colour: 'golden',
//activity: 'jumping hurdles',
//intro: [Function: intro],
//favActivity: [Function: favActivity],
//isInside: false,
//isHungry: true
//}
//Horse {
//name: 'Pluto',
//nickName: 'Plu',
//favTreat: 'blueberries',
//age: 1,
//monthlyRent: 350,
//colour: 'black',
//activity: 'laying in the sun',
//intro: [Function: intro],
//favActivity: [Function: favActivity],
//isInside: true,
//isHungry: true
//}
//Horse {
//name: 'Celestia',
//nickName: 'Celest',
//favTreat: 'strawberries',
//age: 2,
//monthlyRent: 450,
//colour: 'white',
//activity: 'prouncing in the fields',
//intro: [Function: intro],
//favActivity: [Function: favActivity],
//isInside: true,
//isHungry: true
//}
//Horse {
//name: 'Starlight',
//nickName: 'Star',
//favTreat: 'pomegranites',
//age: 1,
//monthlyRent: 500,
//colour: 'dark purple',
//activity: 'competing in shows',
//intro: [Function: intro],
//favActivity: [Function: favActivity],
//isInside: true,
//isHungry: false
//}

//---------------------- Growing business ----------------------//

// available stalls equation
let totalStalls = 7;
availableStalls = totalStalls - horses.length;
console.log(availableStalls);

if (availableStalls < 2) {
    console.log(`We need to build more stalls!`);
} else {
    console.log(`We have ${availableStalls} stalls available!`);
}

function paidLate() {
    console.log(`The late payment fee at our stables is $${latePaymentFee} per horse. The following outlines the late fee for each horse:
    ${horses[0].name} = $${latePaymentFee}
    ${horses[1].name} = $${latePaymentFee}
    ${horses[2].name} = $${latePaymentFee}
    ${horses[3].name} = $${latePaymentFee}
    For example, if you have three horses in our stables your late payment fee would total $${
        latePaymentFee * 4
    }.
    `);
}
paidLate();

for (let i = 0; i < horses.length; i++) {
    if (horses[i].favTreat !== "blueberries") {
        console.log(`${horses[i].name} does not like blueberries!`);
    } else if (horses[i].favTreat === "blueberries") {
        console.log(`${horses[i].name} loves blueberries!`);
        break;
    }
}

function horseNickname() {
    return horses[3].nickName;
}
horseNickname();
console.log(`Starlight's nickname is ${horseNickname()}`);

//------------------------- Day to day operations -------------------------//
//uniques horse properties
function showHorse() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].activity !== "competing in shows") {
            console.log(
                `${horses[i].name} is not a show horse. They do not compete in shows.`
            );
        } else if (horses[i].activity === "competing in shows") {
            console.log(
                `${horses[i].name} is a show horse! They are getting ready to compete in a show.`
            );
        }
    }
}

showHorse();

function dailyRoutine() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInside == true) {
            horses[i].isInside = false;
            console.log(
                `${horses[i].name} has gone outside to spend time in the sun!`
            );
        } else if (horses[i].isInside == false) {
            console.log(`${horses[i].name} is already outside in the sun!`);
        }
    }

    console.log(`It looks like it's getting dark...`);

    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInside == false) {
            horses[i].isInside = true;
            console.log(
                `${horses[i].name}! It is time to come inside for bed.`
            );
        } else if (horses[i].isInside == true) {
            console.log(
                `${horses[i].name} is already in their stall and ready for bed.`
            );
        }
    }
}

dailyRoutine();

function feedHorse() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInside === false) {
            horses[i].isInside = true;
            horses[i].isHungry = false;
        }
        console.log(
            `${horses[i].name} has come inside and has been given a treat! This horse is no longer hungry.`
        );
    }
}

feedHorse();
