import React from "react";
import SideNav from "./_components/SideNav"


export default function DashboardLayout({children} : any){
    return (
        <div>
          <div className="fixed md:w-64 hidden md:block">
            <SideNav/>
          </div>
          <div>
            {children}
          </div>
        </div>
    );
  }
  