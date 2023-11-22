//Component
import SearchPage from "../../components/template/search/SearchPage";
import Spinner from "../../utils/spinner/Spinner";

const Search = ({ products }) => {
    
    return <SearchPage products={products} />
};

export default Search;

    export const getServerSideProps = async (context) => {

    const { query: { q } } = context;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${q}`);
        const data = await res.json();
        return {
            props: {
                products: data.products
            }
        }
    } catch (err) {
        console.log("Error in get data #Search")
        return {
            props: {}
        }
    }

}