 export const  placedOrders = async () => {
        const fetchResponse = await fetch("http://localhost:8088/purchases?_expand=side&_expand=entree&_expand=vegetable")
        const orders = await fetchResponse.json()
      
        let orderOptionsHTML = "<article>"
        const orderArray = orders.map(
            (ord) => {
                const ordPrice = ord.entree.price + ord.vegetable.price + ord.side.price
                
                  return    `<div>Order #${ord.id} cost ${ordPrice}</div>`
   

        })
   orderOptionsHTML += orderArray.join("")
    orderOptionsHTML += "</article>"

    return orderOptionsHTML
}