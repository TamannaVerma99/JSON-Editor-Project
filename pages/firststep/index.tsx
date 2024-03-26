import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import "highlight.js/styles/monokai.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



export default function Home() {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null); // Specify the type of useRef
 
  const copyToClipboard = () => {
    if (codeRef.current) {
      const textArea = document.createElement('textarea');
      textArea.value = codeRef.current.textContent || '';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);

      // Reset the button text after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  useEffect(() => {
    if (codeRef.current) {
      const preElement = codeRef.current.querySelector('pre');
      if (preElement) {
        preElement.style.textAlign = 'center';
      }
    }
  }, []);


  return (
    <main className='mt-0 p-0 h-full w-full flex flex-col items-center bg-gradient-to-r from-startBlue from-1.95% to-endBlue bg-no-repeat'>
      <header className='text-black w-full h-[85px] bg-white fixed top-0 z-[170] shadow-xl drop-shadow-lg mb-4'>
        <div className='w-full flex md:justify-between items-center ml-8 2xl:px-12 py-4'>
          <Logo />
        </div>
      </header>
      <section className='clip-bottom w-full'>
        <div className='max-w-[1400px] text-center mx-auto mt-24 lg:mt-30'>
          <h1 className='lg:leading-header text-h1mobile lg:text-h3 font-semibold text-white text-center px-1 md:px-0'>
            Welcome to the JSON tour's First Step, where data adventures await!
          </h1>
          <h3 className='lg:leading-6 text-h5mobile md:text-[20px] text-white mt-4 lg:mx-16 md:mx-2 p-4 flex'>
            Step into the magical world of JSON, the universal language of data on the web! JSON, short for JavaScript Object Notation, is like the enchanted key that unlocks the secrets of structured information. While JSON is probably the most popular format for exchanging data, JSON Schema is the vocabulary that enables JSON data consistency, validity, and interoperability at scale.
          </h3>
          <h1 className='lg:leading-header text-h1mobile lg:text-h3 font-semibold text-white text-center px-1 md:px-0 mx-auto'>
            Let's Dive In!
          </h1>
          <div className='max-w-[700px] text-center lg:mt-2 mb-6 mx-auto'>
            Imagine you have a magical potion that holds the power of information. This potion, known as JSON, is made up of key-value pairs, just like the secrets whispered between wizards. Here's a glimpse:
          </div>
          <div className='max-w-[700px] lg:w-[700px] md:w-[500px] text-center mx-auto lg:mt-2 relative '>
    <SyntaxHighlighter language="javascript" >{`
                            {"wizard": "merlin",
                              "spell": "Abracadabra",
                              "power": "4" }
      `}
      </SyntaxHighlighter>
  
</div>
<h1 className='lg:leading-header text-h1mobile lg:text-h3 font-semibold text-white text-center px-1 md:px-0 mx-auto'>
            Let's learn about JSON Schema
          </h1>
          <div className='max-w-[700px] text-center lg:mt-2 mb-6 mx-auto'>
          Now, imagine we want to ensure that any JSON data representing a wizard follows the same structure and has the same properties.That's where JSON Schema comes in.  
          <p><b>JSON Schema is like a set of guidelines or rules that specify the structure and content of JSON data. It defines what properties are allowed, what data types they should have, and any additional constraints they must meet.</b></p>
        
          </div>
          <div className='max-w-[700px] lg:w-[700px] md:w-[500px] text-center mx-auto lg:mt-2 relative'>
  
  <button
    className="absolute top-0 right-0 mt-2 mr-2 px-4 py-1 bg-blue-500 text-white rounded"
    onClick={copyToClipboard}
  >
    {copied ? "Copied" : "Copy"}
  </button>
  <div  ref={codeRef}>
  <SyntaxHighlighter language="javascript" >
    {`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/wizard.schema.json",
  "title": "Wizard",
  "description": "Information about a wizard",
  "type": "object",
  "properties": {
    "wizard": {
      "type": "string"
    },
    "spell": {
      "type": "string"
    },
    "power": {
      "type": "number"
    }
  },
  "required": ["wizard", "spell", "power"]
}`}
</SyntaxHighlighter>
</div>
</div>
<h1 className='lg:leading-header text-h1mobile lg:text-h3 font-semibold text-white text-center px-1 md:px-0 mx-auto'>
           $Schema Keyword
          </h1>
<div className='max-w-[700px] text-center lg:mt-2 mb-6 mx-auto'>
The $schema keyword in JSON Schema is used to indicate the version of the JSON Schema standard being used. It provides a URL that points to the JSON Schema draft being followed for validating the JSON data.
   Here,the $schema keyword is set to "https://json-schema.org/draft/2020-12/schema", which indicates that the JSON Schema is based on the draft version 2020-12 of the JSON Schema standard.  
        </div>
          <div className='lg:w-[650px] mx-auto my-10 flex flex-col gap-6 items-center justify-center'>
          Ready to embark on an adventure into the JSON realm? Test your skills by crafting a valid JSON Schema for Draft 2020-12! Click the button below to begin your journey through the JSON Kingdom!
            <Link href='/editor1' className='flex items-center justify-center rounded border-2 border-white text-white w-[194px] h-[40px] font-semibold'>Try it yourself</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const Logo = () => (
  <Link href='/' className=''>
    <img src='/logo.svg' className='h-12 mr-2 ' />
  </Link>
);
