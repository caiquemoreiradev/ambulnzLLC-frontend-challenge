import { Cart } from "../../components/globalComponents/Cart"
import { Header } from "../../components/globalComponents/Header"
import { PizzaItem } from "../../components/pageComponents/Home/PizzaItem"
import { PromotionBanner } from "../../components/pageComponents/Home/PromotionBanner"
import { useCart } from "../../contexts/useCart"
import { useLoadPizzas } from "../../contexts/useData"
import { Container } from "./styles"

export const Home = () => {

    const { cartIsOpen } = useCart();
    const { data } = useLoadPizzas();

    return (
        <Container>

            <Header />

            <PromotionBanner />

            <div className="pizzas__grid">
                {data?.data.map(item => (
                    <PizzaItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>

            {cartIsOpen && <Cart />}
        </Container>
    )
}