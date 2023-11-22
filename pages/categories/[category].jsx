import CategoryPage from "../../components/template/category/CategoryPage";

const Category = ({ products }) => {
    return <CategoryPage products={products} />
};

export default Category;

export const getServerSideProps = async ({params}) => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/products/category/${params.category}`);
        const data = await res.json();
        return {
            props: {
                products: data.products
            }
        }

    } catch (err) {
        console.log("Error in get data #[category]")
        return {
            props: {}
        }
    }
}