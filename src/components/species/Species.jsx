import React from 'react'
import travel1 from '../../assets/travel1.png'
import travel2 from '../../assets/travel2.png'
import travel3 from '../../assets/travel3.png'
import travel4 from '../../assets/travel4.png'

const SpeciesCard = [
    { title: "O'zbekiston bo'ylab sayohat", paragraph: "O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar", image: travel1 },
    { title: "Turkiya bo'ylab sayohat", paragraph: "Istanbul, Antalya, Kappadokiya - eng mashhur joylar", image: travel2 },
    { title: "Dubai", paragraph: "Zamonaviy arxitektura va hashamatli savdo markazlari", image: travel3 },
    { title: "Yevropa bo'ylab sayohat", paragraph: "Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar", image: travel4 }, 
]

const Species = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='mt-16 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Turlar</h2>
                <p className='text-lg text-[#4B5563] font-medium'>Eng yaxshi sayohat turlari</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4'>
                {SpeciesCard.map((card, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-[0_8px_30px_rgba(255,92,0,0.1)] overflow-hidden hover:scale-105 duration-300">
                        <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{card.paragraph}</p>
                            <button className="px-4 py-2 w-full bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition">
                                Batafsil
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
