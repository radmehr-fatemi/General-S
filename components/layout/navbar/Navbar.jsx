import { useContext } from "react";
import Link from "next/link";
import { VscSearch } from "react-icons/vsc";

//Style
import styles from "./Navbar.module.scss";

//Icon
import Cart from "../../icons/Cart";

//Context
import { CartContext } from "../../../context/CartContextProvider";

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div className={styles.navbar} >
            <div className={styles.field1} >
                <Link href={`/`} > <h3>General_S</h3> </Link>
            </div>
            <div className={styles.field2} >

                <span></span> {/* this span is for effect */}

                <Link href={`/categories`} >Categories</Link>
                <Link href={`/search`} > <VscSearch className={styles.searchIcon} /> </Link>
                <Link href={`/cart`} className={styles.cartIcon} >
                    <Cart />
                    <p style={!!state.itemsCounter ? { animation:"CartNumber .2s forwards"  } : { animation:"UnCartNumber .1s forwards" }}
                    
                    > {state.itemsCounter} </p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
