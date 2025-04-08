import React from 'react';
import logo from '../../assets/logo.png';
import { FaTelegramPlane, FaInstagram, FaGoogle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#121a29] text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Nemo Avia Trip" className="h-10 mb-4" />
          <p className="text-sm md:text-base">{t('address')}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">{t('contact')}</h3>
          <p className="text-sm md:text-base">
            {t('tel')}: <a href="tel:+998951500000" className="hover:underline">+998 95 150 00 00</a>
          </p>
          <p className="text-sm md:text-base">
            {t('email')}: <a href="mailto:info@nemoavia.uz" className="hover:underline">info@nemoavia.uz</a>
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">{t('socialMedia')}</h3>
          <div className="flex space-x-4 text-xl md:text-2xl">
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/NemoTC" className="hover:text-gray-400">
              <FaTelegramPlane />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nemotravel_uz" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGoogle />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">{t('location')}</h3>
          <p className="text-sm md:text-[15px]">{t('address')}</p>
        </div>
      </div>

      <div className="container mx-auto">
        <hr className="my-6 border-gray-800" />
      </div>

      <div className="text-center text-xs md:text-sm text-gray-400">
        2025 Nemo Avia Trip. {t('allRightsReserved')}.
      </div>
    </footer>
  );
};

export default Footer;