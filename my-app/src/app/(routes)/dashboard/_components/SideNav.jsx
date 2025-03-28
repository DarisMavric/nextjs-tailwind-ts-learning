"use client"

import Image from 'next/image';
import React from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav(){
  const menuList=[
    {
      id:1,
      name:'Dashboard',
      icon:LayoutGrid,
      path: '/dashboard'
    },
    {
      id:2,
      name:'Budgets',
      icon:PiggyBank,
      path: '/dashboard/budgets'
    },
    {
      id:3,
      name:'Expenses',
      icon:ReceiptText,
      path: '/dashboard/expenses'
    },
    {
      id:4,
      name:'Upgrade',
      icon:ShieldCheck,
      path: '/dashboard/upgrade'
    },
  ]

  const path=usePathname();
  return (
    <div className="h-screen p-5 border shadow-sm">
        <Image src={'https://expense-tracker-tubeguruji.vercel.app/logo.svg'}
        width={150}
        height={150}
        alt='icon'/>
        <div className='mt-5'>
          {menuList.map((menu,index)=> (
            <Link href={menu.path}>
            <h2 className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md
            hover:text-primary hover:bg-blue-100 ${path===menu.path&&'text-primary bg-blue-100'}`}>
              <menu.icon/>
              {menu.name}
            </h2>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-0 p-5 flex gap-2">
          <UserButton/>
          Profile
        </div>
    </div>
  )
}

export default SideNav;