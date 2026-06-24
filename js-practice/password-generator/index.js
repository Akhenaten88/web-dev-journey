const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

let firstPass = document.getElementById("firstPassword")
let secondPass = document.getElementById("secondPassword")
let generatePass = document.getElementById("generatePass")

function generateRandomPassword(length = 15) {
  let password = ""
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  return password
}

generatePass.addEventListener("click", function () {
  firstPass.textContent = generateRandomPassword()
  secondPass.textContent = generateRandomPassword()
})

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied: " + text))
    .catch(() => alert("Failed to copy"))
}

function copyFirstPw() {
  copyToClipboard("firstPassword")
}

function copySecondPw() {
  copyToClipboard("secondPassword")
}