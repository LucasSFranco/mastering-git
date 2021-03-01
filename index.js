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

let incrementTimeout = null
let incrementInterval = null
incrementButton.addEventListener("mousedown", () => {
  incrementTimeout = setTimeout(() => {
    incrementInterval = setInterval(increment, 100) 
  }, 250)
})

incrementButton.addEventListener("mouseup", () => {
  clearTimeout(incrementTimeout)
  clearInterval(incrementInterval)
})
incrementButton.addEventListener("mouseout", () => {
  clearTimeout(incrementTimeout)
  clearInterval(incrementInterval)
})

let decrementTimeout = null
let decrementInterval = null
decrementButton.addEventListener("mousedown", () => {
  decrementTimeout = setTimeout(() => {
    decrementInterval = setInterval(decrement, 100) 
  }, 250)
})

decrementButton.addEventListener("mouseup", () => {
  clearTimeout(decrementTimeout)
  clearInterval(decrementInterval)
})
decrementButton.addEventListener("mouseout", () => {
  clearTimeout(decrementTimeout)
  clearInterval(decrementInterval)
})

function update() {
  viewer.textContent = counter
}

update()
