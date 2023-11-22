import { useRouter } from "next/router";
import Link from "next/link";

//Icon
import Cross from "../../icons/Cross";

//Style
import styles from "./CategoriesPage.module.scss";

const CategoriesPage = ({ categories }) => {

    const router = useRouter();
    
    return (
        <div className={styles.categoriesPage} >
            <div className={styles.header} >
                <span onClick={ () => router.back() } > <Cross /> </span>
                <h1>Categories</h1>
                <p></p>
            </div>

            <div className={styles.list} >
                {
                    categories.map((item, index) => (
                        <Link href={`/categories/${item}`} key={index} > {item} </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesPage;