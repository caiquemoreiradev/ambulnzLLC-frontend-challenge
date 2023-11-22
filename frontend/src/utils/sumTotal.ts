import { PizzaProps } from "../@types/pizzaProps";

export function sumTotal(items: PizzaProps[]) {

    let total = 0;

    items.map(item => {

        total += item.price
    })

    return total;
}