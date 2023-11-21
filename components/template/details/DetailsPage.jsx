import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//Component
import SliderProduct from "../../module/slider/BannerProduct";

//Icon
import Cross from "../../icons/Cross";

//Style
import styles from "./DetailsPage.module.scss";

//Icon
import Star from "../../icons/Star";

const DetailsPage = ({ productData }) => {

    const { title, price, discountPercentage: dis, rating, brand, category, description, images, stock } = productData;
    const router = useRouter();
    const [isCross, setIsCross] = useState(false);

    const crossHandler = () => {
        setIsCross(true)
        setTimeout(() => router.back(), 200)
    }

    return (
        <div className={styles.detailsPage} style={isCross ? { animation: "UnShowPage .3s forwards" } : { animation: "ShowPage .3s forward" }} >
            <span onClick={crossHandler} ><Cross /></span>
            <SliderProduct images={images} />

            <div className={ styles.fields } >
                <div className={ styles.field1 } >
                    <h2> {title} </h2>

                    <span>
                        {rating}
                        <Star />
                    </span>
                </div>

                {
                    dis ?
                        <div className={ styles.field2 } >
                            <p> {price} $ </p>

                            <div className={ styles.field2Dis } >
                                <span> {((100 - dis) * (price / 100)).toFixed(2)} $ </span>
                                <span> {dis} % </span>
                            </div>
                        </div> :
                        <div className={ styles.field2 } >
                            <p> {price} </p>
                        </div>
                }

                <div className={ styles.field3 } >
                    <span> Brand: </span>
                    <span> {brand} </span>
                </div>
                <div className={ styles.field4 } >
                    <span> BranCategory: </span>
                    <Link href={`/category/${category}`} > {category} </Link>
                </div>

                <div className={ styles.field5 } >
                    <span>Description:</span>
                    <p> {description} </p>
                </div>

                <div className={ styles.field6 } >
                    <button> Add to Cart </button>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default DetailsPage;