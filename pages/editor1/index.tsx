"use client"
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Hello from '~/components/Hello';
const App1: React.FC = () => { 
  return (
    <>
    <div className='flex h-[100vh] w-full flex-col bg-gradient-to-r from-startBlue from-1.95% to-endBlue'>
    <Hello schemaType="schema"/>
    <Link href="/secondstep">
      <div style={{ margin:'2%',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button className=' w-full md:w-1/2 px-[10px] py-[20px] bg-primary text-white rounded border-2 text-white '>
         Move to next step
        </button>
      </div>
      </Link>
      </div>
    </>
  );
}

export default App1;