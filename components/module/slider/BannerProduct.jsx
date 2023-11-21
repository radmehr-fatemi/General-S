import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SliderProduct({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='banner-product'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          "--swiper-navigation-size": "25px",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          images.map((image, index) => (

            <SwiperSlide key={index}>
              <img src={image} alt="product photo" />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map((image, index) => (

            <SwiperSlide key={index}>
              <img src={image} alt="product photo" />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <style>{`

            .banner-product {
                max-width: 1600px;
                margin: 0 auto;
                position: relative;
                height: 300px;
                width: 100vw;
                padding: 1rem;
              }

              .banner-product .swiper-slide img {
                object-fit: cover;
              }

              .banner-product .swiper {
                width: 100%;
                height: 300px;
                margin-left: auto;
                margin-right: auto;
                padding: 10px 0;
    
              }

              .banner-product .swiper-slide {
                background-size: cover;
                background-position: center;
              }

              .banner-product .mySwiper2 {
                height: 80%;
                width: 100% ;
                text-align: center;
              }

              .banner-product .mySwiper2 img {
                  width: fit-content;
                  margin: auto;
                  height: 100% ;
                  padding: 1rem;
                  background-color: #fff;
                  border-radius: 10px;
                }
                
              .banner-product .mySwiper {
                height: 20%;
                box-sizing: border-box;
                padding: 10px 0;
                text-align:center;
              }
                
              .banner-product .mySwiper img {
                  width: 80px;
                  height: 40px;
                  cursor: pointer;
                }

              .banner-product .mySwiper .swiper-slide {
                width: 25%;
                height: 100%;
                opacity: 0.4;
              }

              .banner-product .mySwiper .swiper-slide-thumb-active {
                opacity: 1;
              }

              @media ( min-width: 768px ) {
                  .banner-product {
                    height: 500px;
                    padding: 1rem 2rem;
                  }

                  .banner-product .mySwiper {
                    width:60%;
                  }

                  .banner-product .mySwiper img {
                  width: 100px;
                }                  
              }

              @media ( min-width: 940px ) {
                .banner-product .mySwiper img {
                  width: 140px;
                }                  
              }

        `}</style>
    </div>
  );
}
