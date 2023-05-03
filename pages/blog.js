import Link from "next/link";
import Navbar from "@/components/Navbar";
import Socials from "@/components/SocialsIcons";
import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="flex text-left justify-center py-9">
        <h1 className="text-5xl flex text-cyan-500">Blog Posts</h1>
      </div>
      <div className="flex justify-center px-20">
        <ul className="">
          {allPostsData.map(({ id, Date, Title, Category }) => {
            console.log(Title);
            return (
              <li key={id} className="text-1xl">
                <Link href={`/post/${id}`}>{Title}</Link>
                <div className="text-xs text-slate-300">{Category}</div>
                <div className="text-xs text-slate-500 mb-5">{Date}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-11">
        <Navbar />
        <Socials />
      </div>
    </div>
  );
}
