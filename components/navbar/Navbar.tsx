import { HomeFillIcon } from "@primer/octicons-react"
import Link from "next/link"
import path from "path"
import { text } from "stream/consumers"
import { ActiveLink } from "../active-link/ActiveLink"
const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' }

]
export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link className="m-1 p-2" href="/">
                <HomeFillIcon className=" mr-2" />
                <span>Home</span>
            </Link>
            <div className="flex-1"></div>
            {
                navItems.map(navItem => (
                   <ActiveLink key={navItem.path} {...navItem}/>
                ))
            }



        </nav>
    )
}
