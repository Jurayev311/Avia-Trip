import React from 'react';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {
    const { t } = useTranslation();

    const TEAMINFO = [
        { name: "director" },
        { name: "lawyer" },
        { name: "operator" },
        { name: "administrator" }
    ];

    return (
        <section className='py-16 px-4'>
            <div className="container mx-auto">
                <div className="text-center text-2xl md:text-3xl font-bold">
                    <h2>{t('teamTitle')}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
                    {TEAMINFO.map((item, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[224px] h-[120px] shadow-[0_8px_30px_rgba(255,92,0,0.3)] rounded-xl flex items-center justify-center hover:shadow-[0_8px_30px_rgba(255,92,0,0.5)] cursor-default duration-200 bg-white"
                        >
                            <h2 className="text-xl font-semibold text-black text-center">
                                {t(`team.${item.name}`)} {/* Tarjimalar uchun kalitni to'g'ri chaqirish */}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
