import React from 'react';
import logo from '../../assets/logo.png';
import { FaTelegramPlane, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121a29] text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Nemo Avia Trip" className="h-10 mb-4" />
          <p>Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Bog'lanish</h3>
          <p>Tel: <a href="tel:+998951500000" className="hover:underline">+998 95 150 00 00</a></p>
          <p>Email: <a href="mailto:info@nemoavia.uz" className="hover:underline">info@nemoavia.uz</a></p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Ijtimoiy tarmoqlar</h3>
          <div className="flex space-x-4 text-2xl">
            <a target='_blank' href="https://t.me/NemoTC" className="hover:text-gray-400"><FaTelegramPlane /></a>
            <a target='_blank' href="https://www.instagram.com/nemotravel_uz" className="hover:text-gray-400"><FaInstagram /></a>
            <a  href="#" className="hover:text-gray-400"><FaGoogle /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Manzil</h3>
          <p>Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
        </div>
      </div>

      <div className='container mx-auto'>
      <hr className="my-6 border-gray-800" />
      </div>

      <div className="text-center text-sm text-gray-400">
        2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
