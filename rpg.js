

function toggleToolsMenu() {
  var toolsMenuContent = document.querySelector('.toolsMenuContent');
  toolsMenuContent.classList.toggle('open');
}

// Call saveGame function when the window is about to be unloaded (before refresh or navigation)
window.addEventListener('beforeunload', saveGame);

// Function to save the game state
function saveGame() {
  const gameState = {
    xp: xp,
    health: health,
    gold: gold,
    currentWeapon: currentWeapon,
    inventory: inventory,
    playerName: playerName
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
}


// Call loadGame function when the window loads
window.onload = function() {
  loadGame();
};

function loadGame() {
  const savedGame = localStorage.getItem('gameState');
  console.log("Saved Game:", savedGame); // Log saved game state
  if (savedGame) {
    try {
      const gameState = JSON.parse(savedGame);
      xp = gameState.xp;
      health = gameState.health;
      gold = gameState.gold;
      currentWeapon = gameState.currentWeapon;
      inventory = gameState.inventory;
      playerName = gameState.playerName;
      // Update UI with loaded game state
      goldText.innerText = gold;
      healthText.innerText = health;
      xpText.innerText = xp;
      // Check if playerName exists and proceed accordingly
      if (playerName) {
        // Player name is saved, proceed with loading game state
        outputText.innerHTML = `<div class="textBox">Welcome to <span id="im-fell-english-sc-regular">DragonFire RPG</span>, ${playerName}! Prepare to battle the vicious dragon! You are currently in the Town Square.</div>`;
        document.getElementById("controls").style.display = "block";
        document.getElementById("stats").style.display = "block";
        document.getElementById("testmode").style.display = "block"; // Display the Test Mode button
        document.getElementById("playerImage").style.display = "none"; // Hide the image
        document.getElementById("playerNameDisplay").textContent = playerName + `:`;
        update(locations[0], playerName); // Directly go to locations[0]
        return; // Exit the function to prevent further execution
      }
      // playerName not found, proceed with regular initialization
    } catch (error) {
      console.error("Error loading game state:", error);
    }
  }
}

// Call loadGame function when the window loads
window.onload = function() {
  loadGame();
  // Log container dimensions
  var container = document.getElementById('text');
  resizeBackground();
  preloadImages();
};

// Call saveGame function whenever the game state changes



// Add a function for Test Mode
function testMode() {
  gold += 1000;
  health += 1000;
  goldText.innerText = gold;
  healthText.innerText = health;
  text.innerHTML = `<div class="textBox"><img src="img/gold.png" />Test Mode activated. You have added 1000 gold and 1000 health.</div>`;
}

// Initialize the Test Mode button
const testModeButton = document.querySelector("#testmode");
testModeButton.onclick = testMode;


function preloadImages() {
  const images = [
    './img/parchment.gif',
    './img/slime-die.png',
    './img/beast-die.png',
    './img/dragon-die.png',
    './img/store.png',
    './img/insideshop.png',
    './img/slime.png',
    './img/slime2.png',
    './img/beast.png',
    './img/dragon.png',
    './img/slime-dodge.png',
    './img/beast-dodge.png',
    './img/dragon-dodge.png',
    './img/slime-attack.png',
    './img/beast-attack.png',
    './img/dragon-attack.png',
    './img/slime-win.png',
    './img/beast-win.png',
    './img/dragon-win.png',
    '/img/intro.png'
  ];

  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

window.onresize = function() {
  resizeBackground();
};
function resizeBackground() {
  var container = document.getElementById('parchmentPaper');
  var image = new Image();
  image.src = './img/parchment.gif';
  image.onload = function() {
    container.style.width = '500px';
    container.style.padding = '50px 0 50px 0';
    container.style.background = `url(${image.src}) no-repeat center center / cover`;
  };
}


// Initialize variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let playerName = ""; // Initialize player name

// Get input field and button
const nameInput = document.querySelector("#nameInput");
const startButton = document.querySelector("#startButton");
const outputText = document.querySelector("#text"); // Changed variable name to avoid conflict

// Get the reset game button
const resetGameButton = document.querySelector("#resetGame");

// Event listener for the reset game button
resetGameButton.addEventListener("click", resetGame);

// Function to refresh the page
function refreshPage() {
}

// Function to reset the game state
function resetGame() {
  // Reset all variables to their initial values
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  playerName = "";
  location.reload();
  // Update UI elements to reflect the reset state
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  document.getElementById("playerNameDisplay").textContent = ""; // Clear player name display
  document.getElementById("controls").style.display = "block"; // Hide controls
  document.getElementById("stats").style.display = "block"; // Hide stats
  document.getElementById("testmode").style.display = "block"; // Hide Test Mode button
  document.getElementById("playerImage").style.display = "none"; // Show player image

  // Reset game location to the initial state
  update(locations[0], "Adventurer"); // Use default name "Adventurer" for the initial state
  
  // Save the game state after resetting
  saveGame();
}



// Event listener for name input
nameInput.addEventListener("input", (event) => {
  playerName = event.target.value;
});

// Event listener for Enter key press
nameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    startButton.click(); // Simulate button click
  }
});

// Event listener for the start button
document.getElementById("startButton").addEventListener("click", () => {
  // Get the player's name from the input field
  playerName = document.getElementById("nameInput").value;

  if (playerName) {
    // If a name is entered, proceed
    outputText.innerHTML = `<div class="textBox">Welcome to <span id="im-fell-english-sc-regular">DragonFire RPG</span>, ${playerName}! Prepare to battle the vicious dragon! You are currently in the Town Square.</div>`;
    document.getElementById("controls").style.display = "block";
    document.getElementById("stats").style.display = "block";
    document.getElementById("testmode").style.display = "block"; // Display the Test Mode button
    document.getElementById("playerImage").style.display = "none"; // Hide the image
    document.getElementById("playerNameDisplay").textContent = playerName + `:`;
    update(locations[0], playerName);
  } else {
    // If no name is entered, continue with a default name
    update(locations[0], "Adventurer");
  }
});







// Initialize variables

const dieMonsterAttack = [
  'img/slime-die.png',
  'img/beast-die.png',
  'img/dragon-die.png'
];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 40
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: '<img src="img/store.png" />You are in the town square. You see a sign that says "Store."<br/><br/>In the distance, you see a dark cave surrounded by molten slime.'
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: `<img src="img/insideshop.png" />You enter the store. You see a tall graying man standing behind the counter. He looks at you and says, 'What can I do fer you?' You see a shiny dagger on the wall and a shelf full of green and yellow potions.`
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: '<img src="img/slime.png" />You walk towards the cave in the distance. Rocks and giant trees clutter the way. Looking ahead you see a giant red slime slowly crawling towards you. You ready your weapon and prepare to fight. Further in the distance you can see a fanged beast guarding the entrance to the cave.'
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: `<img src="img/dragon-win.png" /><div class="centered">You defeat the dragon! YOU WIN THE GAME! &#x1F389</div>;`
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: `<img src="img/dragon-win.png" /><div class="centered">You defeat the dragon! YOU WIN THE GAME! &#x1F389</div>;`
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location, playerName, customText = null) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  // Display the message with the player's name if provided
  if (playerName) {
    text.innerHTML = `<div class="textBox">Welcome, ${playerName}! Prepare to battle the vicious dragon! ${customText ? customText : location.text}</div>`;
  } else {
    text.innerHTML = `<div class="textBox">${customText ? customText : location.text}</div>`;
  }
}



