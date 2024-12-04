import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {

    return (
        <div className=' w-full pt-20 pb-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
            <div className='gap-15 text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-300'>
                <motion.h1 className='text-[18vw] leading-none font-["Test Founders Grotest X-Cond SmBd"] tracking-tighter font-semibold uppercase '>We are ochi
                </motion.h1>
                <motion.h1 className='text-[18vw] leading-none font-["Test Founders Grotest X-Cond SmBd"] font-semibold uppercase '>We are ochi
                </motion.h1>
            </div>

        </div>
    );
}

export default Marquee;
