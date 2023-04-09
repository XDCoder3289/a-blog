import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function Socials() {
  return (
    <div>
      <ul className="flex justify-center space-x-5 mt-6">
        <Link href="/">
          <FaLinkedinIn />
        </Link>
        <Link href="/about">
          <FiTwitter />
        </Link>
        <Link href="/">
          <BsInstagram />
        </Link>
      </ul>
    </div>
  );
}
