import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className='textstructure mt-40 px-12'>
                {["We create", "Eye Opening", "Persentation"].map((items, index) => {
                    return (<div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (<div className=' w-[8vw] h-[6vw] bg-red-500  rounded-md '></div>)}
                            {/* {index === 1 && (<div className='mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'></div>)} */}
                            <h1 className='flex items-center uppercase text-[8vw] leading-[7vw] tracking-tighter   font-["Test Founders Grotest X-Cond SmBd"] font-semibold'>
                            {/* <h1 className='pt-[2vw] -md-[1vw] uppercase text-[9vw] leading-[.75] font-["Test Founders Grotest X-Cond SmBd"] font-semibold"]'> */}
                                {items}
                                
                            </h1>
                        </div>
                    </div>);
                })}

                {/* <div className='masker'>
                    <h1 className=' uppercase text-7xl leading-[5vw] tracking-tighter  font-["Test Founders Grotest X-Cond SmBd"] font-semibold'>
                    We Create</h1>
                </div>
                <div className='masker'>
                    <h1 className=' uppercase text-7xl leading-[5vw] tracking-tighter  font-["Test Founders Grotest X-Cond SmBd"] font-semibold'>
                    Eye Opening</h1>
                </div>
                <div className='masker'>
                    <h1 className=' uppercase text-7xl leading-[5vw] tracking-tighter  font-["Test Founders Grotest X-Cond SmBd"] font-semibold'>
                    Presentations</h1>
                </div>  */}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private compines", "from the first pitch to IPO"].map((items, index) => (<p className='text-md font-light tracking-tight leading-none'>
                    {items} </p>))}

                <div className='start flex items-centergap-5'>
                    <div className=' px-5 py-2 border-[2px]   border-zinc-400 font-light text-md uppercase rounded-full'>
                        start the project
                    </div>
                    <div className='w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
