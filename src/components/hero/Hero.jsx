import React from 'react'
import { FaUsers, FaGlobe, FaClock} from "react-icons/fa";

const Hero = () => {
  return (
    <section className='bg-[#F26522] h-[742px] relative'>
      <div className='container mx-auto'>
        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white'>
          <h2 className='text-[60px] font-bold max-w-[1000px] mx-auto whitespace-nowrap mb-4'>
            Sayohatingizni biz bilan boshlang
          </h2>
          <p className='mb-12 text-2xl font-normal text-center'>Nemo Travel - huzur uchun yo'l</p>

          <div className="flex items-center justify-center text-black">
            <div className="w-[809px] h-[108px] bg-white rounded-[55px] shadow-md">
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-[44px]">
                  <div className="flex items-center gap-3">
                    <div className="text-white bg-[#F26522] p-2 rounded-[50%] text-2xl">
                      <FaUsers />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Mannun mijozlar</p>
                      <p className="font-semibold text-lg">45000+</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-white bg-[#F26522] p-2 rounded-[50%] text-2xl">
                      <FaGlobe />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Mamlakatlar</p>
                      <p className="font-semibold text-lg">30+</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-white bg-[#F26522] p-2 rounded-[50%] text-2xl">
                      <FaClock />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Tajriba</p>
                      <p className="font-semibold text-lg">5 + yil</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                      <button className="text-white text-md rounded-3xl cursor-pointer py-[8px] px-6 bg-[#F26522] hover:bg-[#E85A1F]">Batafsil malumot</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero