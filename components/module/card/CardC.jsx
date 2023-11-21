import { useState, useContext } from "react";
import Link from "next/link";

//Style
import styles from "./CardC.module.scss";

//Icon
import Trash from "../../icons/Trash";

//Context
import { CartContext } from "../../../context/CartContextProvider";

//function
import { findQuantity ,shortHandler } from "../../../helper/functions";




const CardC = ({ productData }) => {

    const { title, thumbnail: image, price, discountPercentage: dis, id, rating } = productData;
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.cardC} >

            <div className={styles.field1} >
                <Link href={`/details/${id}`} >
                    <img src={image} alt="product photo" />
                </Link>

                <div className={styles.field1_title} >
                    <h2> { shortHandler( title ,10 ) }... </h2>
                    <p> {rating} % </p>

                    <div className={styles.field1Buttons} >
                        {
                            findQuantity(state.selectedItems, id) === 0 ?
                                <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })} > Add to Cart </button>
                                : <div className={styles.field1Buttons_2} >
                                    {findQuantity(state.selectedItems, id) === 1 && <button onClick={() => dispatch({ type: "REMOVE", payload: productData })} > <Trash /> </button>}
                                    {findQuantity(state.selectedItems, id) > 1 && <button onClick={() => dispatch({ type: "DECREMENT", payload: productData })} > - </button>}
                                    <span> {findQuantity(state.selectedItems, id)} </span>
                                    {findQuantity(state.selectedItems, id) > 0 && <button onClick={() => dispatch({ type: "INCREMENT", payload: productData })} > + </button>}
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className={styles.field2} >
                <p> {!!dis ? ((100 - dis) * (price / 100)).toFixed(2) : price} $ </p>
                {!!dis && <span> {price} $ </span>}
            </div>
        </div>
    );
};

export default CardC;