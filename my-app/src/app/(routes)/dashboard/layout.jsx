import React from "react"
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";


export default function DashboardLayout({children}){
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