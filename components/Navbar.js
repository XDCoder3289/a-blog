import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  const activeClass = "text-cyan-600";
  const inActiveClass = "";

  return (
    <div>
      <nav className="">
        <ul className="flex justify-center space-x-8 mt-11 text-xl text-slate-300 text-">
          <Link href="/">
            <li className={isActiveLink("/") ? activeClass : inActiveClass}>
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={isActiveLink("/about") ? activeClass : inActiveClass}
            >
              About
            </li>
          </Link>
          <Link href="/blog">
            <li className={isActiveLink("/blog") ? activeClass : inActiveClass}>
              Blogs
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
