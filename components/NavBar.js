import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function Home() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <Image alt="nav_image" src="/vercel.svg" width="100" height="60"/>
            <div>
                <Link href="/">
                    <a 
                        className={[
                            styles.link,
                            router.pathname === "/" ? styles.active : "",
                        ].join(" ")}
                    >
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a 
                        className={[
                            styles.link,
                            router.pathname === "/about" ? styles.active : "",
                        ].join(" ")}
                    >
                        About
                    </a>
                </Link>
            </div>
        </nav>
    )
}