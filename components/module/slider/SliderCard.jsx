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
                slidesPerView={1.7}
                spaceBetween={30}
                breakpoints={{
                    '480': {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    '768': {
                        slidesPerView: 3.5,
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
            .slider_card {
                    max-width: 1600px;
                    margin: 0 auto;
                    width: 100vw;
                    position: relative;
                    padding: .8rem;
                    padding-right: 0;
                    animation: Show .2s;
                    }

                    .slider_card h2 {
                        margin-bottom:.2rem;
                    }

                    .slider_card .swiper {
                    width: 100%;
                    height: 100%;
                    }

                    .slider_card .swiper-slide {
                    height: fit-content !important;
                    }
                `}</style>
        </div>
    );
}
