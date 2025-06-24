import { setEntreeId, getSelectedEntree } from "./TransientState.js"


const chooseEntree = (event) => {
    if (event.target.name === "entree"){
    const chosenEnt = parseInt(event.target.id)
        setEntreeId(chosenEnt)
    }
}


export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
   // const selectedEntree = getSelectedEntree()
    document.addEventListener("change", chooseEntree)

    let entreeOptionsHTML = "<h2 Entree Options</h2>"


    const entArray = entrees.map(
        (entree) => {
            if (entree) {
                return `<input type = "radio" name = "entree" id = "${entree.id}" />${entree.name}`
            }
        }
    )
   entreeOptionsHTML += entArray.join("")
    entreeOptionsHTML += "</select>"

    return entreeOptionsHTML
}