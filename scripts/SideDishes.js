import { setSideId, getSelectedSide } from "./TransientState.js"


const chooseSide = (event) => {
    if (event.target.name === "side"){
    const chosenEnt = parseInt(event.target.id)
        setSideId(chosenEnt)
    }
}


export const sideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
   // const selectedEntree = getSelectedEntree()
    document.addEventListener("change", chooseSide)

    let sideOptionsHTML = "<h2 Side Options</h2>"


    const sideArray = sides.map(
        (side) => {
            if (side) {
                return `<input type = "radio" name = "side" id = "${side.id}" />${side.title}`
            }
        }
    )
   sideOptionsHTML += sideArray.join("")
    sideOptionsHTML += "</select>"

    return sideOptionsHTML
}

