import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PizzaProps } from "../@types/pizzaProps";

interface CartProps {
    children: ReactNode
}

export interface CartContextData {
    cartIsOpen: boolean;
    cartItems: PizzaProps[];
    handleCartOpen: () => void;
    handleAddItem: (item: PizzaProps) => void;
    handleRemoveItem: (id: number) => void;
    handleFinishOrder: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProps) {

    const [ cartIsOpen, setCartIsOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState<PizzaProps[]>([]);

    const handleCartOpen = () => {

        setCartIsOpen(!cartIsOpen);
    }

    const handleFinishOrder = () => {
    
        setCartIsOpen(false);
        setCartItems([]);
    }

    const handleAddItem = (item: PizzaProps) => {

        let itemIndex = cartItems.findIndex(itemOnCart => itemOnCart.id === item.id);

        if(itemIndex > -1) {

            return
        }

        setCartItems([...cartItems, item]);
    }

    const handleRemoveItem = (id: number) => {

        let newArray = [...cartItems];
        let itemIndex = newArray.findIndex(item => item.id === id);

        newArray.splice(itemIndex, 1);

        console.log(newArray)

        setCartItems(newArray);
    }

    useEffect(() => {

        console.log('Items >>>> ', cartItems)
    }, [cartItems])

    return (
        <CartContext.Provider value={{
          cartIsOpen,
          cartItems,
          handleCartOpen,
          handleAddItem,
          handleRemoveItem,
          handleFinishOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {

    const context = useContext(CartContext);

    return context;
}