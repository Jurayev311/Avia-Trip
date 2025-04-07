import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import partners1 from '../../assets/partners1.png';
import partners2 from '../../assets/partners2.png';
import partners3 from '../../assets/partners3.png';
import partners4 from '../../assets/partners4.png';
import partners5 from '../../assets/partners5.png';
import partners6 from '../../assets/partners6.png';

const partners = [
  { image: partners1, name: 'Centrum Air' },
  { image: partners2, name: 'Turkish Airlines' },
  { image: partners3, name: 'Emirates' },
  { image: partners4, name: 'Qatar Airways' },
  { image: partners5, name: 'Uzairways' },
  { image: partners6, name: 'Centrum Air' },
];

const Partners = () => {
  return (
    <section className="py-10 mt-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Hamkorlarimiz</h2>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center h-36">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-24 object-contain mb-2 rounded-xl"
                />
                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
