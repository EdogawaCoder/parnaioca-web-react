'use client'

import { Button, Stack } from "@mui/material";
import { error } from "console";
import { useEffect, useState } from "react";
import GridUsers from "@/components/organisms/GridUsers";

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    isActive: boolean;
    lastLogin: Date;
}


const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    try {
        useEffect(() => {
            const getData = async () => {
                const responseRaw = await fetch('http://localhost:3000/api/users');
                const data = await responseRaw.json();
                setUsers([data]);
            };
            getData();
        }, []);
    } catch (error) {
        console.error(error);
    }

    return (
        <>

            <div>
                <GridUsers />
            </div>


        </>
    )
}



export default UsersPage
