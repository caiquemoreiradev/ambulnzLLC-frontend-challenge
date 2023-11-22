import { NavLink } from 'react-router-dom';

import ConfirmOrder from '../../assets/checked.png';

import { ConfirmedOrderContainer } from './styles';
import { useCart } from '../../contexts/useCart';
import { useEffect } from 'react';

export const CompletedOrder = () => {

    const { handleFinishOrder } = useCart();

    useEffect(() => {

        handleFinishOrder();
    }, [])

    return (
        <ConfirmedOrderContainer>

            <section>
                <img src={ConfirmOrder} alt="order completed image" />

                <h1>Order completed</h1>

                <p>we receive your order and already start to prepare for you</p>

                <span>the delivery shoud arrive in <strong>45 minutes</strong></span>


                <NavLink to={'/'}>
                    <button>
                        go back to home
                    </button>
                </NavLink>
            </section>
        </ConfirmedOrderContainer>
    )
}