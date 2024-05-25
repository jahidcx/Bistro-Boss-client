import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-32'>
            <SectionTitle
            subHeading={'From 11.00am to 10.00pm'}
            heading={'order online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={5}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className='text-4xl font-semibold uppercase -mt-14 ml-14 text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className='text-4xl font-semibold uppercase -mt-14 ml-14 text-white'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className='text-4xl font-semibold uppercase -mt-14 ml-14 text-white'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className='text-4xl font-semibold uppercase -mt-14 ml-14 text-white'>Desert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className='text-4xl font-semibold uppercase -mt-14 ml-14 text-white'>Salads</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;