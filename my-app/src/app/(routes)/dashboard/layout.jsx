"use client"

import React, { useEffect } from "react"
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from '@/utils/dbConfig.ts';
import { Budgets } from '@/utils/schema.ts';
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";


export default function DashboardLayout({children}){


    const {user} = useUser();
    const router = useRouter();
    useEffect(() => {
        user&&checkUserBudgets();
    },[user])

    const checkUserBudgets = async() => {
        const result = await db.select().from(Budgets).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress));


        console.log(result);
        if(result?.length==0){
            router.replace('/dashboard/budgets')
        }
    }
    return (
        <div className="">
            <div className="fixed md:w-64 hidden md:block bg-red-100">
                <SideNav/>
            </div>
            <div className="md:ml-64">
                <DashboardHeader/>
                {children}
            </div>
        </div>
    )
}