import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function Socials() {
  return (
    <div>
      <ul className="flex justify-center space-x-5 mt-6">
        <a
          href="https://www.linkedin.com/in/muhammad-salman-ahmed/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/_light_vader" target="_blank">
          <FiTwitter />
        </a>
        <a
          href="https://www.instagram.com/conkyyy__/?igshid=Mzc1MmZhNjY%3D"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </ul>
    </div>
  );
}
