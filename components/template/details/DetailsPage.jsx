//Component
import SliderProduct from "../../module/slider/BannerProduct";

const DetailsPage = ({ productData }) => {

    const { title, thumbnail: image, price, discountPercentage, rating, id ,brand ,category ,description ,images ,stock } = productData;
    return (
        <div>
            <SliderProduct images={images} />
        </div>
    );
};

export default DetailsPage;