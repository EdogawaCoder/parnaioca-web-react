'use client'

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import Navbar from "@/components/organisms/Navbar";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     const {isAuthenticated}  = useAuth();
    

    useEffect(() => {
        isAuthenticated();
    }, [isAuthenticated]);



  return <>

  <Navbar />
  {children}
  </>;
  
  }