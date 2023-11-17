'use client'
import { useState } from "react"
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Template1Context } from "./Template1Context";

export const Template1Provider = ({ children }: { children: React.ReactNode }) => {

    const [sidebar, setSidebar] = useState<boolean>(true);

    return (
        <Template1Context.Provider value={{ sidebar }}>
            <div className="menus">
                <div className={`left ${sidebar == true ? '' : 'close'}`}>
                    <Sidebar sidebar={sidebar} />
                </div>
                <div className='top'>
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Template1Context.Provider>
    )
}