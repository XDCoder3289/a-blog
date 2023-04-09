import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="">
        <ul className="flex justify-center space-x-8 mt-11 text-xl text-slate-300">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blogs</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
