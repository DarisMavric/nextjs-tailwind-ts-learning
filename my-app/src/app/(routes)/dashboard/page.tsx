'use client'

import { SignOutButton, useUser } from "@clerk/nextjs";
import CardInfo from "./budgets/_components/CardInfo";
import { useEffect, useState } from "react";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "@/utils/schema";

export default function Dashboard() {

    const { isLoaded, isSignedIn, user } = useUser();
    const [budgetList,setBudgetList] = useState([]);

    useEffect(() => {
        user&&getBudgetList();
    },[user])
    
        const getBudgetList = async() => {
            const result = await db.select({
                ...getTableColumns(Budgets),
                totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
                totalItem: sql `count(${Expenses.id})`.mapWith(Number)
            }).from(Budgets)
            .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
            .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress as any))
            .groupBy(Budgets.id)
            .orderBy(desc(Budgets.id))
            setBudgetList(result as any);
    
    
            console.log(result);
        }

    return (
        <div className="p-5">
            <h2 className="font-bold text-3xl">Hi, {user?.fullName}</h2>
            <p className="text-gray-500">Here's what's happenning with your money,Lets Manager your expense</p>

            <CardInfo budgetList={budgetList}/>
        </div>
    )
}