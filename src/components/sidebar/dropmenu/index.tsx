'use client'
import '../sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";
import { useState, useEffect } from "react";

const Dropmenu = ({ sidebar }: { sidebar: boolean }) => {
    const [submenu, setSubmenu] = useState<boolean>(false);

    useEffect(() => {
        if (sidebar)
            setSubmenu(false);
    }, [sidebar])

    return (
        <li onClick={e => setSubmenu(!submenu)} className={`${submenu == true && sidebar == true ? 'show' : ''}`}>
            <div className="drop-menu">
                <div className="link-wrapper">
                    <GridViewIcon className="link-icon" />
                    <span className="link-name">Dashboard</span>
                    <KeyboardArrowDownIcon className="link-arrow" />
                </div>
                <ul className="sub-menu">
                    <li><Link href="/"><div className="sub-menu-link">Submenu</div></Link></li>
                    <li><Link href="/"><div className="sub-menu-link">Submenu</div></Link></li>
                    <li><Link href="/"><div className="sub-menu-link">Submenu</div></Link></li>
                    <li><Link href="/"><div className="sub-menu-link">Submenu</div></Link></li>
                </ul>
            </div>
        </li>
    )
}

export default Dropmenu;