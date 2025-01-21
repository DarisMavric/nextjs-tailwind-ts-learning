'use client'

import LoginForm from "@/components/LoginForm"

export default function Page(){
    return (
        <div className=" h-screen flex items-center justify-center">
            <div className="w-[350px] p-[10px] bg-black text-white ">
                <LoginForm/>
            </div>
        </div>
    )
}