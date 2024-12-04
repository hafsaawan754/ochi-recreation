import React from 'react';

function About() {
    return (
        <div className='w-full   bg-[#CDEA68] rounded-ti-3xl rounded-tr-3xl text-black'>
            <div className='font-[ "Neue Montreal" ] text-[4vw] leading-[4.5vw] tracking-tight p-20'>
                <h1>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds,
                    sell proudcts, explain complex ideas, and hire great people.</h1>
            </div>
            <div className='w-full pb-20 flex border-t-[1px] border-zinc-800'>
                <div className='font-[ "Neue Montreal" ] text-[1.2vw] pt-5 leading-[2vw]  w-[42vw] px-20 '>
                    <p>What you can expect:</p>
                </div>
                <div className=' font-[ "Neue Montreal" ] text-[1.2vw] leading-[1.5vw]  w-[30vw] px-12'>
                    <p className='p-5'>We create tailored presentations to help you persuade your colleagues, clients, or investors.
                        Whether it's live or digital, delivered for one or a hundred people.</p>
                    <p className='p-5'>We believe the mix of strategy and design (with a bit of coffee)
                        is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='py-20 pb-20 pt-32 font-[ "Neue Montreal" ] text-[1.2vw] leading-[1,5vw]  '>
                    <p>S:</p>
                    <ul>
                        <li>Instragram</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

            </div>
            <div className=' border-t-[1px] p-20 pt-5  border-zinc-800 w-fwll flex'>
                <div className='w-1/2 '>
                <h1 className='text-5xl'>Our approach:</h1>
                <button className='px-10 py-6 mt-10 flex bg-zinc-900 rounded-full text-white gap-10 uppercase items-center'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-green-300 rounded-3xl'>

                </div>

            </div>
        </div>
    );
}

export default About;
