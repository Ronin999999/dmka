
let balance = 45189.51;
let bet = 16;
let mines = 3;

function updateDisplay() {
  document.getElementById("balance").innerText = balance.toFixed(2) + " ₽";
  document.getElementById("bet-amount").innerText = bet + " ₽";
  document.getElementById("mines-count").innerText = mines;
}

function changeBet(amount) {
  bet = Math.max(1, bet + amount);
  updateDisplay();
}

function changeMines(amount) {
  mines = Math.max(1, Math.min(24, mines + amount));
  updateDisplay();
}

function editBalance() {
  let newBalance = prompt("Введите баланс:", balance);
  if (!isNaN(newBalance)) {
    balance = parseFloat(newBalance);
    updateDisplay();
  }
}

function playGame() {
  alert("Игра началась!");
}

// Генерация ячеек
const grid = document.getElementById("grid");
for (let i = 0; i < 25; i++) {
  const btn = document.createElement("button");
  btn.onclick = () => btn.style.backgroundColor = "#00ffcc";
  grid.appendChild(btn);
}

updateDisplay();
