const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

// Quốc gia người chơi
const player = {
  name: "Đế quốc ChatGPT",
  x: Math.random() * 300 + 30,
  y: Math.random() * 400 + 50,
  radius: 15,
  population: Math.floor(Math.random() * 5_000_000) + 1_000_000,
  economy: 100
};

// Quốc gia AI
const enemies = [
  { x: 80, y: 200, radius: 15 },
  { x: 250, y: 300, radius: 15 }
];

// UI
document.getElementById("nationName").textContent = player.name;
document.getElementById("population").textContent = player.population.toLocaleString();
document.getElementById("economy").textContent = player.economy;

// Vẽ bản đồ
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Enemy
  enemies.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  });
}

drawMap();

// Tấn công
function attack() {
  if (player.economy < 20) {
    alert("Không đủ kinh tế để tấn công!");
    return;
  }

  player.economy -= 20;

  if (enemies.length > 0) {
    enemies.pop(); // chiếm 1 nước
    player.population += 500_000;
    alert("Chiếm được một quốc gia!");
  } else {
    alert("Bạn đã thống trị thế giới 🌍");
  }

  updateUI();
  drawMap();
}

function updateUI() {
  document.getElementById("population").textContent =
    player.population.toLocaleString();
  document.getElementById("economy").textContent =
    player.economy;
                }
