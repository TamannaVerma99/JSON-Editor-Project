"use client"
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Hello from '~/components/codeeditor';
const App2: React.FC = () => { 
  return (
    <>
  
    <div className='flex h-full mt-[85px] lg:mt-[80px] md:mt-[85px] w-full flex-col bg-gradient-to-r from-startBlue from-1.95% to-endBlue'>
    <div className='max-w-[700px] lg:mt-[20px] text-center mx-auto'>
          Write a JSON Schema to validate the JSON Array of artifacts represented as numerical values.
          </div>
    <div className='lg:mt-0'>
    <Hello  schemaType="schema1"/>
    </div>
    <div className='lg:w-[650px] mx-auto my-10 flex flex-col gap-6 items-center justify-center'>
    <h2><b>Congratulations on completing the JSON tour's First and Second Steps!</b></h2> You've embarked on a thrilling adventure through the realms of JSON and JSON Schema, uncovering the mysteries of structured data along the way. But remember, this is just the beginning of your journey!
        Curious to learn more about JSON Schema ?
            <a href='https://json-schema.org/' className='flex items-center justify-center rounded border-2 border-white text-white w-[194px] h-[40px] font-semibold'>Explore More</a>
          </div>
      </div>
   
    </>
  );
}

export default App2;
