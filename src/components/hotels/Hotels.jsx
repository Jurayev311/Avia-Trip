import React from 'react';
import hotel1 from '../../assets/hotel1.png';
import hotel2 from '../../assets/hotel2.png';
import hotel3 from '../../assets/hotel3.png';

const Hotels = () => {
  const hotelData = [
    {
      image: hotel1,
      name: 'Hyatt Regency Tashkent',
      address: "Navoi ko'chasi 1-uy, Toshkent",
      description: 'Zamonaviy mehmonxona markaz markazida',
    },
    {
      image: hotel2,
      name: 'Hilton Tashkent City',
      address: "Islom Karimov ko'chasi 2-uy, Toshkent",
      description: 'Biznes mehmonxona shahar markazida',
    },
    {
      image: hotel3,
      name: 'City Palace Hotel',
      address: "Amir Temur ko'chasi 15-uy, Toshkent",
      description: 'Qulay mehmonxona diqqatga sazovor joylar yaqinida',
    },
  ];

  return (
    <section id='hotels' className='mt-12'>
      <div className="container mx-auto px-4">
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Mehmonxonalar</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelData.map((hotel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-1">{hotel.address}</p>
                <p className="text-gray-700 mb-4 line-clamp-1">{hotel.description}</p>
                <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition">
                  <a href="#support">Batafsil ma'lumot</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
