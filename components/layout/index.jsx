//Style
import styles from "./Layout.module.scss";

//Component
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div className={ styles.layout } >
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;