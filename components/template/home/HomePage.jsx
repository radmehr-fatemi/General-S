//Style
import styles from "./HomePage.module.scss";

//Component
import Banner from "../../module/slider/Banner";
import SliderCard from "../../module/slider/SliderCard";

const HomePage = ( {data} ) => {

    const { products1 ,products2 ,products3 ,products4 } = data;

    return (
        <div className={ styles.homePage } >
            <Banner />
            <SliderCard products={products1} title="Popular" />
            <SliderCard products={products2} title="Offer" />
            <SliderCard products={products3} title="Discounts" />
            <SliderCard products={products4} title="Special" />
        </div>
    );
};

export default HomePage;