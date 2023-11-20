
//Component
import Spinner from "utils/spinner/Spinner";
import HomePage from "../components/template/home/HomePage";

const Home = ({ data }) => {
    const { products } = data;

    if ( !products.length ) return <Spinner />
    return <HomePage products={products} />
};

export default Home;


export const getStaticProps = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/products`);
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    } catch (err) {
        console.log("Error in fetch data #home")
        return {
            props: {}
        }
    }
}