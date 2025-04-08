import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import uz from '../../assets/uz.png';
import en from '../../assets/en.png';
import ru from '../../assets/ru.png';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(localStorage.getItem('i18nextLng') || 'uz');
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const languages = [
        { code: 'uz', label: "O'zbek", icon: uz },
        { code: 'ru', label: "Русский", icon: ru },
        { code: 'en', label: 'English', icon: en },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const handleSelect = (code) => {
        setSelectedLang(code);
        i18n.changeLanguage(code);
        localStorage.setItem('i18nextLng', code);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black' : 'bg-[#F26522] text-white'}`}>
            <div className='container mx-auto px-4'>
                <nav className='flex items-center justify-between h-[64px]'>
                    <div className='w-[120px] h-[40px]'>
                        <img src={scrolled ? logo2 : logo} alt="logo" className='h-full object-contain' />
                    </div>

                    {/* Desktop menu */}
                    <ul className='hidden md:flex items-center gap-7 text-[14px] font-medium'>
                        <li><a href="#main">{t('home')}</a></li>
                        <li><a href="#about">{t('about')}</a></li>
                        <li><a href="#species">{t('species')}</a></li>
                        <li><a href="#hotels">{t('hotels')}</a></li>
                        <li><a href="#tickets">{t('tickets')}</a></li>
                        <li><a href="#support">{t('support')}</a></li>
                    </ul>

                    <div className='relative hidden md:block' ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md ${scrolled ? 'text-black' : 'text-white'}`}
                        >
                            <span className='font-medium'>{selectedLang.toUpperCase()}</span>
                            <FaChevronDown className={`w-3 h-3 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isOpen && (
                            <div className='absolute right-0 mt-2 bg-white text-black rounded-md shadow-md w-[160px] z-50'>
                                {languages.map(lang => (
                                    <div
                                        key={lang.code}
                                        onClick={() => handleSelect(lang.code)}
                                        className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'
                                    >
                                        <img src={lang.icon} alt={lang.label} className='w-5 h-5' />
                                        <span>{lang.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='md:hidden flex items-center gap-4'>
                        <button onClick={toggleDropdown}>
                            <span className='font-medium'>{selectedLang.toUpperCase()}</span>
                        </button>
                        <button onClick={toggleMobileMenu} className='text-xl'>
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {mobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className='md:hidden bg-white text-black absolute top-[64px] left-0 w-full shadow-md z-40'
                    >
                        <ul className='flex flex-col p-4 space-y-4 text-[15px] font-medium'>
                            <li><a href="#main" onClick={toggleMobileMenu}>{t('home')}</a></li>
                            <li><a href="#about" onClick={toggleMobileMenu}>{t('about')}</a></li>
                            <li><a href="#species" onClick={toggleMobileMenu}>{t('species')}</a></li>
                            <li><a href="#hotels" onClick={toggleMobileMenu}>{t('hotels')}</a></li>
                            <li><a href="#tickets" onClick={toggleMobileMenu}>{t('tickets')}</a></li>
                            <li><a href="#support" onClick={toggleMobileMenu}>{t('support')}</a></li>
                        </ul>
                        <div className='border-t px-4 py-3'>
                            {languages.map(lang => (
                                <div
                                    key={lang.code}
                                    onClick={() => {
                                        handleSelect(lang.code);
                                        toggleMobileMenu();
                                    }}
                                    className='flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded cursor-pointer'
                                >
                                    <img src={lang.icon} alt={lang.label} className='w-5 h-5' />
                                    <span>{lang.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
