//Component
import Spinner from "../utils/spinner/Spinner";
import HomePage from "../components/template/home/HomePage";

const Home = ( props ) => {
    if ( !Object.keys(props).length ) return <Spinner />
    return <HomePage data={props} />
};

export default Home;


export const getStaticProps = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/products`);

        const data = await res.json();

        return {
            props: {
                products1: data.products ,
                products2: data.products.slice(10),
                products3: data.products.slice(16),
                products4: data.products.slice(20),
            },
            revalidate: 1 * 60 * 60
        }
    } catch (err) {
        console.log("Error in fetch data #home")
        return {
            props: {}
        }
    }
}