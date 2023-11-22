import { useRouter } from "next/router";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Context
import { CartContext } from "../../../context/CartContextProvider";

//Component
import CardC from "../../module/card/CardC";

//Style
import styles from "./CartPage.module.scss";

//Icon
import Trash2 from "../../icons/Trash2";

const CartPage = () => {

    const { state, dispatch } = useContext(CartContext);
    const router = useRouter();

    if ( state.checkout ) {
        toast.success("Payment was successfully");
        setTimeout( () => router.reload() ,1000)
    }

    const clearHandler = () => {
        if ( !state.itemsCounter ) return
        dispatch({ type: "CLEAR" })
        router.reload()
    }

    return (
        <div className={styles.cart} >
            <div className={styles.header} >
                <div className={styles.header_h1} >
                    <span onClick={ clearHandler } > <Trash2 /> </span>
                    <h1>Cart</h1>
                    <p></p>
                </div>

                <div className={styles.header_fields} >
                    <div className={styles.header_field1} >
                        <p>Total Discounts:</p>
                        <span> {state.totalDiscount?.toFixed(2)} $ </span>
                    </div>
                    <div className={styles.header_field2} >
                        <p>Total Items:</p>
                        <span> {state.itemsCounter} </span>
                    </div>
                </div>
            </div>

            <div className={styles.cards} >
                {
                !state.itemsCounter && !state.checkout ?
                <div className={styles.cards_Empty}>
                    <p> Would you like buy? </p>
                    <Link href="/" >Let`s go </Link>
                </div>:

                state.checkout &&
                <div className={styles.cards_Empty} >
                    <p> Would you like buy? </p>
                    <Link href="/" >Let`s go </Link>
                </div>


                }
                {
                    state.selectedItems.map(product => (
                        <CardC key={product.id} productData={product} />
                    ))
                }
            </div>

            {
                !state.itemsCounter && !state.checkout ?
                    <div className={styles.checkout} >
                        <p> You haven`t choice anythings </p>
                    </div> :

                    state.checkout ?
                         <div className={styles.checkout} > 
                         <p> Payment was successfully </p>
                          </div> :

                        <div className={styles.checkout} >
                            <div className={styles.checkout_1} >
                                <h4>Total:</h4>
                                <p> {state.finalTotal?.toFixed(2)} $ </p>
                            </div>

                            <div className={styles.checkout_2} >
                                <button onClick={() => dispatch({ type: "CHECKOUT" })} >Checkout</button>
                            </div>
                        </div>
            }
            <ToastContainer style={{
                padding:"1rem"
            }} />
        </div>
    );
};

export default CartPage;