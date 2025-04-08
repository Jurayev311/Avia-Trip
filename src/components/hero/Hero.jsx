import React from 'react';
import { FaUsers, FaGlobe, FaClock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id='main' className='bg-[#F26522] py-16 md:h-[742px] relative text-white pt-20 md:mt-0'>
      <div className='container mx-auto px-4'>
        <div className='md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] text-center'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-[1000px] mb-4 whitespace-normal md:whitespace-nowrap'>
            {t('title')}
          </h2>

          <p className='mb-10 text-lg md:text-2xl font-normal'>{t('subtitle')}</p>

          <div className="flex justify-center">
            <div className="w-full max-w-[809px] bg-white rounded-[55px] shadow-md px-6 py-5">
              <div className="flex flex-wrap justify-center gap-6 md:gap-[44px] items-center">
                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#F26522] p-2 rounded-full text-xl">
                    <FaUsers />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{t('clients')}</p>
                    <p className="font-semibold text-lg text-black">45000+</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#F26522] p-2 rounded-full text-xl">
                    <FaGlobe />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{t('countries')}</p>
                    <p className="font-semibold text-lg text-black">30+</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#F26522] p-2 rounded-full text-xl">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{t('experience')}</p>
                    <p className="font-semibold text-lg text-black">5 + {t('years')}</p>
                  </div>
                </div>

                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <a
                    href="#support"
                    className="text-white text-sm md:text-md rounded-3xl py-2 px-5 bg-[#F26522] hover:bg-[#E85A1F] inline-block"
                  >
                    {t('moreInfo')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
