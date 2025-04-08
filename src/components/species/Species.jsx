import React from 'react'
import { useTranslation } from 'react-i18next'; 
import travel1 from '../../assets/travel1.png'
import travel2 from '../../assets/travel2.png'
import travel3 from '../../assets/travel3.png'
import travel4 from '../../assets/travel4.png'

const SpeciesCard = [
    { title: "uzspecies.travel1", paragraph: "uzspecies.travel1_desc", image: travel1 },
    { title: "uzspecies.travel2", paragraph: "uzspecies.travel2_desc", image: travel2 },
    { title: "uzspecies.travel3", paragraph: "uzspecies.travel3_desc", image: travel3 },
    { title: "uzspecies.travel4", paragraph: "uzspecies.travel4_desc", image: travel4 }, 
]

const Species = () => {
  const { t } = useTranslation(); 

  return (
    <section id='species'>
        <div className='container mx-auto'>
            <div className='mt-16 text-center'>
                <h2 className='text-3xl font-bold mb-4'>{t('species')}</h2> 
                <p className='text-lg text-[#4B5563] font-medium'>{t('moreInfo')}</p> 
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4'>
                {SpeciesCard.map((card, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-[0_8px_30px_rgba(255,92,0,0.1)] overflow-hidden hover:scale-105 duration-300">
                        <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{t(card.title)}</h3>
                            <p className="text-gray-600 text-sm mb-4">{t(card.paragraph)}</p> 
                            <button className="px-4 py-1.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                                <a href="#support">{t('moreInfo')}</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Species
