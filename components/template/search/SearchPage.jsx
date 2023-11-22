import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icon
import Cross from "../../icons/Cross";

//Component
import CardC from "../../module/card/CardC";
import SpinnerSearch from "../../../utils/spinner/SpinnerSearch";

//Style
import styles from "./SearchPage.module.scss";

const SearchPage = ({ products }) => {

    const [value, setValue] = useState("");
    const router = useRouter();

    const searchHandler = () => {
        if (!value) {
            toast.info("Please enter first")
        } else {
            router.push({
                pathname: "/search",
                query: { q: value }
            })
        }
    }

    const crossHandler = () => {
        setValue("")
        router.push("/search")
    }

    useEffect(() => {
        if ( !value ) setValue(router.query.q)
    }, [])

    return (
        <div className={styles.searchPage} >
            <div className={styles.header} >
                <h1>what do you want ?</h1>

                <div className={styles.header_2} >
                    <span onClick={crossHandler} style={!!value ? { animation:"Show .2s forwards"  } : { animation:"UnShow .2s forwards" }} > <Cross /> </span>
                    <input type="text" placeholder="search" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={searchHandler} >Search</button>
                </div>
            </div>

            <div className={styles.cards} >
                {
                    products.length ?
                        <div className={styles.cards_rich} >
                            {
                                products.map(product => (
                                    <CardC key={product.id} productData={product} />
                                ))
                            }
                        </div> :

                        !products.length ?
                                <SpinnerSearch /> :

                            <div className={styles.cards_empty} >
                                <p> Not found </p>
                            </div> 

                }
            </div>

            <ToastContainer style={{
                padding: "1rem"
            }} />

        </div>
    );
};

export default SearchPage;