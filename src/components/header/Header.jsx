import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import uz from '../../assets/uz.png';
import en from '../../assets/en.png';
import ru from '../../assets/ru.png';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [selectedLang, setSelectedLang] = useState('uz');
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'uz', label: "O'zbek", icon: uz },
        { code: 'ru', label: "Русский", icon: ru },
        { code: 'en', label: 'English', icon: en },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (code) => {
        setSelectedLang(code);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black' : 'bg-[#F26522] text-white'}`}>
            <div className='container mx-auto'>
                <nav className='flex items-center justify-between h-[64px]'>

                    <div className='w-[120px] h-[40px]'>
                        <img src={scrolled ? logo2 : logo} alt="logo" className='h-full object-contain' />
                    </div>

                    <ul className='flex items-center gap-7 text-[14px] font-medium'>
                        <li><a href="#"><span>Asosiy</span></a></li>
                        <li><a href="#"><span>Biz haqimizda</span></a></li>
                        <li><a href="#"><span>Turlar</span></a></li>
                        <li><a href="#"><span>Mehmonxonalar</span></a></li>
                        <li><a href="#"><span>Aviachiptalar</span></a></li>
                        <li><a href="#"><span>Aloqa</span></a></li>
                    </ul>

                    <div className='relative' ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className={`flex items-center gap-2 bg-transparent px-4 py-2 rounded-md ${scrolled ? 'text-black' : 'text-white'}`}
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
                </nav>
            </div>
        </header>
    );
};

export default Header;
