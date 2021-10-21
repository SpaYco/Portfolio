import type { NextPage } from "next";
import Image from 'next/image';
import github from '../assets/images/github.png';

const Nav: NextPage = () => {
  return (
    <nav className='shadow-lg bg-white fixed top-0'>
      <div className='flex flex-wrap place-items-center'>
        <section className='relative mx-auto'>
          <nav className='flex justify-between bg-gray-900 text-white w-screen'>
            <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
              <ul className='md:flex font-semibold font-heading space-x-12'>
                <li>
                  <a className='p-4 duration-75 border border-gray-200 border-solid border-opacity-0 hover:border-opacity-100' href='#about'>
                    About
                  </a>
                </li>
                <li>
                  <a className='p-4 duration-75 border border-gray-200 border-solid border-opacity-0 hover:border-opacity-100' href='#projects'>
                    Projects
                  </a>
                </li>
                <li>
                  <a className='p-4 duration-75 border border-gray-200 border-solid border-opacity-0 hover:border-opacity-100' href='#resume'>
                    Resume
                  </a>
                </li>
                <li>
                  <a className='p-4 duration-75 border border-gray-200 border-solid border-opacity-0 hover:border-opacity-100' href='#contact'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a 
            href="https://www.github.com/SpaYco/portfolio"
            className='text-center h-full mt-2 mr-1'
            target='_blank'
            rel="noreferrer"
            >
            <Image
              src={github}
              alt='github logo linking to source code'
              layout="fixed"
            />
            </a>
          </nav>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
