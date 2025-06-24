import { setVegetableId, getSelectedVeg } from "./TransientState.js"


const chooseVeg = (event) => {
    if (event.target.name === "vegetable"){
    const chosenEnt = parseInt(event.target.id)
        setVegetableId(chosenEnt)
    }
}


export const vegOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()
   // const selectedEntree = getSelectedEntree()
    document.addEventListener("change", chooseVeg)

    let vegOptionsHTML = "<h2 Vegetable Options</h2>"


    const vegArray = vegetables.map(
        (veg) => {
            if (veg) {
                return `<input type = "radio" name = "vegetable" id = "${veg.id}" />${veg.type}`
            }
        }
    )
   vegOptionsHTML += vegArray.join("")
    vegOptionsHTML += "</select>"

    return vegOptionsHTML
}

