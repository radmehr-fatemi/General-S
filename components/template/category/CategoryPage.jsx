import { useRouter } from "next/router";

//Component
import Spinner from "../../../utils/spinner/Spinner";
import CardC from "../../module/card/CardC";

//Icon
import Cross from "../../icons/Cross";

//Style
import styles from "./CategoryPage.module.scss";

const CategoryPage = ({ products }) => {
    
    const router = useRouter();
    const {category} = router.query;

    if ( !products.length ) return <Spinner />
    
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