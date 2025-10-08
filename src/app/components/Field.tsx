'use client';

import Input from "./Input";
import Label from "./Label";

interface FieldProps {
    text: string;   
    type: string;
    className?: string;
    placeholder: string;
    onInput: (text: string) => void;
    
}


export default function Field(
    {text,type, className, placeholder, onInput}:FieldProps){
    return(
        <div>
            <div className="mb-4 grid grid-cols-4">
                      <Label text={text} />
            
                      <Input
                        type={type}
                        className={`col-span-3` + className}
                        placeholder=   {placeholder}
                        onInput={onInput}
                      />
                    </div>
        </div>
    )
}