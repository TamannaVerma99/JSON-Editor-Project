import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Home() {

  return (
    <main className="font-sans h-full w-full flex flex-col items-center bg-gradient-to-r from-startBlue to-endBlue bg-no-repeat">

       <header
            className='text-black w-full h-[85px] bg-white fixed top-0 z-[170] shadow-xl drop-shadow-lg mb-6'
          >     
      <div className='w-full flex md:justify-between items-center ml-8 2xl:px-12 py-4'>    
              <Logo/>
            </div>
            </header>
            <section className='clip-bottom w-full'>
<section className='max-w-[1400px] w-full lg:flex lg:gap-20 my-16 mx-16'>
          <img
            src='/try2.png'
            className='h-[500px] w-5/6 mx-auto lg:w-[400px] my-16 '
          />
          <div className='w-5/6 md:w-3/5 mx-auto mt-12 flex flex-col justify-center items-flex-end'>
            <h3 className=' text-center lg:text-left text-h3mobile md:text-h3 lg:text-h1 font-semibold mb-4'>
            Welcome aboard our JSON Schema adventure!
            </h3>
            <p className='lg:pr-8 mb-4 text-center lg:text-left '>
            Discover the basics of JSON Schema and learn how to validate structured data with ease. From simple tricks to mastering the essentials, we'll guide you through every step.
            </p>
            <Link href='/firststep'>
            <button className='w-full md:w-1/2 md:ml-28 lg:ml-0 mx-auto  h-[45px] rounded border-2 bg-primary text-white'>
              Start
            </button>
            </Link>
          </div>
        </section>

        </section>
    </main>
  );
}
const Logo = () => (
  <Link href='/' className=''>
    <img src='/logo.svg' className='h-12 mr-2 ' />
  </Link>
);