import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icon
import Cross from "../../icons/Cross";

//Component
import CardC from "../../module/card/CardC";
import SpinnerSearch from "../../../utils/spinner/SpinnerSearch";

//Style
import styles from "./SearchPage.module.scss";

const SearchPage = () => {

    const [value, setValue] = useState("");
    const [productData, setProductData] = useState([]);
    const [isShow, setIsShow] = useState(false);

    const inputHandler = async (e) => {
        setValue(e.target.value)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${value}`);
            const data = await res.json();
            setProductData(data.products)
        } catch (err) {
            console.log("Error in get data #SearchPage")
        }
    }

    const searchHandler = () => {
        if (!value) {
            toast.info("Please enter first")
        } else {
            setIsShow(true)
        }
    }

    const crossHandler = () => {
        setValue("")
        setIsShow(false)
    }
    
    return (
        <div className={ styles.searchPage } >
            <div className={ styles.header } >
                <h1>what do you want ?</h1>

                <div className={ styles.header_2 } >
                    <span onClick={ crossHandler } style={ isShow ? { display:"inline" } : { display:"none" } } > <Cross /> </span>
                    <input type="text" placeholder="search" value={value} onChange={inputHandler} />
                    <button onClick={searchHandler} >Search</button>
                </div>
            </div>

            <div className={ styles.cards } >
                {
                    isShow && productData.length ?
                        <div className={ styles.cards_rich } > 
                            {
                                productData.map(product => (
                                    <CardC productData={product} />
                                ))
                            }
                        </div> :
                        
                       isShow && !productData.length  ?
                        <div className={ styles.cards_empty } >
                            <p> Not found </p>
                        </div> :

                       !isShow && <SpinnerSearch />
                }
            </div>

            <ToastContainer style={{
                padding: "1rem"
            }} />

        </div>
    );
};

export default SearchPage;