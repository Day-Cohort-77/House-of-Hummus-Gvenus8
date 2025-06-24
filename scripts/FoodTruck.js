
import { entreeOptions } from "./Entrees.js"
import { sideOptions } from "./SideDishes.js"
import { vegOptions } from "./Vegetables.js"
import { button } from "./button.js"
import { placedOrders } from "./orders.js"

export const FoodTruck = async () => {
    //const salesHTML = Sales()
const entreeOptionsHTML = await entreeOptions()
const sideOptionsHTML = await sideOptions()
const vegOptionsHTML = await vegOptions()
const buttonHTML = await button ()
const ordersHTML = await placedOrders()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
   <article id="flexbox">
            <section class="choices__meal options">
                <h2>Entrees</h2>
                ${entreeOptionsHTML}
            </section> 
              <section class="choices__side options">
                <h2>Sides</h2>
                ${sideOptionsHTML}
            </section>
             <section class="choices__veg options">
                <h2>Sides</h2>
                ${vegOptionsHTML}
            </section>
        </article>
        <article>
           ${buttonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${ordersHTML}
        </article>

    `
}
