import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Component
import CardS from "../card/CardS";

export default function SliderCard({ products, title }) {
    return (
        <div className='slider_card'>
            <h2> {title} :</h2>
            <Swiper
                slidesPerView={1.6}
                spaceBetween={30}
                breakpoints={{
                    '480': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    '768': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    '960': {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    '1200': {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    products.map(product => (

                        <SwiperSlide key={product.id}>
                            <CardS product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <style>{`
          
                `}</style>
        </div>
    );
}
