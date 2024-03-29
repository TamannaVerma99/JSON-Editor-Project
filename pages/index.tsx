import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-r from-startBlue to-endBlue bg-no-repeat">
      <header className="text-black h-[85px] bg-white fixed top-0 z-[170] shadow-xl w-full">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <Logo />
        </div>
      </header>
      <section className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-20">
          <img
            src="/try2.png"
            className="h-[500px] w-full lg:w-[500px] md:w-[400px] mx-auto lg:mx-0 my-16"
          />
          <div className="flex flex-col justify-center items-center lg:items-start mt-8 ml-4">
            <h3 className="text-center lg:text-left text-h3mobile md:text-h3 lg:text-h1 font-semibold mb-4">
              Welcome aboard our JSON Schema adventure!
            </h3>
            <p className="lg:pr-8 mb-6 text-center lg:text-left">
              Discover the basics of JSON Schema and learn how to validate
              structured data with ease. From simple tricks to mastering the
              essentials, we'll guide you through every step.
            </p>
            <Link href="/firststep">
              <button className="w-[120px] lg:w-[500px] md:w-[200px] h-[45px] rounded border-2 bg-primary text-white">
                Start
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const Logo = () => (
  <Link href="/" className="">
    <img src="/logo.svg" className="h-12 mr-2" />
  </Link>
);
