import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation(){
    const router = useRouter();
    return (
        <div className="sidenav">
            <div className="link">
                <Link className={router.pathname == "/" ? "active" : ""} href="/">
                    Dashboard
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/products" ? "active" : ""} href="/categories">
                    Categories
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/tags" ? "active" : ""} href="/tags">
                    Tags
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/articles" ? "active" : ""} href="/articles">
                    Articles
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/users" ? "active" : ""} href="/users">
                    Users
                </Link>
            </div>
        </div>
    )
}