import React from 'react'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'

const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto'>
                <div className='text-center mt-8'>
                    <h2 className='text-4xl font-bold mb-6'>Biz haqimizda</h2>
                    <p className='text-xl text-[#4B5563] mb-14'>Sizning ishonchli sayohat hamkoringiz</p>
                </div>

                <div className='flex items-center justify-center gap-16'>
                    <div className='w-[692px] h-auto shadow-2xl bg-white p-8 rounded-xl'>
                        <h2 className='text-2xl font-bold mb-4'>Bizning vazifamiz</h2>
                        <p className='text-[#4B5563]'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
                    </div>
                    <div className='w-[692px] h-auto shadow-2xl bg-white p-8 rounded-xl'>
                        <h2 className='text-2xl font-bold mb-4'>Bizning vazifamiz</h2>
                        <p className='text-[#4B5563]'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
                    </div>
                </div>

                <div className='flex items-start justify-center mt-20 gap-10 flex-wrap'>
                    <div className='flex-1 flex flex-col gap-4 max-w-xl text-[17px] text-[#4B5563]'>
                        <p>
                            Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.
                        </p>
                        <p>
                            Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.
                        </p>
                    </div>

                    <div className='flex-1 flex flex-col items-center gap-4 max-w-xl'>
                        <img className='rounded-md object-cover w-full max-w-[532px] h-[256px]' src={about1} alt="company image" />
                        <div className='flex items-center justify-center gap-4 w-full'>
                            <img className='rounded-md object-cover w-[258px] h-[106px]' src={about2} alt="company image" />
                            <img className='rounded-md object-cover w-[258px] h-[106px]' src={about3} alt="company image" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About