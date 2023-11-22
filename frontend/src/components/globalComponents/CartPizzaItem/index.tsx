import { Trash, X } from "@phosphor-icons/react"
import { PizzaProps } from "../../../@types/pizzaProps"
import { ItemContainer } from "./styles"
import { useCart } from "../../../contexts/useCart"
import { formatCurrency } from "../../../utils/formatCurrency"

export const CartPizzaItem = ({ id, image, price, title }: PizzaProps) => {

    const { handleRemoveItem } = useCart();

    return (
        <ItemContainer>

            <div className="left">
                <img
                    src={image}
                    alt={title}
                />

                <div className="pizza__info">
                    <p>{title}</p>
                    <span>Preço: {formatCurrency(price)}</span>
                </div>
            </div>

            <Trash
                size={32}
                onClick={() => handleRemoveItem(id)}
            />
        </ItemContainer>
    )
}