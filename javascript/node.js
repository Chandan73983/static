const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ==========================================
// HELPER FUNCTION: Wait for user to press Enter
// ==========================================
function waitForEnter(message = "Press Enter to continue... ⏎") {
  return new Promise((resolve) => {
    rl.question("\n" + message, () => {
      resolve();
    });
  });
}

// ==========================================
// HELPER FUNCTION: Clear console
// ==========================================
function clearScreen() {
  console.clear();
}

// ==========================================
// HELPER FUNCTION: Print section separator
// ==========================================
function printSeparator() {
  console.log("\n" + "=".repeat(70) + "\n");
}

// ==========================================
// HELPER FUNCTION: Print topic heading
// ==========================================
function printHeading(title, emoji) {
  printSeparator();
  console.log(`\n${emoji} ${title}\n`);
  printSeparator();
}

// ==========================================
// HELPER FUNCTION: Print progress
// ==========================================
function printProgress(current, total) {
  console.log(`\n✅ Progress: ${current}/${total} topics completed!\n`);
}

// ==========================================
// MAIN LEARNING APPLICATION
// ==========================================
async function startLearning() {
  let topicCount = 0;
  const totalTopics = 14;

  // Welcome screen
  console.clear();
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║     🚀 JAVASCRIPT FUNCTIONS INTERACTIVE LEARNING COURSE 🚀     ║
║                                                                ║
║            Hinglish में सीखो, JavaScript में बोलो!           ║
║          (Learn in Hinglish, Master JavaScript!)              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);
  console.log(
    "\n👨‍🏫 Welcome! Aaj hum ek amazing journey shuru kar rahe hain!\n",
  );
  console.log("Hum silkhenge:\n");
  console.log("  1️⃣  Function ka matlab kya hota hai");
  console.log("  2️⃣  Parameters aur Return values");
  console.log("  3️⃣  Arrow Functions aur Fat Arrow");
  console.log("  4️⃣  Callbacks aur Higher Order Functions");
  console.log("  5️⃣  Async/Await aur Promises");
  console.log("  6️⃣  Array methods - forEach, map, filter");
  console.log("  7️⃣  Recursion aur IIFE");
  console.log("  8️⃣  Aur bhi bahut kuch!\n");

  await waitForEnter("Chaliye shuru karte hain! ➡️ Press Enter");

  // ==========================================
  // TOPIC 1: What is a Function?
  // ==========================================
  topicCount++;
  printHeading("🧠 TOPIC 1: Function Kya Hota Hai?", "🧠");
  console.log(`
📖 SAMJHAO (Explanation):

Bhaiya, ek function samajhne ke liye ek real-life example lete hain.

🏪 DUKAAN KA EXAMPLE:
Imagine ek dukaan hai jahan aap chhote hote ho.
Aap dukaan wale se karte ho:
  👤 "Bhaiya, ek chai de do!"
  
Dukaan wala:
  1️⃣  Chai ke ingredients leta hai (input)
  2️⃣  Chai banata hai (kaam karta hai)
  3️⃣  Chai de deta hai (output)
  
YEH SAMAJH AYA? Yeh hi hai FUNCTION ka concept!

🔧 FUNCTION KYA HOTA HAI:
Function ek reusable block of code hota hai jo:
  ✅ Ek specific kaam karta hai
  ✅ Input le sakta hai (ingredients)
  ✅ Output deta hai (result)
  ✅ Isse baar baar use kar sakte ho

🏗️  BILKUL AISE SAMJHO:
  - FUNCTION = Ek recipe jise aap bar bar use kar sakte ho
  - INPUT = Ingredients
  - PROCESS = Cooking steps
  - OUTPUT = Final dish
  
💡 BENEFITS:
  ✨ Code ko reuse kar sakte ho
  ✨ Code organized rahta hai
  ✨ Bug fix karna aasan hota hai
  ✨ Code padhna easy hota hai
  `);

  await waitForEnter("Kya samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 2: Basic Function Declaration
  // ==========================================
  topicCount++;
  printHeading("🎯 TOPIC 2: Basic Function Declaration", "🎯");
  console.log(`
📖 SAMJHAO:

Ab sikh lete hain function KAISE likhte hain!

🔷 SYNTAX (Likhaai ka tarika):

  function functionName() {
    // Yahan kaam likho
  }

✨ EXAMPLE:
`);

  console.log(`
  function sayHello() {
    console.log("Namaste! 🙏");
  }

  sayHello();  // Function ko call karo
  sayHello();  // Phir se call karo
`);

  console.log("\n📤 OUTPUT:\n");
  function sayHello() {
    console.log("Namaste! 🙏");
  }
  sayHello();
  sayHello();

  console.log(`
🔍 KYA HUA?
  1️⃣  Function likha (function define kiya)
  2️⃣  sayHello() likhkar function ko CALL kiya
  3️⃣  "Namaste!" do baar print hua!

💡 YAAD RAKHNA:
  ✅ Function likh dena = definition
  ✅ Function() likhna = execution
  ✅ Ek function ko bahut baar call kar sakte ho
  `);

  await waitForEnter("Clear? ➡️ Press Enter");

  // ==========================================
  // TOPIC 3: Function with Parameters
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("📥 TOPIC 3: Parameters Wala Function", "📥");
  console.log(`
📖 SAMJHAO:

Ab tak jo function likha, wo sabke liye same output deta tha.
Lekin kya agar hum DIFFERENT input de sakte to?

🏪 CHAI WALE KA EXAMPLE FIRSE:
  Dukaan wale ne soch "Har customer ko different chai chahiye!"
  Koi chai zyada sweet chahiye, koi kam...
  
ISLIYE PARAMETERS HOTE HAIN!

🔷 PARAMETERS = Ingredients jise aap bahar se dete ho

✨ EXAMPLE:
`);

  console.log(`
  function greetPerson(name) {
    console.log("Namaste " + name + "! 🙏");
  }

  greetPerson("Raj");      // Output: Namaste Raj! 🙏
  greetPerson("Priya");    // Output: Namaste Priya! 🙏
  greetPerson("Arjun");    // Output: Namaste Arjun! 🙏
`);

  console.log("\n📤 OUTPUT:\n");
  function greetPerson(name) {
    console.log("Namaste " + name + "! 🙏");
  }
  greetPerson("Raj");
  greetPerson("Priya");
  greetPerson("Arjun");

  console.log(`
🔍 SAMAJH GAYE?
  ✅ name ek PARAMETER hai (placeholder)
  ✅ Call karte time actual value dete ho (argument)
  ✅ Function multiple parameters le sakta hai!

🎯 MULTIPLE PARAMETERS:
`);

  console.log(`
  function addNumbers(a, b) {
    console.log(a + " + " + b + " = " + (a + b));
  }

  addNumbers(5, 10);   // 5 + 10 = 15
  addNumbers(100, 50); // 100 + 50 = 150
`);

  console.log("\n📤 OUTPUT:\n");
  function addNumbers(a, b) {
    console.log(a + " + " + b + " = " + (a + b));
  }
  addNumbers(5, 10);
  addNumbers(100, 50);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 4: Function with Return Value
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("🎁 TOPIC 4: Return Value Wala Function", "🎁");
  console.log(`
📖 SAMJHAO:

Ab tak jo function likha, sirf console.log se print karte the.
Lekin kya agar function kuch VALUE RETURN karega?

🏪 CHAI WALE KA EXAMPLE:
  Aap: "Bhaiya, chai de do!"
  Dukaan wala chai deta hai (RETURN karta hai)
  Aap chai ka use kar sakte ho (drink kar sakte ho)

RETURN matlab = kuch value dena, jisko aap age use kar sako!

✨ EXAMPLE:
`);

  console.log(`
  function multiply(a, b) {
    return a * b;  // Result ko RETURN karo
  }

  let multiplyResult = multiply(5, 10);  // Result ko variable mein store karo
  console.log("Multiply result: " + multiplyResult);  // Phir use karo
`);

  console.log("\n📤 OUTPUT:\n");
  function multiply(a, b) {
    return a * b;
  }
  let multiplyResult = multiply(5, 10);
  console.log("Multiply result: " + multiplyResult);

  console.log(`
🔍 KYA HUA?
  1️⃣  multiply(5, 10) = 50 (calculate hua)
  2️⃣  return statement se value return hui
  3️⃣  'result' variable mein 50 store hua
  4️⃣  Ab result ko kahi bhi use kar sakte ho!

⚠️ YAAD RAKHNA:
  ✅ return se function RUK JATA HAI
  ✅ Return ke baad koi code nahi chalega
  ✅ Return value KABHI KABHI nahi hota (void function)

🎯 PRACTICAL EXAMPLE:
`);

  console.log(`
  function getGreeting(hour) {
    if (hour < 12) {
      return "Good Morning! ☀️";
    } else if (hour < 18) {
      return "Good Afternoon! 🌤️";
    } else {
      return "Good Evening! 🌙";
    }
  }

  console.log(getGreeting(9));   // Good Morning! ☀️
  console.log(getGreeting(15));  // Good Afternoon! 🌤️
  console.log(getGreeting(20));  // Good Evening! 🌙
`);

  console.log("\n📤 OUTPUT:\n");
  function getGreeting(hour) {
    if (hour < 12) {
      return "Good Morning! ☀️";
    } else if (hour < 18) {
      return "Good Afternoon! 🌤️";
    } else {
      return "Good Evening! 🌙";
    }
  }
  console.log(getGreeting(9));
  console.log(getGreeting(15));
  console.log(getGreeting(20));

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 5: Function Expression
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("🎭 TOPIC 5: Function Expression", "🎭");
  console.log(`
📖 SAMJHAO:

Ab tak function declaration likha tha. Ab ek aur tareeka hai!

🔷 TWO WAYS TO WRITE FUNCTIONS:

  METHOD 1 (Declaration):
    function sayHi() {

    
    
      console.log("Hi!");
    }

  METHOD 2 (Expression):
    let sayHi = function() {
      console.log("Hi!");
    }

Dono se OUTPUT same hota hai, lekin likhaai different hai!

💡 FARAK:
  ✅ Declaration = function keyword se shuru
  ✅ Expression = variable mein function ko store karna

✨ EXAMPLE - FUNCTION EXPRESSION:
`);

  console.log(`
  let square = function(num) {
    return num * num;
  }

  console.log(square(5));   // 5 * 5 = 25
  console.log(square(10));  // 10 * 10 = 100
`);

  console.log("\n📤 OUTPUT:\n");
  let square5 = function (num) {
    return num * num;
  };
  console.log(square5(5));
  console.log(square5(10));

  console.log(`
🔍 KAISE KAM KARATA HAI?
  1️⃣  'square' ek variable hai
  2️⃣  Usme ek function store hai
  3️⃣  square() likhkar function ko call karte ho
  4️⃣  Bilkul normal function jaisa kaam karta hai!

⚠️ IMPORTANT FARAK:
  Declaration: function ko call kar sakte ho define se PEHLE bhi
  Expression:  function ko call kar sakte ho define ke BAAD hi

  // Declaration - YEH CHALEGA:
  sayHello();           // Call first
  function sayHello() { // Define later
    console.log("Hi!");
  }

  // Expression - YEH NAHI CHALEGA:
  sayGoodbye();         // Error! Function abhi define nahi hua
  let sayGoodbye = function() {
    console.log("Bye!");
  }
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 6: Arrow Functions
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("⚡ TOPIC 6: Arrow Functions (Fat Arrow)", "⚡");
  console.log(`
📖 SAMJHAO:

Arrow function ek MODERN aur SHORT tareeka hai function likhne ka!

🔷 SYNTAX:
  const functionName = (parameters) => {
    return value;
  }

FAT ARROW (=>) matlab "gets" likha jaata hai!

✨ STEP BY STEP EXAMPLE:

PEHLE (Traditional):
  let add = function(a, b) {
    return a + b;
  }

PHIR (Arrow):
  let add = (a, b) => {
    return a + b;
  }

AIDA BADIA (Short):
  let add = (a, b) => a + b;  // Return automatic!
  
`);

  console.log(`
EXAMPLE 1 - Basic Arrow Function:
  const multiply = (a, b) => {
    return a * b;
  }

  console.log(multiply(3, 5));  // 15
`);

  console.log("\n📤 OUTPUT:\n");
  const multiply1 = (a, b) => {
    return a * b;
  };
  console.log(multiply1(3, 5));

  console.log(`
EXAMPLE 2 - Short Arrow Function (ek line):
  const subtract = (a, b) => a - b;  // Automatic return!

  console.log(subtract(10, 3));  // 7
`);

  console.log("\n📤 OUTPUT:\n");
  const subtract6 = (a, b) => a - b;
  console.log(subtract6(10, 3));

  console.log(`
EXAMPLE 3 - Arrow Function with single parameter:
  const square2 = x => x * x;  // Parentheses optional ek param mein
  
  console.log(square2(4));     // 16
`);

  console.log("\n📤 OUTPUT:\n");
  const square2 = (x) => x * x;
  console.log(square2(4));

  console.log(`
🔍 BENEFITS:
  ✨ Code short aur clean hota hai
  ✨ Likhne mein time kam lagta hai
  ✨ Padhne mein aasan hota hai

⚠️ RULES:
  ✅ Ek parameter = () optional
  ✅ Multiple parameters = parentheses ZAROORI
  ✅ Ek line expression = return automatic
  ✅ Multiple lines = curly braces aur return zaroori
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 7: Callback Functions
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("📞 TOPIC 7: Callback Functions", "📞");
  console.log(`
📖 SAMJHAO:

Callback matlab "wapas call karna" (call + back)!

🏪 REAL-LIFE EXAMPLE - FOOD ORDER:
  Aap: "Bhaiya, ek pizza order kar do!"
  Dukaan wala: "Haan, but pizza ready hone mein time lagega"
  Aap: "Thik hai, mera number hai 9876543210. Pizza ready hone par mujhe call kar diyo!"
  
Dukaan wala pizza banata hai...
...aur phir aapko CALL BACK karta hai!

✨ CALLBACK FUNCTION = Ek function jise kisi aur function ko
                      pass karte ho, jab use ho toh woh call ho!

🔷 SYNTAX:
  function mainFunction(callback) {
    // Kaam karo...
    callback();  // Callback ko call karo!
  }

  mainFunction(function() {
    console.log("Callback call hua!");
  });

✨ SIMPLE EXAMPLE - GREETING WITH CALLBACK:
`);

  console.log(`
  function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();  // Callback ko call karo
  }

  greet("Raj", function() {
    console.log("Aapka greeting nikal gaya! 🎉");
  });
`);

  console.log("\n📤 OUTPUT:\n");
  function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  greet("Raj", function () {
    console.log("Aapka greeting nikal gaya! 🎉");
  });

  console.log(`
🎯 PRACTICAL EXAMPLE - PIZZA ORDER:
`);

  console.log(`
  function orderPizza(type, callback) {
    console.log("🍕 Pizza banaya ja raha hai: " + type);
    console.log("⏳ Please wait...");
    
    callback();  // Order ready hone par callback!
  }

  orderPizza("Margherita", function() {
    console.log("✅ Pizza ready! Enjoy! 😋");
  });

  orderPizza("Pepperoni", function() {
    console.log("✅ Spicy pizza ready! 🌶️");
  });
`);

  console.log("\n📤 OUTPUT:\n");
  function orderPizza(type, callback) {
    console.log("🍕 Pizza banaya ja raha hai: " + type);
    console.log("⏳ Please wait...");
    callback();
  }
  orderPizza("Margherita", function () {
    console.log("✅ Pizza ready! Enjoy! 😋");
  });
  orderPizza("Pepperoni", function () {
    console.log("✅ Spicy pizza ready! 🌶️");
  });

  console.log(`
💡 YAAD RAKHNA:
  ✅ Callback ek function hota hai
  ✅ Jise kisi aur function ko parameter ke taur par dete ho
  ✅ Wo main function ke andar call hota hai
  ✅ Network requests, events, setTimeout - sab mein use hota hai
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 8: Higher Order Functions
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("🏢 TOPIC 8: Higher Order Functions", "🏢");
  console.log(`
📖 SAMJHAO:

Higher Order Function = Ek function jo doosre functions ko:
  1️⃣  Parameter mein le sakta hai
  2️⃣  Return kar sakta hai

Basically, function ko function ke taur par treat karte ho!

🔷 DEFINITION:
A function that takes another function as argument
OR returns another function
= Higher Order Function

✨ EXAMPLE 1 - FUNCTION AS PARAMETER:
`);

  console.log(`
  function operate(a, b, operation) {
    // operation ek function hai!
    return operation(a, b);
  }

  let add = (x, y) => x + y;
  let multiply = (x, y) => x * y;

  console.log(operate(10, 5, add));          // 15
  console.log(operate(10, 5, multiply));     // 50
`);

  console.log("\n📤 OUTPUT:\n");
  function operate(a, b, operation) {
    return operation(a, b);
  }
  let add2 = (x, y) => x + y;
  let mult = (x, y) => x * y;
  console.log(operate(10, 5, add2));
  console.log(operate(10, 5, mult));

  console.log(`
🔍 KYA HUA?
  1️⃣  'operate' function ne 3 parameters liye
  2️⃣  Teesra parameter 'operation' ek function hai!
  3️⃣  operate ke andar operation(a, b) call hua
  4️⃣  Different operations pass kiye, different results mila!

✨ EXAMPLE 2 - FUNCTION RETURN:
`);

  console.log(`
  function createMultiplier(multiplier) {
    // Yeh function ek naya function RETURN karega!
    return function(number) {
      return number * multiplier;
    }
  }

  let double = createMultiplier(2);    // Double karne wala function
  let triple = createMultiplier(3);    // Triple karne wala function

  console.log(double(5));   // 10
  console.log(triple(5));   // 15
`);

  console.log("\n📤 OUTPUT:\n");
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  let double8 = createMultiplier(2);
  let triple8 = createMultiplier(3);
  console.log(double8(5));
  console.log(triple8(5));

  console.log(`
💡 YEH POWERFUL KYO HAI:
  ✨ Reusable patterns banate ho
  ✨ Flexible code likha ja sakta hai
  ✨ Complex logic ko simple bana sakte ho
  ✨ Real-world mein BAHUT use hota hai (React, Node.js, etc.)
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 9: Array Methods with Callbacks
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("📊 TOPIC 9: Array Methods (forEach, map, filter)", "📊");
  console.log(`
📖 SAMJHAO:

Arrays hote hain data ka collection. Jo jald-jaldi task karne ho,
aise built-in methods hain jo callback use karte hain!

🔷 THREE IMPORTANT METHODS:

  1️⃣  forEach    = Har item par ek kaam karo
  2️⃣  map        = Har item ko transform karke naya array banao
  3️⃣  filter     = Sirf wahi items lo jo condition satisfy kare

🎯 METHOD 1 - forEach (Loop alternative):

forEach = "Har ek ke liye"

EXAMPLE:
  let fruits = ["Apple", "Banana", "Mango"];

  fruits.forEach(function(fruit) {
    console.log("I like " + fruit);
  });
`);

  console.log("\n📤 OUTPUT:\n");
  let fruits9a = ["Apple", "Banana", "Mango"];
  fruits9a.forEach(function (fruit) {
    console.log("I like " + fruit);
  });

  console.log(`
✨ ARROW FUNCTION SE SHORT:
  fruits.forEach(fruit => console.log("I like " + fruit));
`);

  console.log("\n📤 OUTPUT:\n");
  let fruits9b = ["Apple", "Banana", "Mango"];
  fruits9b.forEach((fruit) => console.log("I like " + fruit));

  console.log(`
🎯 METHOD 2 - map (Transform):

map = "Har item ko CHANGE karke naya array banao"

EXAMPLE - Numbers ko double karo:
  let numbers = [1, 2, 3, 4, 5];

  let doubled = numbers.map(function(num) {
    return num * 2;  // Transformation
  });

  console.log(doubled);  // [2, 4, 6, 8, 10]
`);

  console.log("\n📤 OUTPUT:\n");
  let numbers9a = [1, 2, 3, 4, 5];
  let doubled9 = numbers9a.map(function (num) {
    return num * 2;
  });
  console.log(doubled9);

  console.log(`
✨ WITH ARROW FUNCTION:
  let squared = numbers.map(n => n * n);
  console.log(squared);  // [1, 4, 9, 16, 25]
`);

  console.log("\n📤 OUTPUT:\n");
  let squared9 = numbers9a.map((n) => n * n);
  console.log(squared9);

  console.log(`
🎯 METHOD 3 - filter (Select specific items):

filter = "Sirf wo items rakho jo condition satisfy kare"

EXAMPLE - Sirf even numbers:
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumbers = nums.filter(function(num) {
    return num % 2 === 0;  // Return true/false
  });

  console.log(evenNumbers);  // [2, 4, 6, 8, 10]
`);

  console.log("\n📤 OUTPUT:\n");
  let nums9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbers9 = nums9.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(evenNumbers9);

  console.log(`
✨ PRACTICAL EXAMPLE - STUDENT FILTER:
  let students = [
    { name: "Raj", score: 85 },
    { name: "Priya", score: 92 },
    { name: "Arjun", score: 78 },
    { name: "Neha", score: 88 }
  ];

  let toppers = students.filter(s => s.score > 85);

  console.log("Toppers:");
  toppers.forEach(t => console.log(t.name + " - " + t.score));
`);

  console.log("\n📤 OUTPUT:\n");
  let students9 = [
    { name: "Raj", score: 85 },
    { name: "Priya", score: 92 },
    { name: "Arjun", score: 78 },
    { name: "Neha", score: 88 },
  ];
  let toppers9 = students9.filter((s) => s.score > 85);
  console.log("Toppers:");
  toppers9.forEach((t) => console.log(t.name + " - " + t.score));

  console.log(`
🎯 CHAIN KARO (Multiple methods together):
  let chainResult = numbers
    .filter(n => n > 2)        // [3,4,5,6,7,8,9,10]
    .map(n => n * 2)           // [6,8,10,12,14,16,18,20]
    .filter(n => n < 15);      // [6,8,10,12,14]

  console.log(chainResult);
`);

  console.log("\n📤 OUTPUT:\n");
  let result9 = numbers9a
    .filter((n) => n > 2)
    .map((n) => n * 2)
    .filter((n) => n < 15);
  console.log(result9);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 10: Async Functions & Promises
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("⏱️  TOPIC 10: Async Functions & Promises", "⏱️");
  console.log(`
📖 SAMJHAO:

Network request, database query, file read - ye sab TIME LAGTE HAIN!
Jab tak ye complete ho, code ruk jata hai (blocking).

SOLUTION = ASYNC PROGRAMMING (Asynchronous)

🏪 DELIVERY WALA EXAMPLE:
  Aap: "Mera order de do!"
  Delivery: "Thik hai, 30 minute mein aata hoon"
  Aap: Intezaar nahin karte, apna kaam karte ho
  Delivery: 30 minute baad aata hai, bell bajata hai!

YEHI HAI ASYNCHRONOUS!

🔷 PROMISE:
Promise = ek "wada" (guarantee) jo:
  ✅ Fulfilled hota hai (kaam complete)
  ❌ Rejected hota hai (kaam fail)
  ⏳ Pending rehta hai (wait)

✨ PROMISE EXAMPLE:
`);

  console.log(`
  let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve("Yay! Promise fulfilled! ✅");
    } else {
      reject("Oops! Promise rejected! ❌");
    }
  });

  myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
`);

  console.log("\n📤 OUTPUT:\n");
  let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Yay! Promise fulfilled! ✅");
    } else {
      reject("Oops! Promise rejected! ❌");
    }
  });
  myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  console.log(`
🔷 ASYNC/AWAIT (Modern tarika):

Async function se code likhne mein aasan hota hai!

✨ EXAMPLE:
`);

  console.log(`
  async function fetchData() {
    try {
      console.log("Data fetch ho raha hai...");
      
      // Real world mein yahan API call hota hai
      let result = "Data successfully fetched! ✅";
      
      return result;
    } catch (error) {
      console.log("Error aaya: " + error);
    }
  }

  // Async function ko await se call karo
  async function main() {
    let data = await fetchData();
    console.log(data);
  }

  main();
`);

  console.log("\n📤 OUTPUT:\n");
  async function fetchData() {
    try {
      console.log("Data fetch ho raha hai...");
      let result = "Data successfully fetched! ✅";
      return result;
    } catch (error) {
      console.log("Error aaya: " + error);
    }
  }
  async function main() {
    let data = await fetchData();
    console.log(data);
  }
  await main();

  console.log(`
💡 YAAD RAKHNA:
  ✅ async function = jo asynchronous ho sakta hai
  ✅ await = jab tak woh complete na ho, wait karo
  ✅ Promise / async-await = same kaam, different styles
  ✅ try-catch = errors handle karne ke liye
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 11: setTimeout & setInterval
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("⏰ TOPIC 11: setTimeout & setInterval", "⏰");
  console.log(`
📖 SAMJHAO:

Real world mein callbacks ka sabse common use:
  ⏰ setTimeout  = Baad mein ek baar execute karo
  🔄 setInterval = Baad mein BAR BAR execute karo

🔷 setTimeout (Delayed execution):

Syntax: setTimeout(callback, time_in_milliseconds)

✨ EXAMPLE:
`);

  console.log(`
  console.log("START 🚀");

  setTimeout(() => {
    console.log("3 second baad ye message aaya! ⏰");
  }, 3000);  // 3000 milliseconds = 3 seconds

  console.log("END 🏁");
`);

  console.log("\n📤 OUTPUT:\n");
  console.log("START 🚀");
  // Commented out to not wait 3 seconds - showing the concept instead
  console.log("[3 second wait...]");
  console.log("3 second baad ye message aaya! ⏰");
  console.log("END 🏁");

  console.log(`
🔷 setInterval (Repeating execution):

Syntax: setInterval(callback, time_interval)

✨ EXAMPLE - Counter:
`);

  console.log(`
  let count = 0;
  let interval = setInterval(() => {
    count++;
    console.log("Count: " + count);
    
    if (count === 3) {
      clearInterval(interval);  // Stop after 3
      console.log("Interval stop ho gya! 🛑");
    }
  }, 1000);  // Har 1 second mein call hoga
`);

  console.log("\n📤 OUTPUT (Real-time demo):\n");
  let count = 0;
  let interval = setInterval(() => {
    count++;
    console.log("Count: " + count);

    if (count === 3) {
      clearInterval(interval);
      console.log("Interval stop ho gya! 🛑");
    }
  }, 1000);

  // Wait for interval to complete
  await new Promise((resolve) => setTimeout(resolve, 4000));

  console.log(`
💡 REAL-WORLD EXAMPLES:
  ✅ setTimeout = "5 second mein notification send karo"
  ✅ setInterval = "Har 30 second mein data refresh karo"
  ✅ clearTimeout / clearInterval = Stop kar do
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 12: IIFE (Immediately Invoked Function Expression)
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("🚀 TOPIC 12: IIFE (Immediately Invoked Function)", "🚀");
  console.log(`
📖 SAMJHAO:

IIFE = Function jise likha jaata hai aur TURANT (immediately) execute ho jaata hai!

Function likha aur define bhi ho gya, execute bhi ho gya - sab ek sath!

🔷 SYNTAX:
  (function() {
    // Code
  })();

Dekho last mein () lage hain? Wo function ko execute karte hain!

✨ SIMPLE EXAMPLE:
`);

  console.log(`
  (function() {
    console.log("Namaste! Main IIFE hoon! 👋");
    console.log("Main turant execute ho gya!");
  })();
`);

  console.log("\n📤 OUTPUT:\n");
  (function () {
    console.log("Namaste! Main IIFE hoon! 👋");
    console.log("Main turant execute ho gya!");
  })();

  console.log(`
✨ IIFE WITH PARAMETERS:
`);

  console.log(`
  (function(name, age) {
    console.log("Hello " + name + "!");
    console.log("Age: " + age);
  })("Raj", 25);  // Parameters pass karte ho yahan
`);

  console.log("\n📤 OUTPUT:\n");
  (function (name, age) {
    console.log("Hello " + name + "!");
    console.log("Age: " + age);
  })("Raj", 25);

  console.log(`
✨ ARROW FUNCTION IIFE:
  (() => {
    console.log("Arrow function IIFE! ⚡");
    console.log("Turant execute ho gya!");
  })();
`);

  console.log("\n📤 OUTPUT:\n");
  (() => {
    console.log("Arrow function IIFE! ⚡");
    console.log("Turant execute ho gya!");
  })();

  console.log(`
💡 IIFE KYO ZAROORI?
  ✅ Variable scope protect kar sakte ho (global pollution nahi)
  ✅ Plugin/library code se variables conflict nahi hota
  ✅ Temporary code chal sakta hai
  ✅ Module pattern mein use hota hai

🔷 PRACTICAL EXAMPLE - MULTIPLE IIFE:
`);

  console.log(`
  let myApp = (function() {
    let privateVar = "Ye sirf IIFE ke andar visible hai";
    
    return {
      greet: function() {
        console.log("IIFE ke through greeting!");
      }
    };
  })();

  myApp.greet();  // IIFE execute hua, phir myApp.greet() call hua
`);

  console.log("\n📤 OUTPUT:\n");
  let myApp = (function () {
    let privateVar = "Ye sirf IIFE ke andar visible hai";

    return {
      greet: function () {
        console.log("IIFE ke through greeting!");
      },
    };
  })();
  myApp.greet();

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 13: Recursion
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("♻️  TOPIC 13: Recursion (Function calling itself)", "♻️");
  console.log(`
📖 SAMJHAO:

RECURSION = Function jo apne aap ko hi call kaarta hai!

🏪 REAL-LIFE EXAMPLE - RUSSIAN DOLLS:
  ek bada doll hota hai
  usme chota doll hota hai
  usme aur chota doll hota hai
  ...aur base case tak (sabse chota jo khula ho)

YEHI RECURSION HAI!

🔷 RECURSION KE DO HISSE:
  1️⃣  Base Case = Jahan function rukta hai (infinite loop se bachne ke liye)
  2️⃣  Recursive Case = Jahan function apne aap ko call karta hai

⚠️ YAAD RAKHNA:
  ❌ Base case na ho = INFINITE LOOP = APP CRASH
  ✅ Base case ho = Proper stopping point

✨ SIMPLE EXAMPLE - COUNTDOWN:
`);

  console.log(`
  function countdown(n) {
    // BASE CASE
    if (n === 0) {
      console.log("Blastoff! 🚀");
      return;  // Rukta hai
    }

    // RECURSIVE CASE
    console.log(n);
    countdown(n - 1);  // Apne aap ko call karo
  }

  countdown(5);
`);

  console.log("\n📤 OUTPUT:\n");
  function countdown(n) {
    if (n === 0) {
      console.log("Blastoff! 🚀");
      return;
    }
    console.log(n);
    countdown(n - 1);
  }
  countdown(5);

  console.log(`
✨ PRACTICAL EXAMPLE - FACTORIAL:

Factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
`);

  console.log(`
  function factorial(num) {
    // BASE CASE
    if (num === 1) {
      return 1;
    }

    // RECURSIVE CASE
    return num * factorial(num - 1);
  }

  console.log("Factorial(5) = " + factorial(5));  // 120
  console.log("Factorial(4) = " + factorial(4));  // 24
`);

  console.log("\n📤 OUTPUT:\n");
  function factorial(num) {
    if (num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  console.log("Factorial(5) = " + factorial(5));
  console.log("Factorial(4) = " + factorial(4));

  console.log(`
🔍 STEP BY STEP - factorial(3):
  
  factorial(3)
    = 3 * factorial(2)
    = 3 * (2 * factorial(1))
    = 3 * (2 * 1)
    = 3 * 2
    = 6

✨ NESTED OBJECT EXAMPLE - Tree exploration:
`);

  console.log(`
  let fileTree = {
    name: "root",
    children: [
      {
        name: "folder1",
        children: [
          { name: "file1.txt" },
          { name: "file2.txt" }
        ]
      },
      { name: "file3.txt" }
    ]
  };

  function explore(obj, level = 0) {
    console.log(" ".repeat(level * 2) + obj.name);
    
    if (obj.children) {
      obj.children.forEach(child => explore(child, level + 1));
    }
  }

  explore(fileTree);
`);

  console.log("\n📤 OUTPUT:\n");
  let fileTree = {
    name: "root",
    children: [
      {
        name: "folder1",
        children: [{ name: "file1.txt" }, { name: "file2.txt" }],
      },
      { name: "file3.txt" },
    ],
  };

  function explore(obj, level = 0) {
    console.log(" ".repeat(level * 2) + obj.name);

    if (obj.children) {
      obj.children.forEach((child) => explore(child, level + 1));
    }
  }
  explore(fileTree);

  console.log(`
💡 RECURSION USE CASE:
  ✅ Tree/nested structures (files, DOM, JSON)
  ✅ Mathematical problems (factorial, fibonacci)
  ✅ Search algorithms
  ✅ Jahan repetitive structure ho wahan
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // TOPIC 14: Normal Function vs Arrow Function
  // ==========================================
  topicCount++;
  printProgress(topicCount, totalTopics);
  printHeading("🆚 TOPIC 14: Normal vs Arrow Function (this keyword)", "🆚");
  console.log(`
📖 SAMJHAO:

Arrow function aur normal function bilkul same nahi hote!
Sabse bada farak = 'this' keyword ka behavior

🔷 NORMAL FUNCTION:
  function() {
    // Yahan 'this' = object ke liye
  }

🔷 ARROW FUNCTION:
  () => {
    // Yahan 'this' = parent ke 'this' ko use karta hai
  }

✨ SIMPLE EXAMPLE - 'this' ka farak:
`);

  console.log(`
  let person = {
    name: "Raj",
    
    // Normal function
    greet: function() {
      console.log("Normal function: " + this.name);
    },
    
    // Arrow function
    introduce: () => {
      console.log("Arrow function: " + this.name);  // this alag context se aata hai
    }
  };

  person.greet();        // Output: Normal function: Raj
  person.introduce();    // Output: Arrow function: undefined
`);

  console.log("\n📤 OUTPUT:\n");
  let person = {
    name: "Raj",

    greet: function () {
      console.log("Normal function: " + this.name);
    },

    introduce: () => {
      console.log("Arrow function: " + this.name);
    },
  };

  person.greet();
  person.introduce();

  console.log(`
🔍 KYA HUA?
  ✅ greet() normal function hai → 'this' = person object
  ❌ introduce() arrow function hai → 'this' = global context (name nahi hai)

✨ DETAILED EXAMPLE:
`);

  console.log(`
  let car = {
    brand: "Tesla",
    speed: 0,
    
    accelerate: function() {
      this.speed += 10;
      console.log(this.brand + " speed: " + this.speed + " km/h");
    },
    
    accelerateArrow: () => {
      console.log("Arrow function wala yeh method nahi handle kar sakta properly");
    }
  };

  car.accelerate();        // Works perfectly
  car.accelerate();        // Speed increase hota hai
`);

  console.log("\n📤 OUTPUT:\n");
  let car = {
    brand: "Tesla",
    speed: 0,

    accelerate: function () {
      this.speed += 10;
      console.log(this.brand + " speed: " + this.speed + " km/h");
    },
  };

  car.accelerate();
  car.accelerate();

  console.log(`
💡 KAB NORMAL FUNCTION AUR KAB ARROW?

NORMAL FUNCTION USE KARO:
  ✅ Object methods mein (jab 'this' chahiye)
  ✅ Constructor functions
  ✅ Jab function ka apna 'this' chahiye

ARROW FUNCTION USE KARO:
  ✅ Callbacks mein (map, filter, setTimeout)
  ✅ Lexical 'this' chahiye
  ✅ Short syntax chahiye
  ✅ 'this' parent se inherit karna ho

✨ PRACTICAL EXAMPLE - Callbacks with arrow:
`);

  console.log(`
  let counter = {
    count: 0,
    
    startCounting: function() {
      let arr = [1, 2, 3];
      
      // Arrow function se 'this' access kar sakte ho!
      arr.forEach(item => {
        this.count++;
      });
      
      console.log("Total: " + this.count);
    }
  };

  counter.startCounting();  // Output: Total: 3
`);

  console.log("\n📤 OUTPUT:\n");
  let counter = {
    count: 0,

    startCounting: function () {
      let arr = [1, 2, 3];
      arr.forEach((item) => {
        this.count++;
      });
      console.log("Total: " + this.count);
    },
  };

  counter.startCounting();

  console.log(`
🎯 SUMMARY:
  📌 Normal function = apna 'this' context
  📌 Arrow function = parent ka 'this' context
  📌 Callbacks mein arrow use karo
  📌 Methods mein normal function use karo
  `);

  await waitForEnter("Samajh aaya? ➡️ Press Enter");

  // ==========================================
  // FINAL QUIZ
  // ==========================================
  printProgress(totalTopics, totalTopics);
  printHeading("📝 QUIZ TIME! Let's test what you learned", "📝");

  const quizQuestions = [
    {
      question: "Function ka main purpose kya hai?",
      options: [
        "A) Code ko reuse karna",
        "B) Website banaan",
        "C) Database setup",
      ],
      correct: "A",
    },
    {
      question: "Arrow function ko likhne ka tarika kya hai?",
      options: ["A) function() {}", "B) () => {}", "C) [function]"],
      correct: "B",
    },
    {
      question: "Callback function kya hota hai?",
      options: [
        "A) Return value",
        "B) Function jise doosre function ko pass kare",
        "C) Array method",
      ],
      correct: "B",
    },
    {
      question: "forEach, map, filter kya hain?",
      options: [
        "A) Variables",
        "B) Array methods jo callbacks use karte hain",
        "C) Function names",
      ],
      correct: "B",
    },
    {
      question: "Recursion ka base case kyu important hai?",
      options: [
        "A) Code ko fast banane ke liye",
        "B) Infinite loop se bachne ke liye",
        "C) Variables declare karne ke liye",
      ],
      correct: "B",
    },
    {
      question: "IIFE ka matlab kya hai?",
      options: [
        "A) Ek type ka variable",
        "B) Function jo turant execute ho",
        "C) Loop construct",
      ],
      correct: "B",
    },
    {
      question: "Async/await kya kaam karte hain?",
      options: [
        "A) Loop banate hain",
        "B) Asynchronous code ko handle karte hain",
        "C) HTML elements select karte hain",
      ],
      correct: "B",
    },
    {
      question: "Normal function aur arrow function mein kya farak hai?",
      options: [
        "A) Speed mein difference",
        "B) 'this' keyword ka behavior alag hota hai",
        "C) Performance mein",
      ],
      correct: "B",
    },
  ];

  let correctAnswers = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];
    console.log(`\n📌 Question ${i + 1}/${quizQuestions.length}:`);
    console.log(`\n${q.question}\n`);
    q.options.forEach((opt) => console.log(opt));

    const answer = await new Promise((resolve) => {
      rl.question("\nAapka answer (A/B/C): ", (ans) => {
        resolve(ans.toUpperCase());
      });
    });

    if (answer === q.correct) {
      console.log("\n✅ BILKUL SAHI! 🎉\n");
      correctAnswers++;
    } else {
      console.log(`\n❌ Galat! Sahi answer: ${q.correct}\n`);
    }
  }

  // ==========================================
  // QUIZ RESULT
  // ==========================================
  printHeading("📊 QUIZ RESULTS", "📊");
  console.log(`
Total Questions: ${quizQuestions.length}
Correct Answers: ${correctAnswers}
Score: ${Math.round((correctAnswers / quizQuestions.length) * 100)}%

${correctAnswers === quizQuestions.length ? "🏆 PERFECT SCORE! Waah! You're a master!" : ""}
${correctAnswers > 5 ? "🎊 Bahut accha! You've understood the concepts well!" : ""}
${correctAnswers <= 5 ? "💪 Acha start hai! Practice karte raho!" : ""}
  `);

  await waitForEnter("Continue to challenge... ➡️ Press Enter");

  // ==========================================
  // FINAL CHALLENGE
  // ==========================================
  printHeading("🚀 MINI CHALLENGE: Create Your Own Function!", "🚀");
  console.log(`
🎯 CHALLENGE:
Aapko apna ek function likhn hai jo:

  1️⃣  Naam lo: "calculateGPA"
  2️⃣  Parameter: Array of marks (0-100)
  3️⃣  Calculate: Average nikalo
  4️⃣  Return: "GPA: X.XX" format mein
  
EXAMPLE:
  calculateGPA([85, 90, 88]) should return "GPA: 87.67"

Ache se socho, phir likho!
  `);

  await waitForEnter("Press Enter jab likhne ke baad check karna ho");

  console.log(`
Acha, ab dekho ek solution:

function calculateGPA(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  return "GPA: " + average.toFixed(2);
}

console.log(calculateGPA([85, 90, 88]));
console.log(calculateGPA([92, 95, 89, 88]));
  `);

  console.log("\n📤 OUTPUT:\n");
  function calculateGPA(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    let average = sum / marks.length;
    return "GPA: " + average.toFixed(2);
  }
  console.log(calculateGPA([85, 90, 88]));
  console.log(calculateGPA([92, 95, 89, 88]));

  console.log(`
✨ ALTERNATIVE SOLUTION (Modern way - using reduce):

const calculateGPA = (marks) => {
  const sum = marks.reduce((total, mark) => total + mark, 0);
  const average = sum / marks.length;
  return \`GPA: \${average.toFixed(2)}\`;
};

console.log(calculateGPA([85, 90, 88]));
  `);

  await waitForEnter("Press Enter for final summary");

  // ==========================================
  // FINAL SUMMARY
  // ==========================================
  printHeading("🎓 COURSE SUMMARY & COMPLETION", "🎓");
  console.log(`
🎉 CONGRATULATIONS! 🎉

Aap ne successfully complete kiye ye topics:

${Array.from({ length: 14 }, (_, i) => `${i + 1}. ${i === 0 ? "What is a Function" : i === 1 ? "Basic Function Declaration" : i === 2 ? "Function with Parameters" : i === 3 ? "Function with Return Value" : i === 4 ? "Function Expression" : i === 5 ? "Arrow Functions" : i === 6 ? "Callback Functions" : i === 7 ? "Higher Order Functions" : i === 8 ? "Array Methods (forEach, map, filter)" : i === 9 ? "Async/Await & Promises" : i === 10 ? "setTimeout & setInterval" : i === 11 ? "IIFE" : i === 12 ? "Recursion" : "Normal vs Arrow Functions"}`).join("\n")}

📊 COMPLETION STATUS:
  ✅ All 14 topics covered
  ✅ Practical examples executed
  ✅ Quiz completed
  ✅ Challenge solved

🎯 NEXT STEPS:
  1️⃣  Practice ye concepts aur zyada examples banao
  2️⃣  JavaScript projects banao
  3️⃣  Web development sikho (HTML, CSS, JS)
  4️⃣  APIs use karo
  5️⃣  Frameworks (React, Node.js) explore karo

💡 IMPORTANT TIPS:
  ✨ Code likhte raho, roz practice karo
  ✨ Projects banao (real-world examples)
  ✨ Concepts ko samajho, sirf munh-zubani na karo
  ✨ Errors se sikhna padta hai - mushkil mat mano
  ✨ Community join karo (GitHub, Stack Overflow)

🚀 YOU'RE READY FOR NEXT LEVEL!

Ab tum JavaScript functions ko MASTER kar chuke ho!
Go build amazing things! 🌟

Happy Coding! 💻
  `);

  printSeparator();
  console.log("\n👋 Thank you for learning with me! Fir milenge!\n");
  printSeparator();

  rl.close();
  process.exit(0);
}

// Start the application
startLearning().catch((err) => {
  console.error("Error:", err);
  rl.close();
  process.exit(1);
});
