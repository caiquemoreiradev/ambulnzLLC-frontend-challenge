import { Plus } from "@phosphor-icons/react"
import { PizzaItemContainer } from "./styles"
import { PizzaProps } from "../../../../@types/pizzaProps"
import { useCart } from "../../../../contexts/useCart"
import { formatCurrency } from "../../../../utils/formatCurrency"

export const PizzaItem = ({ id, title, price, image }: PizzaProps) => {

    const { handleAddItem } = useCart();

    return (
        <PizzaItemContainer>

            <img
                src={image}
                alt={title}
            />

            <div className="add__button">
                <button
                    onClick={() => handleAddItem({ id, title, price, image })}>
                    <Plus size={22} color="#fafafa" />
                </button>
            </div>

            <div className="item__content">
                <p>{title}</p>

                <span>{formatCurrency(price)}</span>

                <ul>
                    <li>Ingredient 01</li>
                    <li>Ingredient 02</li>
                    <li>Ingredient 03</li>
                </ul>
            </div>
        </PizzaItemContainer>
    )
}