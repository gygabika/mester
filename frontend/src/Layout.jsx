import { Navbar } from "./komponensek/Navbar"
import { Outlet } from "react-router-dom"
import { Logo } from './assets/ceg_logo.png'

export function Layout() {
    return(
        <>
                <Navbar/>
            <main>
                <Outlet/>
            </main>
            
        </>
    )
}