function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerHTML = `<img src="img/empty-coin2.png" />You do not have enough gold to buy health Adventurer!`;
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerHTML = `<div class="textBox">You now have a ${newWeapon}. In your inventory you have: ${inventory}</div>`;
      inventory.push(newWeapon);
    } else {
      text.innerHTML = `<div class="textBox"><img src="img/empty-coin.png" />You do not have enough gold to buy a weapon ${playerName}!</div>`;
    }
  } else {
    text.innerHTML = `<div class="textBox">You already have the most powerful weapon!</div>`;
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerHTML = `<div class="textBox">You sold a ${currentWeapon}. In your inventory you have: ${inventory}</div>`;
  } else {
    text.innerHTML = `<div class="textBox">Don't sell your only weapon ${playerName}!</div>`;
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

// Images for the monsters
const fightingImages = [
  'img/slime2.png',          // Image URL for the slime
  'img/beast.png',          // Image URL for the fanged beast
  'img/dragon.png'          // Image URL for the dragon
];

// Images for the monsters dodge
const fightingMonstersDodge = [ 
  'img/slime-dodge.png',
  'img/beast-dodge.png',
  'img/dragon-dodge.png'          
];

// Images for monster attacks
const fightingMonsterAttack = [
  'img/slime-attack.png',
  'img/beast-attack.png',
  'img/dragon-attack.png'
];

// Images for winning

const winImages = [
  'img/slime-win.png',
  'img/beast-win.png',
  'img/dragon-win.png'
];

// Text effects for the monster fight
const monsterFightText = [
  '<div class="alertText">RAaAaH!!!</div>',
  `<div class="alertText">HISSSS!!!</div>`,
  `<div class="alertText">GRooOWL!!!</div>`
];

function goFight() {
  // Update the location
  update(locations[3]);

  // Get the monster health from the monsters array
  monsterHealth = monsters[fighting].health; // Fix the variable scoping issue

  // Display the monster stats
  monsterStats.style.display = 'block';

  // Set the monster name
  monsterName.innerText = monsters[fighting].name;

  // Set the monster health text
  monsterHealthText.innerText = monsterHealth;

  // Update the text to include the image and monster info
  text.innerHTML = monsterFightText[fighting];
  text.innerHTML += `<div class="textBox"><img src="${fightingImages[fighting]}" alt="Monster Image"><br>`;
  text.innerHTML += "You are fighting a " + monsters[fighting].name + ".<br>";
  text.innerHTML += "Monster Health: " + monsterHealth + "<br>";
  text.innerHTML += "Your Health: " + health + "<br>";
  text.innerHTML += "Your Gold: " + gold + "<br>";
  text.innerHTML += "Your Experience: " + xp + "<br>";
  text.innerHTML += "Choose your action above.</div>";
}

// Updated function to handle victory conditions
function attack() {
  let attackMessage = `<div class="textBox"><img src="${fightingMonsterAttack[fighting]}" />The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}.`;
  let monsterAttackValue = getMonsterAttackValue(monsters[fighting].level);

  // Player's attack
  let playerAttack = weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  monsterHealth -= playerAttack;

  // Check if the monster is defeated
  if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame(); // Call winGame when fighting is 2 (dragon defeated)
    } else {
      defeatMonster(); // Call defeatMonster when monsterHealth is zero
    }
  } else {
    // Monster's attack if not defeated
    health -= monsterAttackValue;

    // Update health and monster health display
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;

    // Construct attack message
    attackMessage += ` You dealt ${playerAttack} damage to the ${monsters[fighting].name}.`;
    attackMessage += ` The ${monsters[fighting].name} dealt ${monsterAttackValue} damage to you.</div>`;

    // Display attack message
    text.innerHTML = attackMessage;
  }

  if (health <= 0) {
    lose();
  }

  // Call saveGame function whenever the game state changes
  saveGame();
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerHTML = `<div class="textBox"><img src="${fightingMonstersDodge[fighting]}" />You dodge the attack from the ${monsters[fighting].name}</div>`;
}

function winGame() {
  update(locations[6]);
  text.innerHTML = `<div class="textBox"><img src="${winImages[fighting]}" />You defeat the ${monsters[fighting].name}! You have saved the town!</div>`;
}


function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
  text.innerHTML = `<div class="textBox"><img src="${winImages[fighting]}" />You defeat the ${monsters[fighting].name}! You have saved the town!</div>`;
}


function lose() {
  update(locations[5]);
  text.innerHTML = `<div class="textBox"><img src="${dieMonsterAttack[fighting]}" />The ${monsters[fighting].name} strikes a final blow! You have died!</div>`;
}

function winGame() {
  update(locations[6]);
  text.innerHTML = `<div class="textBox"><img src="${winImages[fighting]}" />You defeat the ${monsters[fighting].name}! You have saved the town!</div>`;
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerHTML = `<div class="textBox">You picked ${guess}. Here are the random numbers:<br>`;
  for (let i = 0; i < 10; i++) {
    text.innerText += `${numbers[i]}<br>`;
  }
  if (numbers.includes(guess)) {
    text.innerHTML += `Right! You win 20 gold!`;
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerHTML += `Wrong! You lose 10 health!`;
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
