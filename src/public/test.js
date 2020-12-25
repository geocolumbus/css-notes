const log = item => {
  const logContainer = document.getElementById("log-container")
  const pre = document.createElement("pre")
  pre.innerHTML = item
  logContainer.append(pre)
}

const getRandomBox = () => {
  const rand = num => {
    return Math.floor(Math.random() * num)
  }

  const randHex = () => {
    const hex = rand(256).toString(16)
    return hex.length < 2 ? `0${hex}` : hex
  }

  const x = rand(80) + 10
  const y = rand(50) + 10

  const box = document.createElement("div")
  box.className = "box"
  box.style.width = x
  box.style.height = y
  box.style.backgroundColor = `#${randHex()}${randHex()}${randHex()}`
  return box
}

const content = document.getElementById("content")
const flex = document.createElement("div")
flex.className = "flex"
content.append(flex)

const it = [...Array(50).keys()]
it.forEach(item=>{
  flex.append(getRandomBox())
})
