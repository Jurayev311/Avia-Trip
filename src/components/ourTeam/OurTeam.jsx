import React from 'react'

const TEAMINFO = [
    { name: "Direktor" },
    { name: "Yurist" },
    { name: "Operator" },
    { name: "Administrator" }
]

const OurTeam = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='text-center mt-12 text-3xl font-bold'>
                    <h2>Bizning jamoa</h2>
                </div>

                <div className='grid grid-cols-4 mt-12 items-center justify-items-center'>
                    {
                        TEAMINFO?.map((item, index) => (
                            <div className="w-[224px] h-[120px] shadow-[0_8px_30px_rgba(255,92,0,0.3)] rounded-xl flex items-center justify-center hover:shadow-[0_8px_30px_rgba(255,92,0,0.5)] cursor-default duration-200" key={index}>
                                <h2 className='text-xl font-semibold text-black'>{item.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeam