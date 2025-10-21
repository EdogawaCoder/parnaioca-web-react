'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Field from "../../molecules/Field";
import { useAuth } from "../../../hooks/useAuth";



export default function LoginForm() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const router = useRouter();
  const { saveUserLocalStorage } = useAuth();

  const onSubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== "teste@teste.com" || password !== "teste123") {
      alert("Email or password is incorrect");
      return;
    }

    saveUserLocalStorage(email);
    router.push("/dashboard");
    
    
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={onSubmitFunction}>



        <Field
          text="E-mail"
          type="email"
          placeholder="Type your email"
          onInput={setEmail}
        />




        <Field
          text="Password"
          type="password"
          placeholder="Type your password"
          onInput={(res: string) => setPassword(res)}
        />


        <button
          type="submit"
          className="bg-gray-200 hover:bg-gray-400 px-6 py-2 rounded-xl mt-10"
        >
          Login
        </button>
      </form>
    </div>
  );





}

