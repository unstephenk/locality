import {Header} from '@/components/Header/Header';

import {Jumbotron} from "@/components/Jumbotron/Jumbotron";

export default function Home() {
    const navigationLinks = [
        {
            name: "Home",
            url: "/",
            position: "left",
            order: 1
        },
        {
            name: "About",
            url: "/about",
            position: "left",
            order: 2
        },
        {
            name: "Sign Up",
            url: "/login",
            position: "right",
            order: 1
        }
    ]

    return (
        <>
            <Header navLinks={navigationLinks}></Header>
            <Jumbotron></Jumbotron>
        </>
    )
        ;
}
