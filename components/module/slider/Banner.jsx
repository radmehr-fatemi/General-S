// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider() {
  return (
    <div className="banner" >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": ".5",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-button-next-color": "#fff",
          "--swiper-navigation-size": "25px",

        }}
      >
        <SwiperSlide> <div className='slider_div'>
          <p> Best Products </p>
           <Image src="/images/banner/banner1.jpg" width={2000} height={1600} />
        </div></SwiperSlide>
        <SwiperSlide> <div className='slider_div'>
          <p> Buy anythings </p>
           <Image src="/images/banner/banner2.jpg" width={2000} height={1600} />
        </div></SwiperSlide>
        <SwiperSlide> <div className='slider_div'>
          <p> Tour Store </p>
           <Image src="/images/banner/banner3.jpg" width={2000} height={1600} />
        </div></SwiperSlide>
        <SwiperSlide> <div className='slider_div'>
          <p> General Store </p>
           <Image src="/images/banner/banner4.jpg" width={2000} height={1600} />
        </div></SwiperSlide>
      </Swiper>

      <style>{`

          .banner {
            max-width:1600px;
            margin:0 auto;
            position: relative;
            width: 100vw;
            animation: Show .3s;
          }

          .banner img {
                width: 100%;
                height: 200px;
            }

            .slider_div {
              width:100%;
              height:fit-content;
              position:relative;
            }

            .slider_div p {
              position:absolute;
              top:0;
              color:#fff;
              width:100%;
              height:100%;
              display:flex;
              justify-content:center;
              align-items:center;
              font-size: 2rem;
              backdrop-filter: blur(2px);
              text-shadow: 0 0 12px #111;
            }
            
            .banner .swiper {
            width: 100%;
            height: 100%;
          }

          .banner .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .banner .swiper-button-next,
          .banner .swiper-button-prev {
              right:10px;
              padding: 20px;
              color: #fff !important;
          }

          @media ( min-width: 768px ) {
              .banner img {
                height: 400px;
              }
          }

        `}</style>
    </div>
  );
}
