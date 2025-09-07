const container = document.querySelector("#container")
const square = document.createElement("div")
square.style.backgroundColor = "rgb(255, 255, 255)"

const sizeInput = document.querySelector("#sizeInput")
const btnGenerate = document.querySelector("#btnGenerate")
const colorCode = document.querySelector("#colorCode")

colorCode.selectedIndex = 0

function colorSquare(e){
    switch(colorCode.selectedIndex){
        case 0: 
            e.target.style.backgroundColor = "black"
            break
        case 1:
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            break
        case 2:
            const values = e.target.style.backgroundColor.match(/\d+(\.\d+)?/g);
            if (values) {
                const r = parseInt(values[0]) - 25.5;
                const g = parseInt(values[1]) - 25.5;
                const b = parseInt(values[2]) - 25.5;
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            }
            break
    }
}

function createGrid(size){
    container.replaceChildren()
    for (let i = 0; i < size * size; i++){
        square.style.padding = (35 / size) + "vh"
        container.appendChild(square.cloneNode(true))
    }
    container.addEventListener("mouseover", colorSquare)
}

function executeGenerate(){
    const input = sizeInput.value
    if (input >= 1 && input <= 100){
        createGrid(input)
    }
}

sizeInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter"){
        executeGenerate()
    }
})

btnGenerate.addEventListener("click", executeGenerate)

createGrid(16)