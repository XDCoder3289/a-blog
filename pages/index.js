import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { SiProbot } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";
import Socials from "@/components/SocialsIcons";
import BiBody from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-5 mt-32">
      <Head>
        <title>Salman's Blog</title>
      </Head>
      <div className="flex justify-center mb-8 ">
        <h1 className="text-3xl font-semibold text-cyan-500">
          Hey, Sal here...
        </h1>
      </div>
      <div className="flex justify-center text-9xl text-cyan-500">
        <BiBody />
      </div>
      <div className="flex justify-center mt-6 mx-10 sm:mx-96 text-center text-cyan-500">
        <p>
          Welcome to my blog! I love to code, but I'm a full time SEO. Fingers
          crossed for what the future holds for me!
        </p>
      </div>
      <div className="">
        <Navbar />
        <Socials />
      </div>
    </main>
  );
}
