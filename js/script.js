// Task #1

let userName = prompt(`What you Name?`);
let userHow = prompt(`What ${userName} how are you?`);
let userEat = prompt(`What did the gentleman regale today?`);
let userBye = prompt(`"Unfortunately, I am a robot and do not eat, so your human tastes are not close to me. Farewell..."`);

console.log(`
            - What you Name?
            - ${userName}
            - What ${userName} how are you?
            - ${userHow}
            - What did the gentleman regale today?
            - ${userEat}
            -"Unfortunately, I am a robot and do not eat, so your human tastes are not close to me. Farewell..."
            - ${userBye}
            `);

// Task #2

let userNumber = +prompt(`Enter your Number`);

console.log('Числа кратные 5');


for (let i = 0; i  <= userNumber; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

console.log('Числа кратные 2');

for (let i = 0; i <= userNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



