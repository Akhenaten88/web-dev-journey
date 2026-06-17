let homeScore = 0
let guestScore = 0

function addScore(team, points) {
  if (team === 'home') {
    homeScore += points
    document.getElementById('home-score').textContent = homeScore
  } else {
    guestScore += points
    document.getElementById('guest-score').textContent = guestScore
  }
  updateWinner()
}

function updateWinner() {
  const el = document.getElementById('winner')
  if (homeScore > guestScore) {
    el.textContent = '🏀 Home is winning!'
  } else if (guestScore > homeScore) {
    el.textContent = '🏀 Guest is winning!'
  } else if (homeScore === 0 && guestScore === 0) {
    el.textContent = ''
  } else {
    el.textContent = "🤝 It's a tie!"
  }
}

function resetGame() {
  homeScore = 0
  guestScore = 0
  document.getElementById('home-score').textContent = '0'
  document.getElementById('guest-score').textContent = '0'
  document.getElementById('winner').textContent = ''
}