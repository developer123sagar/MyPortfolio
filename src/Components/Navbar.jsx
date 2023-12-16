import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <nav className="bg-bblack">
                <div className='flex justify-evenly items-center py-5 text-base'>
                    <div className='text-tgolden text-3xl'>
                        <a href='/'>Roju</a>
                    </div>
                    <div className="navlist flex space-x-20 text-twhite">
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>HOME</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>ABOUT</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>PORTFOLIO</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>CONTACT</a>
                    </div>
                    <button className='bg-tgray border-2 border-tgray px-3 flex items-center rounded-sm text-twhite hover:bg-bblack hover:text-tgolden'>
                        <ion-icon name="code-sharp"></ion-icon>
                        <span className='m-2'>HIRE ME</span>
                        <ion-icon name="code-slash-sharp"></ion-icon>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar