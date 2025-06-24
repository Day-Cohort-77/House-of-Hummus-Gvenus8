import { placeOrder } from "./TransientState.js"


const handleSubmission = (clickEvent) => {
    if ( clickEvent.target.id === "submission-button") {
        console.log("button clicked!")
        const plaOrd = placeOrder()
        return plaOrd
        
    }
}

export const button = () => {
    document.addEventListener("click", handleSubmission)

    return `<button id = "submission-button">Place Order</button>`
}