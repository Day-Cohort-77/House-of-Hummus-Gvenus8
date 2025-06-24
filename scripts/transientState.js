const state = {
    entreeId : 0,
    sideId : 0,
    vegetableId: 0
}
//setters
export const setEntreeId = (chosenOwnership) => {
    state.entreeId = chosenOwnership
    console.log(chosenOwnership)
}
export const setSideId = (chosenOwnership) => {
    state.sideId = chosenOwnership
    console.log(chosenOwnership)
}
export const setVegetableId = (chosenOwnership) => {
    state.vegetableId = chosenOwnership
    console.log(chosenOwnership)
}
//getters
export const getSelectedEntree = () =>{
    return state.entreeid
}
export const getSelectedSide = () =>{
    return state.sideId
}
export const getSelectedVeg = () =>{
    return state.vegetableId
}

export const placeOrder = async () => {

    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(state)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent("orderDisplay")
    document.dispatchEvent(customEvent)
}