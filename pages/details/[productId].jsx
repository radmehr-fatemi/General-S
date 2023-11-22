//Component
import DetailsPage from '../../components/template/details/DetailsPage';
import Spinner from '../../utils/spinner/Spinner';

const Details = ({ product }) => {
    if ( !Object.keys(product).length ) return <Spinner />
    return <DetailsPage productData={product} />
};

export default Details;


export const getServerSideProps = async (context) => {
    try {
        const { productId } = context.params;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL
        }/products/${productId}`);
        const data = await res.json();
        return {
            props: {
                product: data
            }
        }
    } catch (err) {
        console.log("Error in get data #details/[productId]")
        return {
            props: {}
        }
    }
}