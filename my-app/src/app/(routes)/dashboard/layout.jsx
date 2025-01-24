import React from "react"
import SideNav from "../../../components/SideNav";


export default function DashboardLayout({children}){
    return (
        <div className="">
            <div className="fixed md:w-64 hidden md:block bg-red-100">
                <SideNav/>
            </div>
            <div className="md:ml-64 bg-green-200">
                {children}
            </div>
        </div>
    )
}