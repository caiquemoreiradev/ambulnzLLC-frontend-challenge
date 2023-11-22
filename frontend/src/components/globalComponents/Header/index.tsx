import { Basket } from '@phosphor-icons/react';

import { HeaderContainer } from "./styles";

import PizzaLogo from '../../../assets/pizza.png';
import { useCart } from '../../../contexts/useCart';

export const Header = () => {

    const { handleCartOpen, cartItems } = useCart();

    return (
        <HeaderContainer>

            <div className='logo'>
                <img src={PizzaLogo} alt="pizza logo" />
            </div>

            <div className='order__basket'>
                <Basket onClick={handleCartOpen} size={32} />
                
                {cartItems.length > 0 && <div className='quantity__order' />}
            </div>

        </HeaderContainer>
    )
}