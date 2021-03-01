const incrementButton = document.querySelector(".increment")
const decrementButton = document.querySelector(".decrement")
const viewer = document.querySelector(".viewer")

let counter = 0 

function increment() {
  counter++
  update()
}

function decrement() {
  counter--
  update()
}

incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)

function update() {
  viewer.textContent = counter
}

update()
