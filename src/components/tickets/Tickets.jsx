import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Tickets = () => {
  const [isReturn, setReturn] = useState(false)

  const xatolik = () => {
    toast.error('Xatolik yuz berdi!')
  }

  return (
    <section id='tickets' className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Aviachipta​lar</h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setReturn(false)}
              className={`px-5 py-2 rounded-md font-medium ${
                !isReturn ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Borish
            </button>
            <button
              onClick={() => setReturn(true)}
              className={`px-5 py-2 rounded-md font-medium ${
                isReturn ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Qaytish
            </button>
          </div>

          <div className={`grid gap-4 mb-6 items-end ${
            isReturn ? 'grid-cols-5' : 'grid-cols-4'
          }`}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Qayerdan</label>
              <input type="text" className="w-full border rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Qayerga</label>
              <input type="text" className="w-full border rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Jo'nash sanasi</label>
              <input type="date" className="w-full border rounded-md px-4 py-2" />
            </div>

            {isReturn && (
              <div>
                <label className="block text-sm text-gray-700 mb-1">Qaytish sanasi</label>
                <input type="date" className="w-full border rounded-md px-4 py-2" />
              </div>
            )}

            <div className={isReturn ? '' : 'col-span-1'}>
              <label className="block text-sm text-gray-700 mb-1">Yo'lovchilar</label>
              <input type="number" min="1" defaultValue={1} className="w-full border rounded-md px-4 py-2" />
            </div>
          </div>

          <button onClick={xatolik} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-lg font-medium">
            Qidirish
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tickets
