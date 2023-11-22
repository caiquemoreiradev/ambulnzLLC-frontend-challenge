import PizzaBanner from '../../../../assets/pizzaBanner.webp';
import { BannerContainer } from './styles';

export const PromotionBanner = () => {

    return (
        <BannerContainer>

            <h1>the PIZZA you can't FORGET</h1>

            <img src={PizzaBanner} alt="" />

        </BannerContainer>
    )
}