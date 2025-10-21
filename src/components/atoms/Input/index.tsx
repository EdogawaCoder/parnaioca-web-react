'use client'

import { useState } from "react";

import  { InputProps } from "./type";

export default function Input({type, className = '', placeholder, onInput}:InputProps){
    
    const [data, setData] = useState('');

    return (
        <input
        type={type}
        className={'border rounded' + className}
        placeholder={placeholder}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            onInput(e.target.value);
        }   }
        />
    )


}


