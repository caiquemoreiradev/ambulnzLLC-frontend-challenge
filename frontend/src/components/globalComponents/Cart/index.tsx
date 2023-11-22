import { X } from "@phosphor-icons/react"
import { CartPizzaItem } from "../CartPizzaItem"
import { CartContainer } from "./styles"
import { useCart } from "../../../contexts/useCart"
import { sumTotal } from "../../../utils/sumTotal"
import { formatCurrency } from "../../../utils/formatCurrency"

import { NavLink } from 'react-router-dom';

export const Cart = () => {

    const { handleCartOpen, cartItems } = useCart();

    return (
        <CartContainer>

            <div className="cart__content">

                <div className="order__header">
                    <h3>Order</h3>
                    <X onClick={handleCartOpen} size={22} />
                </div>

                <div className="items__content">
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map(item => (
                                <CartPizzaItem
                                    id={item.id}
                                    image={item.image}
                                    price={item.price}
                                    title={item.title}
                                    key={item.id}
                                />
                            ))}
                        </>
                    ) : (
                        <span>
                            There aren't items in your order
                        </span>
                    )}
                </div>

                <div className="order__footer">
                    <p>Total: {formatCurrency(sumTotal(cartItems))}</p>
                    <NavLink to={'/completed-order'}>
                        <button disabled={cartItems.length < 1} className="finish__order">Finish order</button>
                    </NavLink>
                </div>
            </div>
        </CartContainer>
    )
}