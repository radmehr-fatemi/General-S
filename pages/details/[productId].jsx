//Component
import DetailsPage from '../../components/template/details/DetailsPage';
import Spinner from '../../utils/spinner/Spinner';

const Details = ({ product }) => {
    if ( !Object.keys(product).length ) return <Spinner />
    return <DetailsPage productData={product} />
};

export default Details;

export const getStaticPaths = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/products`);
        const data = await res.json();
        const items = data.products.slice(0, 10);

        const paths = items.map(item => ({ params: { productId: item.id.toString() } }));
        return {
            paths,
            fallback: "blocking" || true
        }
    } catch (err) {
        console.log("Error in paths data #details/[productId]")
        return {
            paths: [{ params: { productId:'1' } }]
        }
    }
}

export const getStaticProps = async (context) => {
    try {
        const { productId } = context.params;
        const res = await fetch(`${process.env.BASE_URL}/products/${productId}`);
        const data = await res.json();
        return {
            props: {
                product: data
            },
            revalidate: 1 * 60 * 60
        }
    } catch (err) {
        console.log("Error in get data #details/[productId]")
        return {
            props: {}
        }
    }
}