import { useContext } from "react";

//Context
import { CartContext } from "../../../context/CartContextProvider";

//Component
import CardC from "../../module/card/CardC";

//Style
import styles from "./CartPage.module.scss";

const CartPage = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={ styles.cart } >
            <div className={ styles.header } >
                <h1>Cart</h1>
            </div>

            <div className={ styles.cards } >
                {
                    state.selectedItems.map(product => (
                        <CardC key={product.id} productData={product} />
                    ))
                }
            </div>

            <div className={ styles.checkout } >
                <div className={ styles.checkout_1 } >
                    <h4>Total:</h4>
                    <p> { state.total } $ </p>
                </div>

                <div className={ styles.checkout_2 } >
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;