import Link from "next/link";

//Style
import style from "./CardS.module.scss";

//functions
import { shortHandler } from "helper/functions";

//Icon
import Star from "components/icons/Star";

const CardS = ({ product }) => {

    const { title, thumbnail: image, price, discountPercentage, rating, id } = product;

    return (
        <div className={style.cardS} >
            <Link href={`/details/${id}`} >
                <img src={image} alt="product photo" />

                <div className={style.field1} >
                    <h4> {shortHandler(title, 12)}... </h4>
                    <span>
                        {rating}
                        <Star />
                    </span>
                </div>

                <div className={style.field2} >
                    <p> {discountPercentage ? ((100 - discountPercentage) * (price / 100)).toFixed(0) : price} $ </p>
                    <span> {price} $ </span>

                </div>

                {
                    discountPercentage &&
                    <div className={style.discount} >
                        {discountPercentage} %
                    </div>
                }
            </Link>
        </div>
    );
};

export default CardS;