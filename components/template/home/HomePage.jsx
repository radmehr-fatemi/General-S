//Style
import styles from "./HomePage.module.scss";

//Component
import Banner from "components/module/slider/Banner";

const HomePage = ({products}) => {
    return (
        <div className={ styles.homePage } >
            <Banner />
        </div>
    );
};

export default HomePage;