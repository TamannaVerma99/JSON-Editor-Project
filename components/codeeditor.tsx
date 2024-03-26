import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json";
import Ajv2020 from "ajv/dist/2020"
import bgValid from '/congratsmsg.gif';
import bgPrompt from '/ro.gif';
import Link from 'next/link';
const ajv = new Ajv2020({allErrors: true})
require("ajv-errors")(ajv)
const schema = {
  $schema: "https://json-schema.org/draft/2020-12/schema"
}

const schema1=[1,2,"3",4,5];

interface editorProps {
  schemaType: string;
}

const Hello = (props: editorProps) => {
  const [value, setValue] = useState(`write your json schema here including "$schema": "https://json-schema.org/draft/2020-12/schema"`);
  const [error, setError] = useState<string | null>(null);
  const [initial, setInitial] = useState(true);
  const selectedSchema = props.schemaType === "schema1" ? schema1 : schema;
  const isValid = !error && !initial;

  const onChange = useCallback((val: string, viewUpdate: any) => {
    setValue(val);
    setInitial(false); // Once user starts entering schema, it's not initial anymore
    try {
      const data1 = JSON.parse(val);
      if (!data1["$schema"]) {
        setError("Please include the '$schema' keyword for Draft 2020-12.");
        return;
      }
      if (selectedSchema == schema1) {
        if (typeof data1 === "object" && Object.keys(data1).length === 0) {
          setError("Schema must define an array of numbers");
          return;
        }
        if (data1.type !== "array" || data1.items?.type !== "number") {
          setError("Schema must define an array of numbers");
          return;
        }
      }
      const valid = props.schemaType === "schema" ? ajv.validate(selectedSchema, data1) : !(ajv.validate(data1, selectedSchema));
      if (!valid) {
        setError(ajv.errorsText());
      } else {
        setError(null);
      }
    } catch (error: any) {
      console.error('Error parsing JSON:', error);
      setError(error.message);
    }
  }, []);
  

  return (
    <>
    <header className='text-black w-full h-[85px] bg-white fixed top-0 z-[170] shadow-xl drop-shadow-lg mb-4'>
        <div className='w-full flex md:justify-between items-center ml-8 2xl:px-12 py-4'>
          <Logo />
        </div>
      </header>
      <div className='lg:mt-8 flex h-full w-full flex-row bg-gradient-to-r from-startBlue from-1.95% to-endBlue bg-no-repeat'>
        <div style={{ margin:'1%', color: 'black', height: '100%', width: '50%', background: 'linear-gradient(to right, from-startBlue, to-endBlue)', borderRadius:'8px'}}>
          <CodeMirror value={value} height="70vh" extensions={[json()]} onChange={onChange} />
        </div>
        <div id="errorcontainer" style={{ margin:'1%', background: '#00509d', color: 'white', height: '70vh', width: '50%', overflow: 'auto', border:'solid white', borderRadius:'8px',display:'flex',justifyContent:'center',alignItems:'center', backgroundImage: isValid ? `url(${bgValid.src})`: 'none', backgroundSize: 'cover' }}>
          {value === 'write your json schema here including "$schema": "https://json-schema.org/draft/2020-12/schema"' ? ( 
            <p style={{ padding:'15px' }}>please enter your JSON schema
 </p>
          ) : (
            error ? <p style={{ padding:'15px' }}>{error}</p> : <p style={{ padding:'15px' }}>Excellent! You have entered a valid JSON Schema </p>
          )}
        </div>
      </div>
    </>
  );
}
const Logo = () => (
    <Link href='/' className=''>
      <img src='/logo.svg' className='h-12 mr-2 ' />
    </Link>
  );
export default Hello;
