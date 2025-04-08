import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import travel1 from '../../assets/antalya.png'
import travel2 from '../../assets/Saudiya.png'
import travel3 from '../../assets/travel3.png'
import travel4 from '../../assets/travel2.png'

const FamousCity = () => {
  const { t, i18n } = useTranslation()

  const cities = useMemo(() => [
    {
      image: travel3,
      name: t('cityDubai'),
      description: t('cityDubaiDescription'),
    },
    {
      image: travel2,
      name: t('citySaudiArabia'),
      description: t('citySaudiArabiaDescription'),
    },
    {
      image: travel4,
      name: t('cityIstanbul'),
      description: t('cityIstanbulDescription'),
    },
    {
      image: travel1,
      name: t('cityAntalya'),
      description: t('cityAntalyaDescription'),
    },
  ], [i18n.language, t]) // i18n.language yoki t o'zgarganda qayta hisoblanadi

  return (
    <section className="py-9">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">{t('famousCities')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300">
              <img src={city.image} alt={city.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{city.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-1">{city.description}</p>
                <a href="#support">
                  <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full w-full">
                    {t('moreInfo')}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FamousCity
