import React from 'react'
import { useTranslation } from 'react-i18next'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className='py-16 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mt-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t('aboutTitle')}</h2>
          <p className='text-lg md:text-xl text-[#4B5563] mb-14'>{t('aboutSubtitle')}</p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
          <div className='w-full max-w-[692px] shadow-2xl bg-white p-6 md:p-8 rounded-xl'>
            <h2 className='text-xl md:text-2xl font-bold mb-4'>{t('missionTitle')}</h2>
            <p className='text-[#4B5563]'>{t('missionDescription')}</p>
          </div>
          <div className='w-full max-w-[692px] shadow-2xl bg-white p-6 md:p-8 rounded-xl'>
            <h2 className='text-xl md:text-2xl font-bold mb-4'>{t('missionTitle')}</h2>
            <p className='text-[#4B5563]'>{t('missionDescription')}</p>
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row items-start justify-center mt-20 gap-10 flex-wrap'>
          <div className='flex-1 flex flex-col gap-4 max-w-xl text-base md:text-[17px] text-[#4B5563]'>
            <p>{t('companyDescription1')}</p>
            <p>{t('companyDescription2')}</p>
          </div>

          <div className='flex-1 flex flex-col items-center gap-4 max-w-xl w-full'>
            <img className='rounded-md object-cover w-full h-[200px] md:h-[256px]' src={about1} alt="company" />
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full'>
              <img className='rounded-md object-cover w-full sm:w-[50%] h-[100px] md:h-[106px]' src={about2} alt="company" />
              <img className='rounded-md object-cover w-full sm:w-[50%] h-[100px] md:h-[106px]' src={about3} alt="company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
