'use client'

import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";
import { useSession } from 'next-auth/react';

export default function Profile() {
    const session = useSession()

    return (
        <section className="d_flex_row j_center a_center" style={{ marginBottom: '450px'}}>
            {session.data?.user?.image && <img src={session.data.user.image} style={{ borderRadius: '30px'}}></img>} 
            <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '32px', marginLeft: '10px'}}>Профиль <span style={{ color: 'yellowgreen'}}>{session.data?.user?.name}</span></h1>
        </section>
    )
}
