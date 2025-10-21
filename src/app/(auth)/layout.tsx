'use client'


import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/organisms/Navbar";
import Menu from "@/components/organisms/Menu";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  const { isNotAuthenticated } = useAuth();

  useEffect(() => {
    isNotAuthenticated();
  }, [isNotAuthenticated]);




  return (
    <>
      <Navbar />

  <div className="flex min-h-screen">
  
  <div className="w-68 bg-black p-1">
    <Menu />
  </div>

  <div className="flex-1 p-6 overflow-auto">
    {children}
  </div>
</div>
  
  </>
  );
}
