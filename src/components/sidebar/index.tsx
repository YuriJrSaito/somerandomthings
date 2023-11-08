'use client'
import styles from './sidebar.module.css'
import { useState, useRef } from 'react'

const navItems = ["home", "settings", "backup", "mail", "cloud"];

export const Sidebar = () => {
    const [width, setWidth] = useState(60);
    const sidebarRef = useRef<HTMLElement>(null);
    const sidebar = sidebarRef.current;

    const resize = (e: any) => {

        let newWidth:number = e.clientX - sidebar?.offsetLeft!;
        console.log(newWidth);
        
        if (Number.isNaN(newWidth))
            newWidth = e.touches[0].clientX - sidebar?.offsetLeft!;

        if (newWidth < 61) newWidth = 60;
        if (newWidth > 259) newWidth = 260;
        setWidth(newWidth);
    };

    const stopResize = () => {
        document.body.style.cursor = "default";
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResize);
        window.removeEventListener("touchmove", resize)
        window.removeEventListener("touchend", stopResize)
    };

    const initResize = () => {
        document.body.style.cursor = "col-resize";
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
        window.addEventListener("touchmove", resize)
        window.addEventListener("touchend", stopResize)
    };


    return (
        <aside ref={sidebarRef} style={{ width: `${width}px` }} className={styles.sidebar}>
            <div className={styles.handle} onTouchMove={initResize} onMouseDown={initResize}></div>
            <div className={styles.sidebarInner}>
                <header className={styles.sidebarHeader}>
                    <button type="button" className={styles.sidebarBurger}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <img src="" className={styles.sidebarLogo} />
                </header>
                <nav className={styles.sdebarMenu} >
                    {navItems.map((item) => (
                        <button key={item} type="button" className={styles.sidebarButton} >
                            <span className="material-symbols-outlined">{item}</span>
                            <p>{item}</p>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};