import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Tickets = () => {
  const [isReturn, setReturn] = useState(false);
  const { t } = useTranslation();

  const fromRef = useRef();
  const toRef = useRef();
  const departureRef = useRef();
  const returnRef = useRef();
  const passengersRef = useRef();

  const xatolik = () => {
    toast.error(t('error'));
  };

  const sendTicketInfo = (e) => {
    e.preventDefault();

    const from = fromRef.current.value;
    const to = toRef.current.value;
    const departure = departureRef.current.value;
    const returnDate = isReturn ? returnRef.current.value : '';
    const passengers = passengersRef.current.value;

    if (!from || !to || !departure || !passengers || (isReturn && !returnDate)) {
      toast.error(t('error')); 
      return;
    }

    const text = `
      Bilet ma'lumotlari:
      Kelish joyi: ${from}
      Ketish joyi: ${to}
      Jo'nash sanasi: ${departure}
      Qaytish sanasi: ${returnDate}
      Yo'lovchilar soni: ${passengers}
    `;

    const token = "7749972902:AAH1K7jxCUEhh1ZLNSn-nDx4pgJLckawIxk";
    const chat_id = 6324560189;
    const url = `https://api.telegram.org/bot${token}/SendMessage`;

    axios({
      url: url,
      method: 'POST',
      data: {
        'chat_id': chat_id,
        'text': text
      }
    })
      .then((res) => {
        toast.success(t('successMessage'));
        fromRef.current.value = '';
        toRef.current.value = '';
        departureRef.current.value = '';
        if (isReturn) returnRef.current.value = '';
        passengersRef.current.value = 1;
      })
      .catch((error) => {
        console.error("Error response: ", error.response);
        toast.error(t('errorMessage'));
      });
  };

  return (
    <section id='tickets' className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('heading')}</h2>

        <form onSubmit={sendTicketInfo}>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex gap-4 mb-6 justify-start">
              <button
                type="button"
                onClick={() => setReturn(false)}
                className={`px-5 py-2 rounded-md font-medium ${!isReturn ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {t('from')}
              </button>
              <button
                type="button"
                onClick={() => setReturn(true)}
                className={`px-5 py-2 rounded-md font-medium ${isReturn ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {t('to')}
              </button>
            </div>

            <div className={`grid gap-4 mb-6 items-end ${isReturn ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'}`}>
              <div>
                <label className="block text-sm text-gray-700 mb-1">{t('from')}</label>
                <input ref={fromRef} type="text" className="w-full border rounded-md px-4 py-2" required />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">{t('to')}</label>
                <input ref={toRef} type="text" className="w-full border rounded-md px-4 py-2" required />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">{t('departure')}</label>
                <input ref={departureRef} type="date" className="w-full border rounded-md px-4 py-2" required />
              </div>

              {isReturn && (
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t('return')}</label>
                  <input ref={returnRef} type="date" className="w-full border rounded-md px-4 py-2" />
                </div>
              )}

              <div className={isReturn ? '' : 'col-span-1'}>
                <label className="block text-sm text-gray-700 mb-1">{t('passengers')}</label>
                <input ref={passengersRef} type="number" min="1" defaultValue={1} className="w-full border rounded-md px-4 py-2" required />
              </div>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-lg font-medium">
              {t('search')}
            </button>
          </div>
        </form>
      </div>

      <Toaster />
    </section>
  );
};

export default Tickets;
