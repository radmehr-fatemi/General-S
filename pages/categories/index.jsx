//Component
import CategoriesPage from "../../components/template/categories/CategoriesPage";
import Spinner from "../../utils/spinner/Spinner";

const Categories = ({ categories }) => {
    if ( !categories.length ) return <Spinner />
    return <CategoriesPage categories={categories} />
};

export default Categories;

export const getStaticProps = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`);
        const data = await res.json();

        return {
            props: {
                categories: data
            },
            revalidate: 1 * 60 * 60
        }
    } catch (err) {
        console.log("Error in fetch data #Categories")
        return {
            props: {}
        }
    }

}