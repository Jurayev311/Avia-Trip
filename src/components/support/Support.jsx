import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Support = () => {

    const [loading, setLoading] = useState(false);

    const SendMessage = (e) => {
        e.preventDefault()
        setLoading(true)

        const token = "7749972902:AAH1K7jxCUEhh1ZLNSn-nDx4pgJLckawIxk"
        const chat_id = 6324560189
        const url = `https://api.telegram.org/bot${token}/SendMessage`

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const title = document.getElementById("title").value
        const message = document.getElementById("message").value
        
        const text = `
        Ism: ${name}
        email: ${email}
        Tel: ${phone}
        Nomi: ${title}
        Xabar: ${message}
        `

        axios({
            url: url,
            method: 'POST',
            data: {
                'chat_id': chat_id,
                'text': text
            }
        })
        .then((res) => {
            document.getElementById('support-form').reset()
            toast.success("Xabaringiz yuborildi!")
        })
        .catch((error) => {
            console.log(error)
            toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.")
        })
        .finally(() => setLoading(false))

    }

    return (
        <section className='bg-[#f3f4f6] py-12'>
            <div className='container mx-auto px-4'>
            <Toaster position="top-center" />
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold mb-4'>Biz bilan bog'lanish</h2>
                    <p className='text-xl text-[#4B5563]'>Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-white p-6 rounded-xl shadow-md'>
                        <form onSubmit={SendMessage} id='support-form' className='space-y-4'>
                            <div className='mb-2 text-[#4B5563] font-medium'><label htmlFor="">Ismingiz</label></div>
                            <input id='name' type='text' placeholder='Ismingiz' className='w-full p-3 border border-gray-300 rounded' required/>
                            <div className='mb-2 text-[#4B5563] font-medium'><label htmlFor="">Email manzilingiz</label></div>
                            <input id='email' type='email' placeholder='Email manzilingiz' className='w-full p-3 border border-gray-300 rounded' required/>
                            <div className='mb-2 text-[#4B5563] font-medium'><label htmlFor="">Telefon raqamingiz</label></div>
                            <input id='phone' type='tel' placeholder='Telefon raqamingiz' className='w-full p-3 border border-gray-300 rounded' required/>
                            <div className='mb-2 text-[#4B5563] font-medium'><label htmlFor="">Mavzu</label></div>
                            <input id='title' type='text' placeholder='Mavzu' className='w-full p-3 border border-gray-300 rounded' required/>
                            <div className='mb-2 text-[#4B5563] font-medium'><label htmlFor="">Xabaringiz</label></div>
                            <textarea id='message' placeholder='Xabaringiz' rows='5' className='w-full resize-none p-3 border border-gray-300 rounded' required></textarea>
                            <button disabled={loading} type='submit' className={`w-full bg-[#2C2C2C] hover:bg-[#262626] cursor-pointer active:scale-95 duration-300 text-white py-2.5 rounded font-semibold ${loading ? 'opacity-80' : ''}`}>
                                {
                                    loading ? 'Yuborilmoqda...' : "Yuborish"
                                }
                            </button>
                        </form>
                    </div>

                    <div className='space-y-6'>
                        <div className='bg-white p-6 rounded-xl shadow-md leading-8'>
                            <h3 className='text-xl font-semibold mb-4'>Aloqa ma'lumotlari</h3>
                            <p className='text-[#4B5563]'><strong className='font-medium text-[#4B5563]'>Manzil:</strong> Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
                            <p className='text-[#4B5563]'><strong className='font-medium text-[#4B5563]'>Tel:</strong> +998 95 150 00 00</p>
                            <p className='text-[#4B5563]'><strong className='font-medium text-[#4B5563]'>Email:</strong> info@nemoavia.uz</p>
                            <p className='text-[#4B5563]'><strong className='font-medium text-[#4B5563]'>Ish vaqti:</strong> Du-Sha 24 soat</p>
                        </div>
                        <div className='bg-white p-12 rounded-xl shadow-md overflow-hidden'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7059642938635!2d69.27738407584125!3d41.2934247013647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c4d5f1812d%3A0x5fc08a5a690bfbcf!2sMuqimiy%2044%2C%20Tashkent!5e0!3m2!1sru!2s!4v1712485422201!5m2!1sru!2s"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Manzil"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
