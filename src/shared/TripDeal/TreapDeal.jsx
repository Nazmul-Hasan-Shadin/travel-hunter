import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import tripslider from '../../assets/images/trip/car1.png'
import tripslider2 from '../../assets/images/trip/car3.png'
import tripslider3 from '../../assets/images/trip/hotel.png'
import tripslider4 from '../../assets/images/trip/ship.png'
import { FreeMode, Pagination } from 'swiper/modules';
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader';
import './TripDeal.css'
const TreapDeal = () => {
    return (
        <div className='relative bg-[#101010] -z-10 partial-background'>
      <div className='w-[]'>
      <PrimaryHeader 
            heading={'BEST TRIPS'} 
            styleText={'DEALS'}
            text={'Ready to travel the globe? Discovering new places and  activities is simple with our flight booking service.'}
            
            ></PrimaryHeader>
      </div>

            <div className='lg:p-[7.5%]'>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide> 
       <div>
        <img src={tripslider} alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
     <div>
        <img src={tripslider3} alt="" />
     </div>
        </SwiperSlide>
        <SwiperSlide>
     <div>
        <img src={tripslider4} alt="" />
     </div>
        </SwiperSlide>
        <SwiperSlide>
     <div>
        <img src={tripslider} alt="" />
     </div>
        </SwiperSlide>


      </Swiper>
            </div>
        </div>
    );
};

export default TreapDeal;