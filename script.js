let reputation = 0;
let money = 100;
let food = 100;
let alive = true;

function log(msg) {
  const logBox = document.getElementById('log');
  logBox.innerHTML += `<p>> ${msg}</p>`;
  logBox.scrollTop = logBox.scrollHeight;
}

function updateStats() {
  document.getElementById('reputation').textContent = reputation;
  document.getElementById('money').textContent = money;
  document.getElementById('food').textContent = food;
}

function banUser() {
  reputation += 5;
  log("You banned a toxic user.");
  updateStats();
}

function deleteMessages() {
  reputation += 2;
  log("You deleted spam messages.");
  updateStats();
}

function reviewApplication() {
  let accepted = Math.random() < 0.5;
  if (accepted) {
    let badHire = Math.random() < 0.3;
    if (badHire) {
      reputation -= 20;
      money -= 50;
      log("You hired a rogue staff who nuked the server! You lost rep and money.");
    } else {
      reputation += 10;
      log("You hired a good staff member. Reputation increased.");
    }
  } else {
    log("You rejected an application.");
  }
  updateStats();
}

function buyFood() {
  if (money >= 10) {
    food = Math.min(food + 30, 100);
    money -= 10;
    log("You bought food and feel better.");
  } else {
    log("Not enough money to buy food.");
  }
  updateStats();
}

function foodDrain() {
  if (!alive) return;
  food -= 1;
  if (food <= 0) {
    alive = false;
    log("You died from hunger. Game over.");
  }
  updateStats();
}

setInterval(foodDrain, 3000); // every 3 seconds
