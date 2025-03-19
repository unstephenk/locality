/*import Image from "next/image";
import styles from "./page.module.css";*/
import Link from "next/link";
import Header from '@/components/Header/Header';

export default function Home() {
    const leftNavLinks = [
        {
            name: "Home",
            url: "/",
            position: "left"
        },
        {
            name: "About",
            url: "/about",
            position: "left"
        },
        {
            name: "Sign Up",
            url: "/login",
            position: "right"
        }
    ]

    return (
        <>
            <Header navLinks={leftNavLinks}></Header>
        </>
    );
}
