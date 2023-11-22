//Component
import { useRouter } from "next/router";
import Spinner from "../../../utils/spinner/Spinner";

//Icon
import Cross from "../../icons/Cross";

//Style
import styles from "./CategoryPage.module.scss";
import CardC from "../../module/card/CardC";

const CategoryPage = ({ products }) => {

    if ( !products.length ) return <Spinner />
    
    const router = useRouter();
    const {category} = router.query;
    
    return (
        <div className={styles.categoryPage} >
            <div className={styles.header} >
                <span onClick={ () => router.back() } > <Cross /> </span>
                <h1> {category} </h1>
                <p></p>
            </div>

            <div className={styles.cards} >
                {
                    products.map( product => (
                        <CardC key={product.id} productData={product} />
                    ) )
                }
            </div>
        </div>
    );
};

export default CategoryPage;